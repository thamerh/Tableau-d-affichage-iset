import React, { Fragment,useContext,useEffect } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import DashboardEtu from '../../components/Etudiants/Dashboard';
import Navbar from "../../components/Etudiants/Navbar";
import AddDocumentStudent from "./AddDocument.jsx";
import AfficheDetailStudent from "./AfficheDetail";
import ContactStudent from "./Contact";
import DocumentStudent from "./DocumentStudent";
import  EmploiDetailStudent from "./EmploiDetail";
import {AuthContext} from '../../context/AuthContext';
const RouteStudent = () => {

  const {StudentIsLogin} = useContext(AuthContext);

  useEffect(() => {
    StudentIsLogin();
  }, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/DashboardEtu" render={() => <DashboardEtu/> } />
        <Route exact path="/AddDocumentStudent"><Navbar/><AddDocumentStudent/></Route>
        <Route path="/DocumentStudent"><Navbar/><DocumentStudent/></Route>
        <Route exact path='/EmploiDetailStudent/:id'><Navbar/><EmploiDetailStudent/></Route>
        <Route exact path='/AfficheStudent/:id'><Navbar/><AfficheDetailStudent/></Route>
        <Route path="/contactStudent"><Navbar/><ContactStudent/></Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default RouteStudent ;