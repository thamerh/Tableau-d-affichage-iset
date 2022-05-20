
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
} from "cdbreact";
import { NavLink,useHistory } from 'react-router-dom';
import './Admin.css'

const Sidebar = () => {
    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const history = useHistory();

    useEffect(() => {
        refreshToken();
        // getUsers();
    }, []);

    const refreshToken = async () => {
        try {
            const response = await axios.get('http://localhost:5000/tokenAdmin');
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        } catch (error) {
            if (error.response) {
                history.push("/loginAdmin");
            }
        }
    }

    const axiosJWT = axios.create();

    axiosJWT.interceptors.request.use(async (config) => {
        const currentDate = new Date();
        if (expire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/tokenAdmin');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            setToken(response.data.accessToken);
            const decoded = jwt_decode(response.data.accessToken);
            setName(decoded.name);
            setExpire(decoded.exp);
        }
        return config;
    }, (error) => {
        return Promise.reject(error);
    });

    // const history = useHistory();

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
            <CDBSidebarMenuItem >Welcome  {name}</CDBSidebarMenuItem>
            <NavLink exact to="/Affiches" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="columns">Affich</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/addAffiche" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="table">Add Affich</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddAdmin" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Add Admin</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddStudentCard" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Add Student</CDBSidebarMenuItem>
            </NavLink>
            <NavLink exact to="/AddChef" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="user">Add Department Chef</CDBSidebarMenuItem>
            </NavLink>
            {/* <NavLink exact to="/analytics" activeClassName="activeClicked">
              <CDBSidebarMenuItem icon="chart-line">Analytics</CDBSidebarMenuItem>
            </NavLink> */}

          
              <CDBSidebarMenuItem icon="exclamation-circle">
              <div>
                                <button onClick={Logout} className="LogOutStyleButton">
                                    Log Out
                                </button>
                </div>
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