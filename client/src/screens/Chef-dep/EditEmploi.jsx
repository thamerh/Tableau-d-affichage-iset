import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Button, Container, Form} from 'react-bootstrap'
import {  useParams } from 'react-router'
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
const EditEmploi = () => {

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
            const response = await axios.get('http://localhost:5000/tokenChef');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            
        } catch (error) {
            if (error.response) {
                history.push("/LoginChef");
            }
        }
       
    }
    
    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/tokenChef');
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
   
    const [classe, setClasse] = useState('')
    const [department, setDep] = useState('')
    const [published, setPublished] = useState(true)

    useEffect(() => {
        const getDataById = async () => {
            const {data} = await axios.get(`http://localhost:5000/EmploiChef/${id}`)
            setDep(data.department)
            setClasse(data.classe)
            setPublished(data.published)
        }

        getDataById()
    },[id])

   const updateHandler = async (e) => {

        e.preventDefault()
       
        // update by put request

        const data = {
            classe: classe,
            department:department,
            published: published
        }

        await axios.put(`http://localhost:5000/EmploiChef/edit/${id}`, data)

        history.push('/dashboardChef')

   }

    return (
        <div style={HeaderStyle} className='row'>
         
            <Container className='mt-5 p-2 '  >
            <div className='border-bottom border-white'>
                <h1  className="text-center text-white FontFamily">Edit Emploi</h1>
                <a href='/Afficheschef'><img src='https://static.thenounproject.com/png/2739572-200.png' alt='tttt' className='ImgIconAdmin'/></a>
             </div>
                <Form onSubmit={updateHandler} className='w-100 p-3 col-md-6'>
                    
                <Form.Group className="mb-3" controlId="classe">
                        <Form.Label className=" ">department</Form.Label>
                        <Form.Control
                            value={department}
                            type="text"
                            />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="classe">
                        <Form.Label className=" ">Classe</Form.Label>
                        <Form.Control
                            value={classe}
                            onChange={(e) => setClasse(e.target.value)}
                            type="text"
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
        </div>
    )
}

export default EditEmploi;
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}