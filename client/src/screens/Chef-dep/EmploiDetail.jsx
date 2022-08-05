import React, { useEffect, useState } from 'react'
import {Card, Button, Container, Form, Row, Col} from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useHistory, useParams } from 'react-router'
import axios from 'axios'


const EmploiDetail = () => {

    const { id } = useParams()
    const history = useHistory()

    const [classe, setClasse] = useState('')
    const [department, setDepartment] = useState('')
    const [published, setPublished] = useState(true)
    const [AfficheImage, setAfficheImage] = useState('')


   

    useEffect(() => {

        const getSingleAfficheData = async () => {
            const { data } = await axios.get(`http://localhost:5000/EmploiChef/${id}`)
            console.log(data)

            setClasse(data.classe)
            setDepartment(data.department)
            setPublished(data.published)
            setAfficheImage(data.image)

         

        }
        getSingleAfficheData()

    },[id])


    // handling Delete
    const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/EmploiChef/${id}`)
        history.push('/dashboardChef')
    }

  

   
    return (
        <div style={HeaderStyle}>


        <Container className="mt-10 p-4">
        <div className='border-bottom border-white'>
                <h1  className="text-center text-white FontFamily">Affich Detail</h1>
                <a href='/Afficheschef'><img src='https://static.thenounproject.com/png/2739572-200.png' alt='tttt' className='ImgIconAdmin'/></a>
             </div>
        <Row>
            <Col  className="d-flex justify-content-center" >
                <Card className='shadow-lg m-3 p-4 rounded '>
                        <Card.Img src={`http://localhost:5000/${AfficheImage}`} style={{height: '25rem' ,width: '25rem'  }} fluid />
                        <Card.Body>
                            <Card.Title>classe: {classe}</Card.Title>
                           
                            <Card.Text>
                                Department: {department}
                            </Card.Text>
                            <Card.Text>
                                Published: {published ? (<small>True</small>) : (<small>false</small>)}
                            </Card.Text>
                        <br />

                    
                            <Link to={`/Emploi/edit/${id}`}>
                                <Button className="btn  m-2" >Edit</Button>
                            </Link>
                            
                            <Button className="btn btn-danger m-2" onClick={() => handleDelete(id)}>Delete</Button> 
                        
                    </Card.Body>        
                </Card>
            </Col>
         </Row>
    </Container>
</div>
)
}
export default EmploiDetail;

 const HeaderStyle = {
    width: "100%",
    height: "100%",
    minHeight: "757px",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}