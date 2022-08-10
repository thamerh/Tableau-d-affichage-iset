import React, { useState, useEffect , useCallback} from 'react'
import axios from 'axios';
import {Container,Button, Row, Col} from 'react-bootstrap'
import AfficheCard from '../../components/AfficheCard';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import '../secreens.css';

const ShowAffiche = () => {
    const history = useHistory();
    const [Affiche, setAffiches] = useState([])
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');


    


    useEffect(() => {
        refreshToken();
      }, []);
      useEffect(() => {
        getAllAffiche(name) ;
      }, [name]);
   
    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tokenEtu');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
            
        } catch (error) {
            if (error.response) {
                history.push("/LoginEtu");
            }
        }
       
    }
    
    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/tokenEtu');
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
