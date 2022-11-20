/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useContext} from 'react'
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import "./Dashboard.css";
import ShowAffiche from '../../screens/Admin/ShowAffiches';
import {AuthContext} from '../../context/AuthContext';


export const  DashboardAdmin= () => {
    const {AdminIsLogin} = useContext(AuthContext);
    useEffect(() => {
      AdminIsLogin();
    }, []);

   
  return ( 
    <div className="dashboard d-flex">
    	<div>
      	<Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}} className="overflow-auto">
        <ShowAffiche/>
        </div>
      </div>
    </div>
  );
}
export default DashboardAdmin
