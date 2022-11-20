import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import EmploiCard from '../../components/EmploiCard';
import '../secreens.css';
import { AuthContext } from '../../context/AuthContext';
const ShowEmploi = () => {
    const {chefName} = useContext(AuthContext);
    const [Affiche, setAffiche] = useState([])
      useEffect(() => {
        getAllAffiche(chefName) ;
      }, [chefName]);


const getAllAffiche = async (name) => {

      
              const {data}=  await axios.get(`http://localhost:5000/getNomDep/${name}`)         
                 await axios.get(`http://localhost:5000/allEmploisChef/${data.dep}`).then((response)=>{
                   
                    setAffiche((response.data));
 
                });  
                console.log(Affiche)             
                
            }
    return (
        <div >
           <Container  className="justify-content-center p-2">
              
               <Row >


                    {
                        Affiche.map(affiche => {
                            return <Col md={6} lg={4} sm={12} key={affiche.id} >
                                <EmploiCard affiche={affiche} />
                            </Col>
                        })
                    }
                    
               </Row>


           </Container>

           
        </div>
    )
}

export default ShowEmploi ;
