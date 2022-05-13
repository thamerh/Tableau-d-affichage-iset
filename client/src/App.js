import { BrowserRouter, Route, Switch } from "react-router-dom";
import {LandingPage} from "./components/LandingPage.js";
import {LoginEtu }from "./components/Etudiants/Login";
import NavbarEtu from "./components/Etudiants/Navbar";
import DashboardEtu from "./components/Etudiants/Dashboard";
import RegisterEtu from "./components/Etudiants/Register";

import {LoginChef }from "./components/Chef-Department/Login";
import NavbarChef from "./components/Chef-Department/NavBar";
import DashboardChef from "./components/Chef-Department/Dashboard";
import RegisterChef from "./components/Chef-Department/Register";

import {LoginAdmin }from "./components/Admin/Login";
import NavbarAdmin from "./components/Admin/NavBar";
import DashboardAdmin from "./components/Admin/Dashboard";
import RegisterAdmin from "./components/Admin/Register";
import './App.css';
import AddAffiche from './screens/AddAffiche'
import EditAffiche from './screens/EditAffiche'
import {AfficheDetail} from './screens/AfficheDetail'
import ShowAffiches from './screens/ShowAffiches'

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
        <Route path="/dashboardEtu">
        <NavbarEtu/>
        <DashboardEtu/>
        
        </Route>

        <Route  path="/loginChef">
        <LoginChef/>
        </Route>
        <Route path="/registerChef">
        <RegisterChef/>
        </Route>
        <Route path="/dashboardChef">
        <NavbarChef/>
        <DashboardChef/>
        </Route>

        <Route  path="/loginAdmin">
        <LoginAdmin/>
        </Route>
        <Route path="/registerAdmin">
        <RegisterAdmin/>
        </Route>
        <Route path="/dashboardAdmin">   
        <NavbarAdmin/>
        <DashboardAdmin/>
        </Route>
        <Route exact path='/addAffiche' >
          <AddAffiche/>
       </Route>
        <Route exact path='/Affiches' >
        <ShowAffiches/>
       </Route>
       <Route exact path='/Affiche/edit/:id'> <EditAffiche/></Route>
       <Route exact path='/Affiche/:id'><AfficheDetail/></Route>
      </Switch>

    </BrowserRouter>
    
  );
}

export default App;
