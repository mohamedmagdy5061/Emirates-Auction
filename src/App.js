import React, { Component } from "react";
import "./App.css";
import { BrowserRouter, Route, Switch  } from "react-router-dom";
import ContactUs from "./Routes/ContactUs";
import Home from "./Routes/Home";
import About from "./Routes/About";
import FAQs from "./Routes/FAQs";
import { connect } from 'react-redux';

class App extends Component {
  
  render() {
    console.log(this.props)
    

    return (

      <BrowserRouter> 
      <>
          <Switch>
              <Route path={`/`} exact component={Home} />
              <Route path={`/home/:lang`}  component={Home} />
              <Route path={`/about/:lang`}   component={About}  />
              <Route path={`/faqs/:lang`}   component={FAQs} />
              <Route path={`/contact-us/:lang`} render={()=>(<ContactUs language={this.props.lang}/>)}  />
          </Switch>
          </>
        </BrowserRouter>
    );
  }
}
function mapStateToProps(state) {
  return {
    lang : state.language
  };
}

export default connect(mapStateToProps)(App)

