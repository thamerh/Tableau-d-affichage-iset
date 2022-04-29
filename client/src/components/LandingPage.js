import React from 'react'
import { Link } from 'react-router-dom'

import '../App.css'
//import BackgroundImage from '../assets/images/bg.png'

export  function LandingPage() {
    return (
      <div style={ HeaderStyle }>
        <header >
            <h2 className="main-title text-center">The university bulletin board is everywhere</h2>
            <p className="main-para text-center">join us now and don't waste time</p>
        <div class="navbar-item has-dropdown is-hoverable " id="style-dropdown1">
        <a class="navbar-link "  id='drop-don-style1'>
        Log in
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item " href='http://localhost:3000/loginAdmin' >
            Admin
          </a>
          <a class="navbar-item " href='http://localhost:3000/loginChef'>
            chef 
          </a>
          <a class="navbar-item " href='http://localhost:3000/loginEtu'>
            Etudiant
          </a>
        </div>
        
  </div>
  <div class="navbar-item has-dropdown is-hoverable" id="style-dropdown2">
        <a class="navbar-link " id='drop-don-style2'>
        Sign Up
        </a>
        <div class="navbar-dropdown ">
          <a class="navbar-item " href='http://localhost:3000/registerAdmin'>
            Admin
          </a>
          <a class="navbar-item " href='http://localhost:3000/registerChef'>
            chef 
          </a>
          <a class="navbar-item "  href='http://localhost:3000/registerEtu'>
            Etudiant
          </a>
        </div>
     </div>   
    
    </header>
    <Footer />
    </div>
    )
}
const HeaderStyle = {
    width: "100%",
    height: "100vh",
    background: `url("https://images.pexels.com/photos/633409/pexels-photo-633409.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1")`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover"
}
export const Footer = () => {
  return (
      <p className="text-center" style={ FooterStyle }>Designed & coded by <span className="has-text-info">Thamer Hamdi</span></p>
  )
}

const FooterStyle = {
  background: "#fff",
  fontSize: ".9rem",
  color:"#222" ,
  position: "absolute",
  bottom: 0,
  padding: "1rem",
  margin: 0,
  width: "100%",
  opacity: ".6"
}