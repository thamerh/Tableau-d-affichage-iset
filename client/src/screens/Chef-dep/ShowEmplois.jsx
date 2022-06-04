import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container,Button, Row, Col} from 'react-bootstrap'
import EmploiCard from '../../components/EmploiCard';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import '../secreens.css';

const ShowAffiche = () => {
    const history = useHistory();
    const [Affiche, setAffiche] = useState([])
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [nom_dep,setNomDep] = useState('');

    


    useEffect(() => {
        refreshToken();
      }, []);
      useEffect(() => {
        getAllAffiche(name) ;
      }, [name]);
   
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tokenChef');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            
        } catch (error) {
            if (error.response) {
                history.push("/LoginChef");
            }
        }
       
    }
    
    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/tokenChef');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
           
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });





const getAllAffiche = async (name) => {

      
              const {data}=  await axios.get(`http://localhost:5000/getNomDep/${name}`)
                   
                   // setNomDep(data.dep)
 
                         
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

export default ShowAffiche
