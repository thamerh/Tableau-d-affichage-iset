import React from 'react'
import {Card,Button} from "react-bootstrap"
import axios from 'axios';
import FileDownload from 'js-file-download';
import { useHistory } from 'react-router'

const DocumentCard= ({ affiche }) => {
    const history = useHistory()
    const file= (affiche.image).slice(7);
    console.log(file);
    const id =affiche.id;

    const download = async (e) => {
        e.preventDefault(); 
     
        getDocumentDownload(file);
      };
      const Delete = async (e) => {
        e.preventDefault(); 
     
        handleDelete(id);
      };
      const getDocumentDownload=async (file)=>{
        axios({
            url:`http://localhost:5000/DownolodsFile/${file}`,
            method:"GET",
            responseType:"blob"
            }).then((response)=>{
                 console.log((response))
                FileDownload(response.data,'DocumentStudent.png')
              }); 
      }
      const handleDelete = async (id) => {
        await axios.delete(`http://localhost:5000/deleteDocumentStudent/${id}`)
        history.push('/dashboardEtu')
    }
    return (
      
        <>

            <Card className='shadow-lg m-3 p-3 rounded' style={{ width: '25rem' }}>
                <Card.Img src ={` http://localhost:5000/${affiche.image}` } style={{ height: '18rem' }}/>
                <Card.Body>
                    <Card.Title>Title: {affiche.title}</Card.Title>
                    <Button variant="primary" onClick={(e)=>download(e)}>Telecharger</Button>
                   {/* <Link to={`DocumentStudent/${img}`}>
                        <Button variant="primary" onClick={(e,file)=>download(e,file)}>Telecharger</Button>
                    </Link> */}
                    <Button className="btn btn-danger m-2" onClick={(e) => Delete(e)}>Delete</Button> 
                </Card.Body>
            </Card>   
        </>
 
 )
}

export default DocumentCard;