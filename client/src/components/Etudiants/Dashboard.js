import React, {useEffect,useContext } from 'react';
import Sidebar from "./SideBar";
import Navbar from "./Navbar";
import '../Admin/Dashboard.css'
import ShowEmploiStudent  from '../../screens/Student/ShowEmplois'
import ShowAffiche from '../../screens/Student/ShowAffiche'
import './Student.css'
import {AuthContext} from '../../context/AuthContext';

export const  DashboardEtu= () => {


    const {StudentIsLogin} = useContext(AuthContext);

    useEffect(() => {
      StudentIsLogin();
    }, []);

  return ( 
    <div className="dashboard d-flex">
    	<div>
      	<Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}} className="overflow-auto">
          <h1 className='TitreStyle' >Emploi</h1>
          <ShowEmploiStudent/>
          <h1 className='TitreStyle'>Affiche</h1>
          <ShowAffiche/>
        </div>
        
        </div>
    </div>
  );
}
export default DashboardEtu;
