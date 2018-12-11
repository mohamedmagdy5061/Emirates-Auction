import React, { Component } from "react";
import Navbar from  "../Components/Navbar/Navbar";
import { connect } from 'react-redux';

class ContactUs extends Component {
  render() {
    console.log("from ContactUs",this.props)
    
    return (

      <div>
        <Navbar />
        <div className="container" style={{paddingTop: "95px" }}>
          {this.props.language === "en" ? <div>It is Contact Us Page</div> : <div  dir="rtl">عربي</div>} 
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

export default connect(mapStateToProps)(ContactUs);

// export default ContactUs