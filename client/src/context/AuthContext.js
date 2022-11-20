import React, { createContext, useState} from 'react';
import axios from 'axios';
export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [tokenAdmin, setTokenAdmin] = useState("");
  const [tokenStudent, setTokenStudent] = useState("");
  const [tokenChef, setTokenChef] = useState("");
  const [adminName, setAdminName] = useState('');
  const [chefName, setChefName] = useState('');
  const [StudentName, setStudentName] = useState('');
  

  const AdminIsLogin=async ()=>{
    try {
        const response = await axios.get('http://localhost:5000/tokenAdmin');
        setTokenAdmin(response.data.accessToken);
        setAdminName(response.data.name);
       
    } catch (error) {
     console.log("GetAdminToken Error:" + error)
     window.location = "/loginAdmin";

    }
    
  }
  const StudentIsLogin=async ()=>{
    try {
        const response = await axios.get('http://localhost:5000/tokenEtu');
        setTokenStudent(response.data.accessToken);
        setStudentName(response.data.name);

       
    } catch (error) {
     console.log("GetStudentToken Error:" + error)
     window.location = "/loginEtu";
    }
    
  }
  const ChefIsLogin=async ()=>{
    try {
        const response = await axios.get('http://localhost:5000/tokenChef');
        setTokenChef(response.data.accessToken);
        setChefName(response.data.name);
    } catch (error) {
     console.log("GetChefToken Error:" + error)
     window.location = "/loginChef";
     
    }
    
  }

  return (
    <AuthContext.Provider
    value={{
        StudentIsLogin,
        AdminIsLogin,
        ChefIsLogin,
        adminName,
        StudentName,
        chefName,
        tokenAdmin,
        tokenStudent,
        tokenChef

    }}>
    {children}
  </AuthContext.Provider>
  );
};