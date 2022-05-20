import React, { Fragment } from "react";
import { BrowserRouter, Route } from "react-router-dom";

import DashboardAdmin from "../components/Admin/Dashboard";
import ShowAffiches from './ShowAffiches'
import {AddAnotherAdmin} from './AddCodeAdmin'
import {AddChef} from './AddCodeChef'
import {AddEtuCard} from './AddCodeEtu'
import AddAffiche from './AddAffiche'

const Routes = () => {

  return (
    <Fragment>
      <BrowserRouter>
        <Route exact path="/dashboardAdmin" render={() => <DashboardAdmin/> } />
        <Route path="/addAffiche" component={AddAffiche} />
        <Route path="/Affiches" component={ShowAffiches} />
        <Route path="/AddAdmin" component={AddAnotherAdmin} />
        <Route path="/AddChef" component={AddChef} />
        <Route path="/AddStudentCard" component={AddEtuCard} />
      </BrowserRouter>
    </Fragment>
  );
};

export default Routes;
