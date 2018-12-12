import React,{Component} from "react";
import { NavLink } from "react-router-dom";
import EALogo from "../../Assets/car-logo.png";
import userImage from "../../Assets/mySon.jpeg";
import "./Navbar.css";
import { connect } from 'react-redux';


class Navbar extends Component {

  componentWillReceiveProps(){
    console.log(this.props)
      
}
  render() {
    console.log(this.props)
   
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={this.props.lang==="en"? null:{flexDirection:"row-reverse"}}>
      <a className="navbar-brand" href="/"><img src={EALogo} width="100" style={{ color: "black" }} alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={this.props.lang==="en"? null:{flexDirection:"row-reverse"}}>
        <ul className={this.props.lang==="en"? "navbar-nav mr-auto":"navbar-nav ml-auto"} style={this.props.lang==="en"? null:{flexDirection:"row-reverse"}}>
          <li className="nav-item">
              <NavLink className="nav-link"  activeStyle={{color:"#22229c"}}  
                to={`/home/${this.props.lang}`}
                activeClassName={"active"}>
                {this.props.lang === "en" ? "Home":"الرئيسيه"}
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" 
                to={`/about/${this.props.lang}`} 
                activeStyle={{color:"#22229c"}} activeClassName={"active"}>
                {this.props.lang === "en" ? "About":"من نحن" }  
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link"  
                to={`/faqs/${this.props.lang}`} 
                activeStyle={{color:"#22229c"}} 
                activeClassName={"active"}>
                {this.props.lang === "en" ? "FAQs" : "اسئله شائعه"} 
                {console.log("from nav li",this.props.lang)} 
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link"   
              to={`/contact-us/${this.props.lang}`}
              activeStyle={{color:"#22229c"}} 
              activeClassName={"active"}>
              {this.props.lang === "en" ?  " Contact-Us" : "اتصل بنا" }
            </NavLink>
          </li>
          
        </ul>
        <div className="form-inline my-2 my-lg-0" style={this.props.lang==="en"? null:{flexDirection:"row-reverse"}} >
        <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={()=>this.props.changeLang(this.props.lang)}
          >
            {this.props.lang === "en" ? "العربيه" : "English"}
          </button>
          <button
            style={{ border: "none", background: "none", cursor: "pointer",color:"#2765b1" }}
            onClick={this.props.clickRefresh}
          >
            <i className="fas fa-sync-alt" />
          </button>
        </div>
          <div style={{borderLeft:" 1px solid #d4d4d4"}}>
          <span style={{padding:"0px 7px",color:"gray"}}>Mohamed Magdy</span>
          <img className="avatar"  src={userImage} alt="userImage"/> 
        </div>
      </div>
    </nav>
</div>
  );
};

}



function mapDispatchToProps(dispatch) {
  return {
    changeLang: (lan) => {
      if(lan==="en"){
        dispatch({type:"ar"})

      }else{
        dispatch({type:"en"})
       
      }
    },
  }
}

function mapStateToProps(state) {
  return {
    lang : state.language
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
