import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container,Button, Row, Col} from 'react-bootstrap'
import AfficheCard from '../components/AfficheCard';

const ShowAffiche = () => {


    const [Affiche, setAffiche] = useState([])

    useEffect(() => {
        const getAfficheData = async () => {
            const { data } = await axios.get('http://localhost:5000/allAffiches')
            console.log(data)
            setAffiche(data)
        }
    
        getAfficheData()
    },[])

    return (
        <div style={HeaderStyle}>
           <Container  className="justify-content-center p-2">
               <h1 className='text-center text-white p-2 border-bottom border-white'>Show All Affiche</h1>


               <Row >
                    {
                        Affiche.map(affiche => {
                            return <Col md={6} lg={4} sm={12} key={affiche.id} >
                                <AfficheCard affiche={affiche} />
                            </Col>
                        })
                    }
               </Row>


           </Container>

           
        </div>
    )
}

export default ShowAffiche
const HeaderStyle = {
    width: "100%",
    minHeight: "625px",
    height: "100%",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}