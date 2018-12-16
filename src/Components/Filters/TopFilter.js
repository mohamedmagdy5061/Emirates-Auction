import React from "react";
import "./TopFilter.css"

let isActive = true
const style={
  // color:"black"
}

 let isActives = (e)=>{
  e.stopPropagation();
  console.log(e.target.style.color)
  // e.target.style.color = "red"
  let arrStyle = [];
  // arrStyle.push(e.target.id)
  console.log(arrStyle)
}

const TopFilter = props => (
  <div dir={props.lang === "en" ?"ltr":"rtl"}>
    <nav className="navFilter" style={{display:"flex",flexWrap:"wrap",justifyContent: "space-between"}}>
      <form className="form-inline">
        <input
          className="form-control mr-sm-2"
          type="search" 
          placeholder={props.lang === "en" ?  "Search" : "بحث"}
          aria-label="Search"
          onChange={props.changedName}
        />
      </form>
      <button onClick={props.clickedGrid} id="grid" onDoubleClick={isActives}  className="buttonDocorationNone">
        <i style={isActive ? style : null } className="fas fa-th" />
      </button>
      <button onClick={props.clickedList} id="list" onDoubleClick={isActives} className="buttonDocorationNone">
        <i className="fas fa-th-list" />
      </button>
      <button onClick={props.clickedTime} onDoubleClick={isActives} className="buttonDocorationNone">
      {props.Up ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />}
        {props.lang === "en" ?  "BY END TIME" : "انتهاء الوقت"}
      </button>
      <button onClick={props.clickedBid} className="buttonDocorationNone">
      {props.Up ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />}
        {props.lang === "en" ?  "BY BIDS" : "العروض"} 
      </button>
      <button onClick={props.clickedYear} className="buttonDocorationNone">
      {props.Up ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />}
      {props.lang === "en" ?  "BY YEAR" : "السنه"} 
      </button>
      <button onClick={props.clickedPrice}  className="buttonDocorationNone">
      {props.Up ? <i className="fas fa-sort-amount-down" /> : <i className="fas fa-sort-amount-up" />}
     
      {props.lang === "en" ?  "BY PRICE" : "السعر"}
      </button>
    </nav>

  </div>
);

export default TopFilter;
