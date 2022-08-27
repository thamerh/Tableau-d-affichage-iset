import React, { useEffect, useState } from 'react'
import {Card,  Container, Row, Col} from 'react-bootstrap'
import {  useParams } from 'react-router'
import axios from 'axios'


const EmploiDetailStudent = () => {

    const {id}  = useParams()
    const [AfficheImage, setAfficheImage] = useState('')

   

    useEffect(() => {
    getSingleAfficheData()
    },[id])

    const getSingleAfficheData = async () => {
        const { data } = await axios.get(`http://localhost:5000/EmploiStudent/${id}`);
        console.log(data)
        setAfficheImage(data.image)
    }


  

   
    return (
        <div >


        <Container className="mt-10 p-4">
                <h1  className="text-center text-white FontFamily p-4">Emploi  Detail</h1>
        <Row>
            <Col  className="d-flex justify-content-center" >
                <Card className='shadow-lg m-3 p-4 rounded '>
                        <Card.Img src={`http://localhost:5000/${AfficheImage}`} style={{height: '27rem' ,width: '50rem'  }} fluid />
                              
                </Card>
            </Col>
         </Row>
    </Container>
</div>
)
}
export default  EmploiDetailStudent;
