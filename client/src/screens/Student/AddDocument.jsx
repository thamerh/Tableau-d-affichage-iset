import axios from 'axios'
import React, { useState,useEffect,useLayoutEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const AddDocument = () => {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    

    const history = useHistory();


  
    useEffect(() => {
        refreshToken();
       
      }, []);
     

      const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tokenEtu');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            
        } catch (error) {
            if (error.response) {
                history.push("/LoginEtu");
            }
        }
       
    }
    
    const axiosJWT = axios.create();
  
    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/tokenEtu');
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
    const add = async (e) => {
        e.preventDefault();
     

        try {
         

            const formData = new FormData();
         
            formData.append('image', image)
            formData.append('title', title)
            formData.append('name', name)
            await axios.post('http://localhost:5000/addDocumentStudent', formData)
            alert("document envoyer avec succès ")
            history.push('/dashboardEtu');
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg);
            }
        }
    };

    return ( 
        <div style={HeaderStyle} className='row'>
            <Container className=' p-2 mt-5'  > 
            <div className='border-bottom border-white'>
                <h1  className="text-center text-white FontFamily">Add Document</h1>
                <a href='/dashboardEtu'><img src='https://static.thenounproject.com/png/2739572-200.png' alt='tttt' className='ImgIconAdmin'/></a>
             </div>
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

                    <Form.Group className="mb-3" controlId="classe">
                        <Form.Label className=" ">name</Form.Label>
                        <Form.Control
                            value={name}
                            type="text"
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Add Document
                    </Button>

                    
                </Form>
            </Container>
        </div>
    )
}

export default AddDocument;
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}