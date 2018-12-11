import React from "react";
import "./TopFilter.css"


const TopFilter = props => (
  <div>
    <nav className="navbar navbar-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder={props.lang === "en" ?  "Search" : "بحث"}
          aria-label="Search"
          onChange={props.changedName}
        />
      </form>
      <button onClick={props.clickedGrid}  className="buttonDocorationNone">
        <i className="fas fa-th" />
      </button>
      <button onClick={props.clickedList} id="list" className="buttonDocorationNone">
        <i className="fas fa-th-list" />
      </button>
      <button onClick={props.clickedTime} className="buttonDocorationNone">
        {props.lang === "en" ?  "BY END TIME" : "انتهاء الوقت"}
      </button>
      <button onClick={props.clickedBid} className="buttonDocorationNone">
        {props.lang === "en" ?  "BY BIDS" : "العروض"} 
      </button>
      <button onClick={props.clickedYear} className="buttonDocorationNone">
      {props.lang === "en" ?  "BY YEAR" : "السنه"} 
      </button>
      <button onClick={props.clickedPrice}  className="buttonDocorationNone">
      {props.lang === "en" ?  "BY PRICE" : "السعر"}
      </button>
    </nav>

  </div>
);

export default TopFilter;
