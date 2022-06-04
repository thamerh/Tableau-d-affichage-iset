import React from 'react'
import {Card,Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

const EmploiCard = ({ affiche }) => {

 //alert(affiche.image.replace(/\\/g,"/"));
    return (
      
        <>

            <Card className='shadow-lg m-3 p-3 rounded' style={{ width: '25rem' }}>
                <Card.Img src ={` http://localhost:5000/${affiche.image}` } style={{ height: '18rem' }}/>
                <Card.Title>department: {affiche.department}</Card.Title>
                <Card.Title>classe: {affiche.classe}</Card.Title>
                <Card.Body> 
                    <Link to={`Emploi/${affiche.id}`}>
                        <Button variant="primary">Detail</Button>
                    </Link>
                </Card.Body>
            </Card>   
        </>
 
 )
}

export default EmploiCard;
