import React, { Fragment,useEffect,useContext } from "react";
import { BrowserRouter, Route } from "react-router-dom";
import { AuthContext } from '../../context/AuthContext';
import DashboardChef from "../../components/Chef-Department/Dashboard";
import Navbar from "../../components/Chef-Department/NavBar";
import ShowAffiches from './ShowAffiches'
import AddEmploii from './AddEmploi'
import EditEmploi from './EditEmploi'
import  EmploiDetail from './EmploiDetail'
import AddAffiche from './AddAffiche'
import EditAffiche from './EditAffiche'
import AfficheDetail from './AfficheDetail'
import ShowEmploi from './ShowEmplois'
import ContactChef from './Contact'

const Routeschef = () => {
  const {ChefIsLogin} = useContext(AuthContext);
  useEffect(() => {
    ChefIsLogin();
}, []);
  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/dashboardChef" render={() => <DashboardChef/> } />
        <Route path="/addAffiche"><Navbar/><AddAffiche/></Route>
        <Route path="/Affiches"><Navbar/><ShowAffiches/></Route>
        <Route path="/Emplois"><Navbar/><ShowEmploi/></Route>
        <Route path="/AddEmploi"><Navbar/><AddEmploii/></Route>
        <Route exact path='/Emploi/edit/:id'><Navbar/><EditEmploi/></Route>
        <Route exact path='/Emploi/:id'><Navbar/><EmploiDetail/></Route>
        <Route exact path='/AfficheChef/edit/:id'><Navbar/><EditAffiche/></Route>
        <Route exact path='/AfficheChef/:id'><Navbar/><AfficheDetail/></Route>
        <Route path="/contactChef"><Navbar/><ContactChef/></Route>

      </BrowserRouter>
    </Fragment>
  );
};

export default Routeschef ;