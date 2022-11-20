import React from 'react'
import axios from 'axios';
import  { useState, useEffect } from 'react'
import {Container, Row, Col} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import DocumentAdminCard from '../../components/DocumentAdminCard';

const DocumentAdmin =()=> {
  const [Affiche, setAffiche] = useState([])
    useEffect(() => {
      getAllDocument() ;
    }, []);

const getAllDocument = async ()=> {
    await axios.get(`http://localhost:5000/allDocument`).then((response)=>{
    console.log(response.data);
     setAffiche((response.data));
    });  
       
              
}
                  
 
  return (
      <div >
         <Container  className="justify-content-center p-2">
            <div style={{height:"100%",backgroundColor:"black",color:"white",textAlign:"center"}}> Pour envoyer un document à etudiant<Link to={`AddDocumentAdmin`}><button ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qMVADNUe8YhgmPd7zpY02lFbCgwB0hCKfQ&usqp=CAU" style={{height:"65px"}}></img></button> </Link></div>
             <Row >
                  {
                      Affiche.map(affiche => {
                          return <Col md={6} lg={4} sm={12} key={affiche.id} >
                              <DocumentAdminCard  affiche={affiche} />
                          </Col>
                      })
                  }                 
             </Row>
         </Container>
      </div>
  )

}
export default DocumentAdmin;
