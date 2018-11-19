import React from "react";
import { NavLink } from "react-router-dom";
import EALogo from "../../Assets/car-logo.png";
import "./Navbar.css";

const Navbar = props => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg-light" style={props.lang==="en"? null:{flexDirection:"row-reverse"}}>
      <a className="navbar-brand" href="/"><img src={EALogo} width="100" style={{ color: "black" }} alt="logo" /></a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent" style={props.lang==="en"? null:{flexDirection:"row-reverse"}}>
        <ul className={props.lang==="en"? "navbar-nav mr-auto":"navbar-nav ml-auto"} style={props.lang==="en"? null:{flexDirection:"row-reverse"}}>
          <li className="nav-item">
              <NavLink className="nav-link" to="/" activeClassName={"active"}>
                {props.lang !== "en" ? "الرئيسي" : "Home"}
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/about" activeClassName={"active"}>
                {props.lang !== "en" ? "عنا" : "About"}
                
              </NavLink>
          </li>
          <li className="nav-item">
              <NavLink className="nav-link" to="/faqs" activeClassName={"active"}>
                {props.lang !== "en" ? "FAQs" : "FAQs"}
                
              </NavLink>
          </li>
          <li className="nav-item">
            <NavLink className="nav-link" to="/contact-us" activeClassName={"active"}>
                {props.lang !== "en" ? "للتواصل" : " Contact Us"}
             
            </NavLink>
          </li>
          
        </ul>
        <div className="form-inline my-2 my-lg-0">
        <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={props.clicked}
          >
            {props.lang === "en" ? "العربيه" : "English"}
          </button>
          <button
            style={{ border: "none", background: "none", cursor: "pointer" }}
            onClick={props.clickRefresh}
          >
            <i className="fas fa-sync-alt" />
          </button>
        </div>
      </div>
    </nav>
</div>
  );
};

export default Navbar;
