import React, {useEffect,useContext} from 'react'
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import '../Admin/Dashboard.css'
import ShowEmploi  from '../../screens/Chef-dep/ShowEmplois'
import ShowAffiche from '../../screens/Chef-dep/ShowAffiches'
import './Chef-style.css'
import {AuthContext} from '../../context/AuthContext';
export const  DashboardChef= () => {
    const {ChefIsLogin} = useContext(AuthContext);


    useEffect(() => {
      ChefIsLogin();
    }, []);
  return ( 
    <div className="dashboard d-flex">
    	<div>
      	<Sidebar/>
      </div>
      <div style={{flex:"1 1 auto", display:"flex", flexFlow:"column", height:"100vh", overflowY:"hidden"}}>
        <Navbar/>
        <div style={{height:"100%"}} className="overflow-auto">
          
          <h1 className='TitreStyle'>Emploi</h1>
          <ShowEmploi/>
          <h1 className='TitreStyle'>Affiche</h1>
          <ShowAffiche/>
        </div>
        
        </div>
    </div>
  );
}
export default DashboardChef
