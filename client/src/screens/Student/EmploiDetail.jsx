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
        <div style={HeaderStyle}>


        <Container className="mt-10 p-4">
        <div className='border-bottom border-white'>
                <h1  className="text-center text-white FontFamily">Emploi  Detail</h1>
                <a href='/dashboardEtu'><img src='https://static.thenounproject.com/png/2739572-200.png' alt='tttt' className='ImgIconAdmin'/></a>
             </div>
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

 const HeaderStyle = {
    width: "100%",
    height: "100%",
    minHeight: "757px",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}