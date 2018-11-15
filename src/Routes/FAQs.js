import React, { Component } from "react";
import Navbar from  "../Components/Navbar/Navbar";

class Faqs extends Component {
  render() {
    
    return (
      <div>
        <Navbar clicked={this.handelLanguage} />
        <div className="container" style={{paddingTop: "95px" }}>
        <h1>It is FAQ Page</h1>
        </div>
      </div>
    );
  }
}

export default Faqs;
