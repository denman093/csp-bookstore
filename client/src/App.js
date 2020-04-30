import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import CreateAccount from "./components/Account";

function App() {
  return (
      <React.Fragment>
        <NavbarComponent />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/createAccount" component={CreateAccount}/>
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
