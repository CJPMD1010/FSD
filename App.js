// App.js
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Nav from "./components/Nav.jsx";
import Home from "./components/Home.jsx";
import Product from "./components/Product.jsx";
import Help from "./components/Help.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  return (
    <Router>
      <div>
        <Nav />
        <Switch>
          <Route path="/" exact component={Home} />
          <Route path="/product" component={Product} />
          <Route path="/help" component={Help} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
