import React from "react";
import GridViewCard from "../../Forms/CardForm/GridViewCard";
import ListViewCard from "../CardForm/ListViewCard";

const CardList = props => {
  return (
    <div className="row">
      {props.carData.map((card ,index) => (
           (props.show) ? <GridViewCard index={index} lang={props.lang} key={card.carID} {...card} /> : < ListViewCard lang={props.lang} key={card.carID} {...card} />
      ))}
    </div>
  );
};

export default CardList;
