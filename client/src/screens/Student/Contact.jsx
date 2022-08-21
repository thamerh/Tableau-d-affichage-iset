import axios from 'axios'
import React, { useState,useEffect,useLayoutEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const Contact = () => {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [cin, setCin] = useState('')
    const [message, setMessage] = useState('')
    const [classe, setClasse] = useState('')
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
         console.log(name);
         console.log(cin);
         console.log(message)
         console.log(classe)
         const data={
                "name":name,
                "cin":cin,
                "message":message,
                "classe":classe
            }
            await axios.post('http://localhost:5000/addMessageStudent',data);
            alert(" message envoyer avec succès " )
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
            <div className=' p-2 mt-5'>
                <h1  className="text-center text-white FontFamily">Contactez nous</h1>
                <h2 className="text-center text-white FontFamily">Si vous avez besoin d'aide ou d'un document</h2>
                
             </div>
                <Form  onSubmit={add} method="POST" encType='multipart/form-data' className='w-100 p-3 col-md-6'>
                    <Form.Group className="mb-3" controlId="cin">
                        <Form.Label className=" ">CIN</Form.Label>
                        <Form.Control
                            value={cin}
                            onChange={(e) => setCin(e.target.value)}
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
                    <Form.Group className="mb-3" controlId="message">
                        <Form.Label className=" ">message</Form.Label>
                        <Form.Control
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            as="textarea"
                            />
                    </Form.Group>
                    <div style={{textAlign:"center"}}>
                    <Button variant="primary" type="submit" style={{width:"50%"}}>
                    Envoyer
                    </Button>
                    </div>
                    
                </Form>
            </Container>
        </div>
    )
}

export default Contact;
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}