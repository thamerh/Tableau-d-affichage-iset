import axios from 'axios'
import React, { useState,useEffect,useLayoutEffect } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const AddEmploii = () => {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [nom_dep, setNomDep] = useState('');
    

    const history = useHistory();


  
    useEffect(() => {
        refreshToken();
       
      }, []);
      useEffect(() => {

        getNomDepByNameChef(name) ;
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





const getNomDepByNameChef = async (name) => {

      
                await axios.get(`http://localhost:5000/getNomDep/${name}`).then((response)=>{
                   
                    setNomDep(response.data.dep )
                 
                })
  
               
            }
          
    const [classe, setClasse] = useState('')
    const [image, setImage] = useState('')

 
    const add = async (e) => {
        e.preventDefault();
     

        try {
         

            const formData = new FormData();
         
            formData.append('image', image)
            formData.append('department', nom_dep)
            formData.append('classe', classe)
            await axios.post('http://localhost:5000/addEmploi', formData)
            history.push('/dashboardChef');
        } catch (error) {
            if (error.response) {
                console.log(error.response.data.msg);
            }
        }
    };

    return ( 
        <div style={HeaderStyle} className='row'>
            <Container className=' p-2 mt-5'  > 
            <div className='border-bottom border-white'>
                <h1  className="text-center text-white FontFamily">Add Emploi</h1>
                <a href='dashboardAdmin'><img src='https://static.thenounproject.com/png/2739572-200.png' alt='tttt' className='ImgIconAdmin'/></a>
             </div>
                <Form  onSubmit={add} method="POST" encType='multipart/form-data' className='w-100 p-3 col-md-6'>

                <Form.Group controlId="fileName"  className="mb-3 ">
                    <Form.Label className=" ">Upload Image</Form.Label>
                    <Form.Control
                        type="file"
                        name='image'
                        onChange={(e) => setImage(e.target.files[0])}
                        size="lg" />
                </Form.Group>

                    <Form.Group className="mb-3" controlId="classe">
                        <Form.Label className=" ">department</Form.Label>
                        <Form.Control
                            value={nom_dep}
                            type="text"
                            />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="classe">
                        <Form.Label className=" ">Classe</Form.Label>
                        <Form.Control
                            value={classe}
                            onChange={(e) => setClasse(e.target.value)}
                            type="text"
                            />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                    Add Emploi
                    </Button>

                    
                </Form>
            </Container>
        </div>
    )
}
export default AddEmploii;
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}