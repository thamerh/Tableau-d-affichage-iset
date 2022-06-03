import React from 'react'
import {Card,Button} from "react-bootstrap"
import { Link } from 'react-router-dom'

const AfficheCard = ({ affiche }) => {

 //alert(affiche.image.replace(/\\/g,"/"));
    return (
      
        <>

            <Card className='shadow-lg m-3 p-3 rounded' style={{ width: '25rem' }}>
                <Card.Img src ={` http://localhost:5000/${affiche.image}` } style={{ height: '18rem' }}/>
                <Card.Body>
                    <Card.Title>Title: {affiche.title}</Card.Title>
                    <Card.Text>
                        Description: {affiche.description.slice(0,10)}...
                    </Card.Text>
                 
                    <Link to={`AfficheChef/${affiche.id}`}>
                        <Button variant="primary">Detail</Button>
                    </Link>
                </Card.Body>
            </Card>   
        </>
 
 )
}

export default AfficheCard
