import React, { useState, useEffect,useContext } from 'react'
import axios from 'axios';
import {Container,Row, Col} from 'react-bootstrap'
import AfficheCard from '../../components/AffichChefCard';
import '../secreens.css';
import { AuthContext } from '../../context/AuthContext';
const ShowAffiche = () => {
    const {chefName} = useContext(AuthContext);
    const [Affiche, setAffiche] = useState([])

      useEffect(() => {
        getAllAffiche(chefName) ;
      }, [chefName]);
const getAllAffiche = async (name) => {

      
              const {data}=  await axios.get(`http://localhost:5000/getNomDep/${name}`)
                   
                   // setNomDep(data.dep)
 
                         
                 await axios.get(`http://localhost:5000/allAffichesChef/${data.dep}`).then((response)=>{
                   
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
