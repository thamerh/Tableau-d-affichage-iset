import React, { useEffect, useState } from 'react'
import {Card, Container, Form, Row, Col} from 'react-bootstrap'
import {useParams } from 'react-router'
import axios from 'axios'


const AfficheDetailStudent= () => {

    const {id}  = useParams()
    const [title, setTitle] = useState('')
    const [AfficheDescription, setAfficheDescription] = useState('')
    const [AfficheImage, setAfficheImage] = useState('')


   

    useEffect(() => {
    getSingleAfficheData()
    },[id])

    const getSingleAfficheData = async () => {
        const { data } = await axios.get(`http://localhost:5000/AfficheStudent/${id}`);
        console.log(data)
        setTitle(data.title)
        setAfficheDescription(data.description)
        setAfficheImage(data.image)

     

    }


  

   
    return (
        <div >


        <Container className="mt-10 p-4">
                <h1  className="text-center text-white FontFamily p-4">Affich Detail</h1>
        <Row>
            <Col  className="d-flex justify-content-center" >
                <Card className='shadow-lg m-3 p-4 rounded '>
                        <Card.Img src={`http://localhost:5000/${AfficheImage}`} style={{height: '25rem' ,width: '25rem'  }} fluid />
                        <Card.Body>
                            <Card.Title>Title: {title}</Card.Title>
                           
                            <Card.Text>
                                Description: {AfficheDescription}
                            </Card.Text>
                      
                    </Card.Body>        
                </Card>
            </Col>
         </Row>
    </Container>
</div>
)
}
export default  AfficheDetailStudent;
