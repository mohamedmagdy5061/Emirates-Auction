import React from "react";
import "./TopFilter.css"


const TopFilter = props => (
  <div>
    <nav className="navbar navbar-light">
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search"
          placeholder="Search"
          aria-label="Search"
          onChange={props.changedName}
        />
      </form>
      <button onClick={props.clickedGrid}  className="buttonDocorationNone">
        <i className="fas fa-th" />
      </button>
      <button onClick={props.clickedList} className="buttonDocorationNone">
        <i className="fas fa-th-list" />
      </button>
      <button onClick={props.clickedTime} className="buttonDocorationNone">
        BY END TIME
      </button>
      <button onClick={props.clickedBid} className="buttonDocorationNone">
        BY BIDS
      </button>
      <button onClick={props.clickedYear} className="buttonDocorationNone">
        BY YEAR
      </button>
      <button onClick={props.clickedPrice} className="buttonDocorationNone">
        BY PRICE
      </button>
    </nav>
  </div>
);

export default TopFilter;
