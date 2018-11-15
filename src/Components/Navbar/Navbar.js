import React from "react";
import { NavLink } from "react-router-dom";
import EALogo from "../../Assets/car-logo.png"


         const Navbar = (props) => {   
        return (
            <div>
        <nav  style={{position: "fixed" ,width:"100%",zIndex:1000,boxShadow: "0 1px 2px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.08)" ,top:"0", backgroundColor:"#FFF",borderBottomColor: "#d4d4d4", marginBottom: "5px"}} className="navbar navbar-expand-lg navbar-light">
          <button
            className="navbar-brand"
            style={{border:"none",background: "none", outline: "none" }}
            type="button">
           <NavLink
            to="/"
            exact
            activeClassName="active"
            className="navbar-brand" >
           <img src={EALogo} width="100" style={{color:"black"}} alt="logo" />
         </NavLink>  
          </button>

          <NavLink
            to="/"
            exact
            activeClassName="active"
            className="navbar-brand"
          >
           Home
         </NavLink>

          <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className="nav-item ">
                <NavLink
                  to="/about"
                    exact
                  activeClassName="active"
                  className="navbar-brand"
                >
                  About
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/faqs"
                  exact 
                  activeClassName="active"
                  className="navbar-brand"
                >
                  FAQs
                </NavLink>
              </li>
              <li className="nav-item ">
                <NavLink
                  to="/contact-us"
                  exact 
                  active ClassName="active"
                  className="navbar-brand"
                >
                  Contact Us
                </NavLink>
              </li>
            </ul>
          </div>
          <button 
          style={{border:"none",background: "none", cursor:"pointer" }}
          onClick={props.clicked}>{(props.lang === "en") ? "العربيه" :"English"}</button>
          <button 
          style={{border:"none",background: "none", cursor:"pointer" }}
          onClick={props.clickRefresh}><i className="fas fa-sync-alt" /></button>
        </nav>
      </div>

    );
  }


export default Navbar;




