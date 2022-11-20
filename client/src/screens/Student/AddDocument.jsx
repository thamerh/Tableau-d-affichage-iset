import axios from 'axios'
import React, { useState,useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
const AddDocumentStudent = () => {
    const {StudentName} = useContext(AuthContext);
    const [title, setTitle] = useState('')
    const [image, setImage] = useState('')
    

    const history = useHistory();

    const add = async (e) => {
        e.preventDefault();
     

        try {
         

            const formData = new FormData();
         
            formData.append('image', image)
            formData.append('title', title)
            formData.append('name', StudentName)
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
        <div className='row'>
            <Container className=' p-2 mt-5'  > 
                <h1  className="text-center text-white FontFamily p-3">Add Document</h1>
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
                            value={StudentName}
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

export default AddDocumentStudent;
