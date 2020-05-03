import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import './App.css';
import NavbarComponent from "./components/NavbarComponent";
import CreateAccount from "./components/Account";
import TextBooks from "./components/TextBooks";
import FooterComponent from "./components/FooterComponent";
import Checkout from "./components/Checkout";
import About from "./components/About";

function App() {
  return (
      <React.Fragment>
        <NavbarComponent />
        <Router>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/createAccount" component={CreateAccount}/>
            <Route path="/textbooks" component={TextBooks}/>
            <Route path="/checkout" component={Checkout}/>
            <Route path="/about" component={About}/>
          </Switch>
        </Router>
          <FooterComponent />
      </React.Fragment>
  );
}

export default App;
