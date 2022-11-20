
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
    const history = useHistory();
    const {StudentIsLogin,StudentName} = useContext(AuthContext);

    useEffect(() => {
      StudentIsLogin();
    }, []);

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logoutEtu');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/dashboardEtu" className="text-decoration-none" style={{ color: 'inherit' }}>
          Dashboard Etudiant
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem >Welcome  {StudentName}</CDBSidebarMenuItem>
            <NavLink exact to="/DocumentStudent" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-file-image">Document</CDBSidebarMenuItem>
            </NavLink>    
            <NavLink exact to="/ContactStudent" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-envelope-open-text">Contact</CDBSidebarMenuItem>
            </NavLink> 
              <CDBSidebarMenuItem onClick={Logout} icon="fas fa-sign-out-alt" activeClassName="activeClicked">
                                    Log Out
                               
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