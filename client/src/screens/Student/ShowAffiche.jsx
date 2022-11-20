import React, { useState, useEffect , useContext} from 'react'
import axios from 'axios';
import {AuthContext} from '../../context/AuthContext';
import {Container, Row, Col} from 'react-bootstrap'
import AfficheStudentCard from '../../components/AfficheStudentCard';
import '../secreens.css';

const ShowAffiche = () => {
    const {StudentName} = useContext(AuthContext);
    const [Affiche, setAffiches] = useState([]);
      useEffect(() => {
        getAllAffiche(StudentName) ;
      }, [StudentName]);

async function getAllAffiche (name) {

      
             const {data}=await axios.get(`http://localhost:5000/getNomDepClass/${name}`);

            

                      console.log(data.dep) ;
                      console.log(data.classe) ;
          await axios.get(`http://localhost:5000/allAffichesStudent/${data.dep}/${data.classe}`).then((response)=>{

                   console.log((response.data))
                setAffiches((response.data));
                  });  
             
                 
                console.log(Affiche)              
                
                
            }
             console.log(Affiche)     
       
    return (
        <div >
           <Container  className="justify-content-center p-2">
              
               <Row >


                    {
                        Affiche.map(affiche => {
                            return <Col md={6} lg={4} sm={12} key={affiche.id} >
                                <AfficheStudentCard affiche={affiche} />
                            </Col>
                        })
                    }
                    
               </Row>


           </Container>

        </div>
    )
}

export default ShowAffiche
