import React, { Component } from "react";
import Navbar from  "../Components/Navbar/Navbar";
import { connect } from 'react-redux';

class Faqs extends Component {
  componentWillReceiveProps(){
    console.log(this.props)
  }
  render() {

    return (
      <div>
        <Navbar />
        <div className="container" style={{paddingTop: "95px" }}>
            {this.props.language === "en" ? <div>It is FAQ Page</div> : <div  dir="rtl">اسئله شائعه</div>} 
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

export default connect(mapStateToProps)(Faqs);


