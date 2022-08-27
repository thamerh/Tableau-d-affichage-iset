import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import {LandingPage} from "./components/LandingPage.js";
import {LoginEtu }from "./components/Etudiants/Login";
import DashboardEtu from "./components/Etudiants/Dashboard";
import RegisterEtu from "./components/Etudiants/Register";
import {LoginChef }from "./components/Chef-Department/Login";
import RegisterChef from "./components/Chef-Department/Register";
import {LoginAdmin }from "./components/Admin/Login";
import RegisterAdmin from "./components/Admin/Register";
<<<<<<< HEAD
import AddAffiche from './screens/Chef-dep/AddAffiche'
import ShowAffiche from './screens/Chef-dep/ShowAffiches'
import Routes from './screens/Routes';
import Routeschef from './screens/Chef-dep/RouteChef'
import EditAffiche from './screens/Chef-dep/EditAffiche';
import {AfficheDetail } from './screens/Chef-dep/AfficheDetail';
import AddEmploi from './screens/Chef-dep/AddEmploi';
import ShowEmploi from './screens/Chef-dep/ShowEmplois'
import {EmploiDetail} from './screens/Chef-dep/EmploiDetail'
import EditEmploi from './screens/Chef-dep/EditEmploi'
import RoutesChef from './screens/Chef-dep/RouteChef'
=======
import Routes from './screens/Admin/Routes';
import RoutesChef from './screens/Chef-dep/RouteChef';
import RouteStudent from './screens/Student/Routes';
>>>>>>> dev1

function App() {
  return (
    
    <BrowserRouter>
    <Switch>
      <Route exact path="/">
      <LandingPage/>
      </Route>
      <Route  path="/loginEtu">
      <LoginEtu/>
      </Route>
      <Route path="/registerEtu">
      <RegisterEtu/>
      </Route>
      <Route  path="/loginChef">
      <LoginChef/>
      </Route>
      <Route path="/registerChef">
      <RegisterChef/>
      </Route>
<<<<<<< HEAD
      {/* <Route path="/dashboardChef">
      <NavbarChef/>
      <DashboardChef/>
      </Route> */}

=======
>>>>>>> dev1
      <Route  path="/loginAdmin">
      <LoginAdmin/>
      </Route>
      <Route path="/registerAdmin">
      <RegisterAdmin/>
      </Route>
      <Route path="/dashboardAdmin">   
      <Routes/>
      </Route>
      <Route path="/dashboardChef">   
      <RoutesChef/>
      </Route>
<<<<<<< HEAD
      {/* <Route exact path='/addAffichechef' >
      <AddAffiche/>
     </Route>
     <Route exact path='/Afficheschef' >
      <ShowAffiche/>
     </Route>
     <Route exact path='/AfficheChef/edit/:id'> <EditAffiche/></Route>
     <Route exact path='/AfficheChef/:id'><AfficheDetail/></Route> 
      */}
     {/* <Route exact path='/Affiche/edit/:id'> <EditAffiche/></Route>
     <Route exact path='/Affiche/:id'><AfficheDetail/></Route> */}
     {/* <Route exact path='/addEmploi' >
      <AddEmploi/>
     </Route>

     <Route exact path='/Emploichef' >
      <ShowEmploi/>
     </Route>

     <Route exact path='/Emploi/:id'><EmploiDetail/></Route> 
     <Route exact path='/Emploi/edit/:id'> <EditEmploi /></Route>
     <Route exact path='/Emploi/:id'>< EmploiDetail/></Route> */}
=======
      <Route path="/dashboardEtu">   
      <RouteStudent/>
      </Route>  
>>>>>>> dev1
    </Switch>
  </BrowserRouter>

   
  );
}

export default App;