import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Button, Container, Form} from 'react-bootstrap'
import {  useParams } from 'react-router'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import '../../App.css';
const EditProduct = () => {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
        // getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tokenAdmin');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/loginAdmin");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/tokenAdmin');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });
    const { id } = useParams()
   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [published, setPublished] = useState(true)

    useEffect(() => {
        const getDataById = async () => {
            const {data} = await axios.get(`http://localhost:5000/${id}`)
            setTitle(data.title)
            setDescription(data.description)
            setPublished(data.published)
        }

        getDataById()
    },[id])

   const updateHandler = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            title: title,
            description: description,
            published: published
        }

        await axios.put(`http://localhost:5000/${id}`, data)

        history.push('/dashboardAdmin')

   }

    return (
         
            <Container className='mt-5 p-2 '  >
                <h1  className="text-center text-white FontFamily  p-2 ">Edit Affiche</h1>
                <Form onSubmit={updateHandler} className='w-100 p-3 col-md-6'>
                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label>Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                          />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label>Description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="publishedCheckedid">
                        <Form.Check
                            type="checkbox"
                            value={published}
                            onChange={(e) => setPublished(e.target.checked)}
                            label="publish"
                           />
                    </Form.Group>


                    <Button  type="submit">
                        Update 
                    </Button>
                </Form>
            </Container>
    )
}

export default EditProduct
