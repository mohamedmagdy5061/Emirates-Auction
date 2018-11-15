import React from "react";
import TimeDown from "../../../Components/TimeCountDown/TimeDown";

const ListViewCard = props => {
  return (
    <div
      className="container center"
      style={{
        color: "gray",
        boxShadow: "0 5px 7px 0 rgba(0,0,0,.08)",
        padding: "0px",
        marginTop: "10px",
        maxWidth: "92%",
        backgroundColor: "#fff",
        border: "1px solid #eceef3",
        display: "flex",
        justifyContent: "space-around",
        marginBottom: "5px"
      }}
    >
      <div style={{ width: "40%" }}>
        <img
          style={{ maxHeight: 150, minHeight: 150, borderRadius: "0px" }}
          className="card-img-top"
          src={props.image}
          alt="Img-Car"
        />
      </div>
      <div className="card-body" style={{ width: "60%", textAlign: "center" }}>
        <h5 className="card-title">
          {props.lang === "en" ? props.makeEn : props.makeAr}{" "}
          {props.lang === "en" ? props.modelEn : props.modelAr}
        </h5>
        <h4 style={{ color: "green" }} className="card-text">
          {props.AuctionInfo.currentPrice}{" "}
          <span style={{ fontSize: "12px" }}>
            {" "}
            {props.lang === "en"
              ? props.AuctionInfo.currencyEn
              : props.AuctionInfo.currencyAr}
          </span>
        </h4>
        <div style={{ display: "flex", justifyContent: "space-around" }}>
          <div>
            <i className="fas fa-archive" /> {props.carID}
          </div>
          <div>
            <i className="fas fa-stopwatch" /> < TimeDown key={props.carID} endDate={props.AuctionInfo.endDate} />
          </div>
          <div>
            <i className="fas fa-gavel" /> {props.imgCount}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListViewCard;
