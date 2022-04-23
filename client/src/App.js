import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Login from "./components/Login";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import LoginEtu from "./components/Etudiants/Login";
import NavbarEtu from "./components/Etudiants/Navbar";
import DashboardEtu from "./components/Etudiants/Dashboard";
import RegisterEtu from "./components/Etudiants/Register";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
        <Dashboard/>
        </Route>
        <Route exact path="/login">
        <LoginEtu/>
        </Route>
        <Route path="/register">
        <RegisterEtu/>
        </Route>
        <Route path="/dashboard">
        <NavbarEtu/>
        <DashboardEtu/>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
