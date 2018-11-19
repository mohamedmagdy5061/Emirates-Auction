import React from "react";
import GridViewCard from "../../Forms/CardForm/GridViewCard";
import ListViewCard from "../CardForm/ListViewCard";

const CardList = props => {
  return (
    !props.loading ? <div className="row">
      {props.carData.map((card ,index) => (
           (props.show) ? <GridViewCard index={index} lang={props.lang} key={card.carID} {...card} /> : < ListViewCard lang={props.lang} index={index} key={card.carID} {...card} />
      ))}
    </div>: <div id="preloader">
              <div id="loader" />
           </div>
  );
};

export default CardList;
