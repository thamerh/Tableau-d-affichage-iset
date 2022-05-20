import React from "react";
import { CDBNavbar, CDBInput } from "cdbreact";
import { Header } from "./Navbar.Style";

const Navbar = () => {

	return (
        <Header >
      
          <CDBNavbar dark expand="md" scrolling className="justify-content-start" style={{background:"#333" , color:"#fff"}}>
            <div className="ml-auto">
              <i className="fas fa-bell"></i>
              <i className="fas fa-comment-alt mx-4"></i>
              <img alt="panelImage" src="https://png.pngtree.com/png-clipart/20190520/original/pngtree-user-vector-icon-png-image_3788518.jpg" style={{width:"3rem",height:"3rem", borderRadius:'50%'}}/>
            </div>
          </CDBNavbar>
          </Header>
	);
}

export default Navbar;
