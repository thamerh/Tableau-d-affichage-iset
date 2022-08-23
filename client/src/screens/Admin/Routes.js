import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import DashboardAdmin from "../../components/Admin/Dashboard";
import Navbar from "../../components/Admin/NavBar";
import {AddAnotherAdmin} from './AddCodeAdmin'
import {AddChef} from './AddCodeChef'
import {AddEtuCard} from './AddCodeEtu'
import AddAffiche from './AddAffiche'
import EditAffiche from './EditAffiche'
import {AfficheDetail} from './AfficheDetail'
import AddDocumentAdmin from './AddDocument'
import DocumentAdmin from './DocumentAdmin'
import ShowAffiche  from "./ShowAffiches";
import UserList from "./UserManegment"
import EditUser from "./EditChefUser"
import EditStudentUser from "./EditStudentUser"

const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/dashboardAdmin" render={() => <DashboardAdmin/> } />
        <Route path="/AddDocumentAdmin"><Navbar/><AddDocumentAdmin/></Route>
        <Route path="/addAffiche"><Navbar/><AddAffiche/></Route>
        <Route path="/Affiches" component={ShowAffiche} />
        <Route path="/AddAdmin"><Navbar/><AddAnotherAdmin/></Route>
        <Route path="/AddChef"><Navbar/><AddChef/></Route>
        <Route path="/AddStudentCard"><Navbar/><AddEtuCard/></Route>
        <Route path="/editChef/:id"><Navbar/><EditUser/></Route>
        <Route path="/editStudent/:id"><Navbar/><EditStudentUser/></Route>
        <Route path="/ManegmentUser"><Navbar/><UserList/></Route>
        <Route exact path='/DocumentAdmin'><Navbar/><DocumentAdmin/></Route>
        <Route exact path='/Affiche/edit/:id'> <Navbar/><EditAffiche/></Route>
        <Route exact path='/Affiche/:id'><Navbar/><AfficheDetail/></Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
