import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'


export const AfficheDetail = () => {

    const { id } = useParams()
    const history = useHistory()

    const [title, setTitle] = useState('')
    const [AfficheDescription, setAfficheDescription] = useState('')
    const [AfficheImage, setAfficheImage] = useState('')


   

    useEffect(() => {

        const getSingleAfficheData = async () => {
            const { data } = await axios.get(`http://localhost:5000/${id}`)
            console.log(data)

            setTitle(data.title)
            setAfficheDescription(data.description)
            setAfficheImage(data.image)

         

        }
        getSingleAfficheData()

    },[id])


    // handling Delete
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/${id}`)
        history.push('/dashboardAdmin')
    }

  

   
    return (

        <Container className="mt-10 p-4">
                <h1  className="text-center text-white FontFamily p-4">Affich Detail</h1>               
        <Row>
            <Col  className="d-flex justify-content-center " >
                <Card className='shadow-lg m-3 p-4 rounded column is-8-desktop'>
                        <Card.Img src={`http://localhost:5000/${AfficheImage}`}  fluid style={{height:'350px'}} />
                        <Card.Body>
                            <Card.Title>Title: {title}</Card.Title>
                           
                            <Card.Text>
                                Description: {AfficheDescription}
                            </Card.Text>
                      
                        <br />

                    
                            <Link to={`/Affiche/edit/${id}`}>
                                <Button className="btn  m-2" >Edit</Button>
                            </Link>
                            
                            <Button className="btn btn-danger m-2" onClick={() => handleDelete(id)}>Delete</Button> 
                        
                    </Card.Body>        
                </Card>
            </Col>
         </Row>
    </Container>
)
}

 