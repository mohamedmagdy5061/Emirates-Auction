import React from "react";

const buttonDocorationNone = {
  border: "none",
  background: "none",
  cursor: "pointer"
};

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
      <button onClick={props.clickedGrid} style={buttonDocorationNone}>
        <i className="fas fa-th" />
      </button>
      <button onClick={props.clickedList} style={buttonDocorationNone}>
        <i className="fas fa-th-list" />
      </button>
      <button onClick={props.clickedTime} style={buttonDocorationNone}>
        BY END TIME
      </button>
      <button onClick={props.clickedBid} style={buttonDocorationNone}>
        BY BIDS
      </button>
      <button onClick={props.clickedYear} style={buttonDocorationNone}>
        BY YEAR
      </button>
      <button onClick={props.clickedPrice} style={buttonDocorationNone}>
        BY PRICE
      </button>
    </nav>
  </div>
);

export default TopFilter;
