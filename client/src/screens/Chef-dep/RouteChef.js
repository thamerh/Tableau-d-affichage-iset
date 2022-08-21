import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import DashboardChef from "../../components/Chef-Department/Dashboard";
import ShowAffiches from './ShowAffiches'
import AddEmploii from './AddEmploi'
import EditEmploi from './EditEmploi'
import  EmploiDetail from './EmploiDetail'
import AddAffiche from './AddAffiche'
import EditAffiche from './EditAffiche'
import AfficheDetail from './AfficheDetail'
import ShowEmploi from './ShowEmplois'

const Routeschef = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/dashboardChef" render={() => <DashboardChef/> } />
        <Route path="/addAffiche" component={AddAffiche} />
        <Route path="/Affiches" component={ShowAffiches} />
        <Route path="/Emplois" component={ShowEmploi} />
        <Route path="/AddEmploi" component={AddEmploii} />
        <Route exact path='/Emploi/edit/:id'> <EditEmploi/></Route>
        <Route exact path='/Emploi/:id'><EmploiDetail/></Route>
        <Route exact path='/AfficheChef/edit/:id'> <EditAffiche/></Route>
        <Route exact path='/AfficheChef/:id'><AfficheDetail/></Route>
      </BrowserRouter>
    </Fragment>
  );
};

export default Routeschef ;
