import "./App.css";
import Header from "../src/component/layout/Header/Header"
import React from "react";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import WebFont from "webfontloader";
import Footer from "./component/layout/Footer/Footer.js";
import Home from "../src/component/Home/Home";
import ProductDetails from "./component/Product/ProductDetails";
import AllProducts from "./component/Product/AllProducts.js";

function App() {
  React.useEffect(() => {
    WebFont.load({
      google: {
        families: ["Roboto", "Droid Sans", "chilanka"],
      },
    });
  }, []);

  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component = {Home}/>
        <Route exact path="/product/:id" component = {ProductDetails}/>
        <Route exact path="/products" component = {AllProducts}/>
        
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
