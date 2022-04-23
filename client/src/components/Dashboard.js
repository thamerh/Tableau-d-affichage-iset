/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react'
import axios from 'axios';
import jwt_decode from "jwt-decode";
import { useHistory } from 'react-router-dom';

const Dashboard = () => {
    const history = useHistory();

    return (
        <div className="container mt-5">
            <h1 className="columns is-centered" >tableaux d'affichage de l'ISET de Djerba et en ligne </h1>   
        </div>
        

    )
}

export default Dashboard
