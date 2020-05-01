import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import CreateAccount from "./components/Account";
import TextBooks from "./components/TextBooks";

function App() {
  return (
      <React.Fragment>
        <NavbarComponent />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/createAccount" component={CreateAccount}/>
            <Route path="/textbooks" component={TextBooks}/>
          </Switch>
        </Router>
      </React.Fragment>
  );
}

export default App;
