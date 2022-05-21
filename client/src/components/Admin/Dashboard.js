/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';
import {
  CDBBtn,
  CDBProgress,
  CDBTable,
  CDBTableHeader,
  CDBTableBody,
  CDBContainer,
  CDBLink } from "cdbreact";
import { Pie, Bar } from "react-chartjs-2";
import Sidebar from "./SideBar";
import Navbar from "./NavBar";
import "./Dashboard.css";
import ShowAffiche from '../../screens/ShowAffiches'

export const  DashboardAdmin= () => {
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


  const data = {
    chart1:{
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: [
            "#F2C94C",
            "#2F80ED",
            "#9B51E0",
          ],
          borderWidth: 0,
          data: [9, 22, 7],
        },
      ]
    },
    chart2:{
      labels: [
        "Eating",
        "Drinking",
        "Sleeping",
        "Designing",
        "Coding",
        "Cycling",
        "Running",
      ],
      datasets: [
        {
          label: "My First dataset",
          backgroundColor: "rgba(255, 153, 51, 0.8)",
          borderColor: "rgb(102, 51, 0)",
          data: [65, 59, 75, 81, 56, 55, 40],
        },
        {
          label: "My Second dataset",
          backgroundColor: "#2F80ED",
          borderColor: "rgb(0, 41, 102)",
          data: [38, 48, 60, 79, 96, 47, 80],
        },
      ]
    }
  }
  const options = {
    responsive: true,
    maintainAspectRatio: false,
    legend: {display:false}, 
    scales: {
      xAxes: [{
        ticks: {
          display: false
        }, 
      }],
      yAxes: [{
        gridLines: {
          display:false
        },
        ticks: {
          display: false
        }
      }]
    }
  }

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
