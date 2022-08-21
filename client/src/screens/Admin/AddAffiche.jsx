import axios from 'axios'
import React, { useState,useEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
// import { useHistory } from 'react-router';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import '../secreens.css';
import '../../App.css'
const AddAffiche = () => {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
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

    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [published, setPublished] = useState(true)
    const [image, setImage] = useState('')
    // const history = useHistory();
    const add = async (e) => {
        e.preventDefault();
        try {
            const formData = new FormData();

            formData.append('image', image)
            formData.append('title', title)
            formData.append('description', description)
            formData.append('published', published)

            await axios.post('http://localhost:5000/addAffiche', formData)
            history.push('/dashboardAdmin');
        } catch (error) {
            if (error.response) {
                alert(error.response.data.msg);
            }
        }
    };

    return ( 
       <section className=" is-fullheight is-fullwidth "  >
            <Container className=' p-2 mt-5'  > 
            
                <h1  className="text-center text-white FontFamily">Add Affiche</h1>
              
                <Form  onSubmit={add} method="POST" encType='multipart/form-data' className='w-100 p-3 col-md-6'>

                <Form.Group controlId="fileName"  className="mb-3 ">
                    <Form.Label className=" ">Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

                    <Form.Group className="mb-3" controlId="title">
                        <Form.Label className=" ">Title</Form.Label>
                        <Form.Control
                            value={title}
                            onChange={(e) => setTitle(e.target.value)}
                            type="text"
                          />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="description">
                        <Form.Label className=" ">Description</Form.Label>
                        <Form.Control
                            value={description}
                            onChange={(e) => setDescription(e.target.value)}
                            as="textarea"
                            />
                    </Form.Group>

                    <Form.Group className="mb-3 " controlId="publishedCheckedid">
                        <Form.Check
                            type="checkbox"
                            onChange={(e) => setPublished(e.target.checked)}
                            label="publish"
                           />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Add Affiche
                    </Button>

                    
                </Form>
            </Container>
            </section>
    )
}

export default AddAffiche
