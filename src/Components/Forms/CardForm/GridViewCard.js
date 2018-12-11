import React from "react";
import TimeDown from "../../../Components/TimeCountDown/TimeDown";

const cardFormStyle = {
  marginTop: "15px",
  color: "gray"
};


const GridViewCard = props => {
  return (
    <div className="col-lg-3 col-sm-8 portfolio-item  animation " style={cardFormStyle}>
      <div
        className="card h-100"
        style={{ boxShadow: "0 5px 7px 0 rgba(0,0,0,.08)"}}
      >
        <img
          className="card-img-top"
          style={{ maxHeight: 150, minHeight: 150 }}
          src={props.image}
          alt="Img-Car"
        />
        <div className="card-body" style={{ textAlign: "center" }}>
          <h5 className="card-title ">
            {props.lang === "en" ? props.makeEn : props.makeAr}{" "}
            {props.lang === "en" ? props.modelEn : props.modelAr}
          </h5>
          <h4 style={{ color: "green" }} className="card-text ">
            {props.AuctionInfo.currentPrice}{" "}
            <span style={{ fontSize: "12px" }}>
              {" "}
              {props.lang === "en"
                ? props.AuctionInfo.currencyEn
                : props.AuctionInfo.currencyAr}
            </span>
          </h4>
          <hr />
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <i className="fas fa-archive" /> 
              {props.carID}
            </div>
            <div>
              <i className="fas fa-gavel" />
               {props.AuctionInfo.bids}
            </div>
            <div>
              <i className="fas fa-stopwatch" /> 
              < TimeDown key={props.carID} index={props.index} endDate={props.AuctionInfo.endDate} />
          </div>
          </div>
        </div>
      </div>  
    </div>
  );
};

export default GridViewCard;



