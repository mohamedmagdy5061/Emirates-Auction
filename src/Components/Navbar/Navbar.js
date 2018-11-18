import React from "react";
import { Link } from "react-router-dom";
import EALogo from "../../Assets/car-logo.png"
import EALogoo from "../../Assets/logooo.png"


         const Navbar = (props) => {   
        return (
            <div>

        <nav  style={{position: "fixed",marginLeft:"0px",padding:"0" ,width:"100%",zIndex:1000,boxShadow: "0 1px 2px rgba(0,0,0,.3), 0 3px 5px rgba(0,0,0,.08)" ,top:"0", backgroundColor:"#FFF",borderBottomColor: "#d4d4d4", marginBottom: "5px"}} className="navbar navbar-expand-lg navbar-light">
          {props.lang=== "en"? <div style={{padding:"0px 17px 0px 17px",backgroundColor :"red"}}><img style={{width: "50px"}} src={EALogoo} alt="logo" /></div>:null}
          <button
            className ="navbar-brand"
            style={{border:"none",background: "none", outline: "none" ,padding:"0px 10px 0px 10px"}}
            type="button">
           <Link
            to="/"
              
            activeClassName = {"active"}
            className ="navbar-brand" >
           <img src={EALogo} width="100" style={{color:"black"}} alt="logo" />
         </Link>  
          </button>

          <Link
            to="/"
              
            activeClassName ={"active"}
            className ="navbar-brand"
          >
           Home
         </Link>

          <div className  ="collapse navbar-collapse" id="navbarTogglerDemo03">
            <ul className ="navbar-nav mr-auto mt-2 mt-lg-0">
              <li className ="navbar-brand ">
                <Link
                  to="/about"
                      
                  activeClassName ={"active"}
                  className ="navbar-brand"
                >
                  About
                </Link>
              </li>
              <li className ="navbar-brand ">
                <Link
                  to="/faqs"
                     
                  activeClassName ={"active"}
                  className ="navbar-brand"
                >
                  FAQs
                </Link>
              </li>
              <li className ="navbar-brand ">
                <Link
                  to="/contact-us"
                     
                  activeClassName  ={"active"}
                  className ="navbar-brand"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
          <button 
          style={{border:"none",background: "none", cursor:"pointer" }}
          onClick={props.clicked}>{(props.lang === "en") ? "العربيه" :"English"}</button>
          <button 
          style={{border:"none",background: "none", cursor:"pointer" }}
          onClick={props.clickRefresh}><i className ="fas fa-sync-alt" /></button>
          { props.lang !== "en"? <div style={{padding:"0px 17px 0px 17px",backgroundColor :"red"}}><img style={{width: "50px"}} src={EALogoo} alt="logo" /></div>:null}

        </nav>
      </div>

    );
  }


export default Navbar;




