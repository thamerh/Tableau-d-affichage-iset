import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container,Button, Row, Col} from 'react-bootstrap'
import AfficheCard from '../../components/AffichChefCard';
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
        getNomDepByNameChef(name) ;
      }, [name]);
    useEffect(() => {
        getAfficheData(nom_dep);
   
    },[nom_dep])
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





const getNomDepByNameChef = async (name) => {

      
                await axios.get(`http://localhost:5000/getNomDep/${name}`).then((response)=>{
                   
                    setNomDep(response.data.dep)
                 
                })
  
               
            }
const getAfficheData = async (nom_dep) => {
                const { data } = await axios.get(`http://localhost:5000/allAffichesChef/${nom_dep}`)                

                window.localStorage.setItem('Aff',JSON.stringify(data));
               setAffiche(JSON.parse(window.localStorage.getItem(('Aff'))))
                
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
