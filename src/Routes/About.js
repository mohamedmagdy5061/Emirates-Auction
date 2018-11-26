import React, { Component } from "react";
import Navbar from  "../Components/Navbar/Navbar";

class About extends Component {
  render() {
    
    return (
      <div>
        <Navbar
        lang="en"
        clicked={this.handelLanguage} />
        <div className="container" style={{paddingTop: "95px" }}>
        <h1>It is About Page</h1>
        </div>
      </div>
    );
  }
}

export default About;
