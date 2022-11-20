import axios from 'axios'
import React, { useState,useContext} from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
const ContactStudent = () => {
    const {StudentName} = useContext(AuthContext);
    const [cin, setCin] = useState('')
    const [message, setMessage] = useState('')
    const [classe, setClasse] = useState('')
    const history = useHistory();  
    
    const add = async (e) => {
        e.preventDefault();
     

        try {
         console.log(StudentName);
         console.log(cin);
         console.log(message)
         console.log(classe)
         const data={
                "name":StudentName,
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
        <div  className='row'>
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

export default ContactStudent;