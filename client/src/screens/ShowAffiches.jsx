import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {Container,Button, Row, Col} from 'react-bootstrap'
import AfficheCard from '../components/AfficheCard';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import './secreens.css';

const ShowAffiche = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
        // getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tokenAdmin');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/loginAdmin");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/tokenAdmin');
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
        <div style={HeaderStyle}>
           <Container  className="justify-content-center p-2">
               <div className='   border-bottom border-white'>
               <h1 className='text-center text-white FontFamily'>Show All Affiche</h1>
               <a href='dashboardAdmin'><img src='https://static.thenounproject.com/png/2739572-200.png' alt='tttt' className='ImgIconAdmin'/></a>
               </div>

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
const HeaderStyle = {
    width: "100%",
    minHeight: "757px",
    height: "100%",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}