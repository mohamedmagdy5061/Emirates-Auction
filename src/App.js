import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactUs from "./Routes/ContactUs";
import Home from "./Routes/Home";
import About from "./Routes/About";
import FAQs from "./Routes/FAQs";



class App extends Component {
  
  render() {

    return (
      <BrowserRouter>
          <div>
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/about"  exact component={About} />
              <Route path="/faqs"  exact component={FAQs} />
              <Route path="/contact-us"  exact component={ContactUs} />
            </Switch>
          </div>
        </BrowserRouter>
    );
  }
}

export default App;
