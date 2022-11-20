import axios from 'axios'
import React, { useState,useEffect,useContext } from 'react'
import { Container, Form, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContext';
const AddEmploii = () => {
    const {chefName} = useContext(AuthContext);
    const [nom_dep, setNomDep] = useState('');
    const history = useHistory();
    // useEffect(() => {
    //     ChefIsLogin();
       
    //   }, []);
      useEffect(() => {

        getNomDepByNameChef(chefName) ;
      }, [chefName]);
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
        <div className='row'>
            <Container className=' p-2 mt-5'  > 
           
                <h1  className="text-center text-white FontFamily">Add Emploi</h1>
           
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

