import React, {useState, useEffect ,useContext}  from 'react'
import axios from 'axios';
import {Container, Row, Col} from 'react-bootstrap'
import DocumentCard from '../../components/DocumentCard';
import '../secreens.css';
import { Link } from 'react-router-dom';
import {AuthContext} from '../../context/AuthContext';
const DocumentStudent =()=> {
  const {StudentName} = useContext(AuthContext);
  const [Affiche, setAffiche] = useState([])

   
    useEffect(() => {
      getAllDocument(StudentName) ;
    }, [StudentName]);
 
  
const getAllDocument = async (name)=> {
if(name){
    console.log(name)
    await axios.get(`http://localhost:5000/getDocumentOneStudent/${name}`).then((response)=>{
    console.log(response.data);
     setAffiche((response.data));
    });  
       
              
}
                  
    }  
  return (
      <div >
         <Container  className="justify-content-center p-2">
            <div style={{height:"100%",backgroundColor:"black",color:"white",textAlign:"center"}}> Pour envoyer un document à l'administrateur <Link to={`AddDocumentStudent`}><button ><img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ5qMVADNUe8YhgmPd7zpY02lFbCgwB0hCKfQ&usqp=CAU" style={{height:"65px"}}></img></button> </Link></div>
             <Row >
                  {
                      Affiche.map(affiche => {
                          return <Col md={6} lg={4} sm={12} key={affiche.id} >
                              <DocumentCard  affiche={affiche} />
                          </Col>
                      })
                  }                 
             </Row>
         </Container>
      </div>
  )

}
export default DocumentStudent;
