
import './App.css';
import Sidebar from './components/Admin/SideBar';
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
import RegisterAdmin from "./components/Admin/Register";
import AddAffiche from './screens/Chef-dep/AddAffiche'
import ShowAffiche from './screens/Chef-dep/ShowAffiches'
import Routes from './screens/Routes';
import EditAffiche from './screens/Chef-dep/EditAffiche';
import {AfficheDetail } from './screens/Chef-dep/AfficheDetail';
import AddEmploi from './screens/Chef-dep/AddEmploi';
import ShowEmploi from './screens/Chef-dep/ShowEmplois'
import {EmploiDetail} from './screens/Chef-dep/EmploiDetail'
import EditEmploi from './screens/Chef-dep/EditEmploi'

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
      <Routes/>
      </Route>
      <Route exact path='/addAffichechef' >
      <AddAffiche/>
     </Route>
     <Route exact path='/Afficheschef' >
      <ShowAffiche/>
     </Route>
     <Route exact path='/AfficheChef/edit/:id'> <EditAffiche/></Route>
     <Route exact path='/AfficheChef/:id'><AfficheDetail/></Route> 
     
     {/* <Route exact path='/Affiche/edit/:id'> <EditAffiche/></Route>
     <Route exact path='/Affiche/:id'><AfficheDetail/></Route> */}
     <Route exact path='/addEmploi' >
      <AddEmploi/>
     </Route>

     <Route exact path='/Emploichef' >
      <ShowEmploi/>
     </Route>

     <Route exact path='/Emploi/:id'><EmploiDetail/></Route> 
     <Route exact path='/Emploi/edit/:id'> <EditEmploi /></Route>
     <Route exact path='/Emploi/:id'>< EmploiDetail/></Route>
    </Switch>

  </BrowserRouter>

   
  );
}

export default App;