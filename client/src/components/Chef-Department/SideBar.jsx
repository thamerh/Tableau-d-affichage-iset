
import React, { useContext, useEffect } from 'react'
import axios from 'axios';
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink,useHistory } from 'react-router-dom';
import '../Admin/Admin.css';
import {AuthContext} from '../../context/AuthContext';

const Sidebar = () => {
   
    const {ChefIsLogin,chefName} = useContext(AuthContext);
    const history = useHistory();
    useEffect(() => {
      ChefIsLogin();
    }, []);
    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logoutChef');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/dashboardChef" className="text-decoration-none" style={{ color: 'inherit' }}>
          Dashboard Chef 
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem >Welcome  {chefName}</CDBSidebarMenuItem>
            <NavLink exact to="/addAffiche" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-plus-square">Add Affich</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addEmploi" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-plus-square">Add Emploi</CDBSidebarMenuItem>
            </NavLink>    
            <NavLink exact to="/contactChef" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-envelope-open-text">Contact</CDBSidebarMenuItem>
            </NavLink> 
              <CDBSidebarMenuItem onClick={Logout} icon="fas fa-sign-out-alt" activeClassName="activeClicked">
                                {/* <button onClick={Logout} className="LogOutStyleButton"> */}
                                    Log Out
                                {/* </button> */}
              </CDBSidebarMenuItem>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarFooter style={{ textAlign: 'center' }}>
          <div
            style={{
              padding: '20px 5px',
            }}
          >
           Designed & coded by Thamer Hamdi
          </div>
        </CDBSidebarFooter>
      </CDBSidebar>
    </div>
  );
};

export default Sidebar;