import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container,Button, Row, Col} from 'react-bootstrap'
import AfficheCard from '../../components/AfficheCard';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import '../secreens.css';


const ShowAffiche = () => {
    const history = useHistory();
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
        <div >
           <Container  className="justify-content-center p-2">

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
