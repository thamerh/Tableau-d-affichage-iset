
import React, {useEffect,useContext } from 'react'
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
import './Admin.css';
import {AuthContext} from '../../context/AuthContext';
const Sidebar = () => {
 
    const history = useHistory();
    const {AdminIsLogin,adminName} = useContext(AuthContext);
    useEffect(() => {
      AdminIsLogin();
    }, []);

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logoutAdmin');
            history.push("/");
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div style={{ display: 'flex', height: '100vh', overflow: 'scroll initial' }}>
      <CDBSidebar textColor="#fff" backgroundColor="#333">
        <CDBSidebarHeader prefix={<i className="fa fa-bars fa-large"></i>}>
          <a href="/dashboardAdmin" className="text-decoration-none" style={{ color: 'inherit' }}>
          Dashboard Admin
          </a>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content">
          <CDBSidebarMenu>
            <CDBSidebarMenuItem >Welcome  {adminName}</CDBSidebarMenuItem>
            <NavLink exact to="/addAffiche" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fa fa-plus-square">Add Affich</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddAdmin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-user-cog">Add Admin</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddStudentCard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-user-cog">Add Student</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddChef" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-user-cog">Add Department Chef</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/DocumentAdmin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-file-image">Document</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/ManegmentUser" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="fas fa-user-edit">Manegment User</CDBSidebarMenuItem>
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