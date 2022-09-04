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
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');

  const axiosJWT = axios.create();
   
  axiosJWT.interceptors.request.use(async (config) => {
      const currentDate = new Date();
      if (expire * 1000 < currentDate.getTime()) {
          const response = await axios.get('http://localhost:5000/tokenAdmin');
          config.headers.Authorization = `Bearer ${response.data.accessToken}`;
          setToken(response.data.accessToken);
          const decoded = jwt_decode(response.data.accessToken);
          setExpire(decoded.exp);
      }
      return config;
  }, (error) => {
      return Promise.reject(error);
  });
    useEffect(() => {
        const getAfficheData= async (token) => {
            const { data } = await axiosJWT.get('http://localhost:5000/allAffiches',{
                headers: {
                    Authorization: `Bearer ${token}`
                }
            });
            setAffiche(data)
        }
    
        getAfficheData()
    },[token])


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
