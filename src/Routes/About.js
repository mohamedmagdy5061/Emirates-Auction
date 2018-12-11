import React, { Component } from "react";
import Navbar from  "../Components/Navbar/Navbar";
import { connect } from 'react-redux';

class About extends Component {
 
  render() {
    console.log("from about",this.props)
    return (
      <div>
        <Navbar/>
        <div className="container" style={{paddingTop: "95px" }}>
        
            {this.props.language === "en" ? <div><p>It is About Page</p></div> : <div  dir="rtl"><p>من نحن</p></div>} 
  
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language : state.language
  };
}

export default connect(mapStateToProps)(About);


// export default About