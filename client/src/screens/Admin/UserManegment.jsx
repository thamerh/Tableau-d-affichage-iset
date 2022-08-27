import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import ChefSearchBar from "./ChefSearchBar";
import StudentSearchBar from "./StudentSearchBar"

const UserList = () => {
  const [chefusers, setChef] = useState([]);
  const [studentusers, setStudent] = useState([]);

  useEffect(() => {
    getChefUsers();
    getStudentUsers();
  }, []);

   const getChefUsers = async () => {
    const response = await axios.get("http://localhost:5000/ChefUsers");
    console.log(response.data)
    setChef(response.data);

  };

  const getStudentUsers = async () => {
    const response = await axios.get("http://localhost:5000/StudentUsers");
    console.log(response.data)
    setStudent(response.data);

  };
 
  const deleteStudentUser = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/StudentUsers/${id}`);
      getStudentUsers();
    } catch (error) {
      console.log(error);
    }
  };

  return (    
      
      <div className=" mt-5 is-centered w-100" >
      <div className="column w-100"  style={{overflowX:"scroll"}}>
        <h1 style={{textAlign:"center",  fontSize: "25px",padding: "10px",color: "rgb(22, 134, 240)",fontFamily: 'Pacifico'}}> Chef Department </h1>
        <span  style={{textAlign:"center"}}><ChefSearchBar/></span>
       
        <h1 style={{textAlign:"center",  fontSize: "25px",padding: "10px",color: "rgb(22, 134, 240)",fontFamily: 'Pacifico'}}> Student</h1>
       <span style={{textAlign:"center"}}><StudentSearchBar/></span>
      </div>
    </div>
    
  );
};

export default UserList;
