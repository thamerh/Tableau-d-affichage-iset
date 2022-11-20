import axios from 'axios'
import React, {useState, useEffect} from 'react'
import { Button, Container, Form} from 'react-bootstrap'
import {  useParams } from 'react-router'
import { useHistory } from 'react-router-dom';
import '../../App.css';
const EditProduct = () => {

    const { id } = useParams()
   
    const [title, setTitle] = useState('')
    const [description, setDescription] = useState('')
    const [published, setPublished] = useState(true)
    const history = useHistory();
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
