import React, { Component } from "react";
// import Navbar from "./Components/Navbar/Navbar";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import ContactUs from "./Routes/ContactUs";
import Home from "./Routes/Home";
import About from "./Routes/About";
import FAQs from "./Routes/FAQs";



class App extends Component {
  
//   handelLanguage =()=>{
//     if (localStorage.hasOwnProperty("lagguage")) {
//       console.log("exists")
//   }else{
//     localStorage.setItem('language', "Ar");
//     console.log("add language to local storage")
//   }
// }


  render() {
    console.log(this.props)
    return (
      // <div className="App">
      <BrowserRouter>
          <div>
            {/* <Navbar clicked={this.handelLanguage} /> */}
            <Switch>
              {/* <div className="container" style={{paddingTop: "95px" }}> */}
              <Route  path="/" exact component={Home} />
              <Route path="/about" exact component={About} />
              <Route path="/faqs" exact component={FAQs} />
              <Route path="/contact-us" exact component={ContactUs} />
              {/* </div> */}
            </Switch>
          </div>
        </BrowserRouter>
        
      // </div>
    );
  }
}

export default App;
