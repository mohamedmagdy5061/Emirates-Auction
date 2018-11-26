import React from "react";

const ConditionFilter = props => (
  <div dir = {props.lang === "ar" ? "rtl" : "ltr" }>
    <button
      onClick={props.clickedReset}
      style={{
        color: "rgb(158, 22, 2)",
        display: "block",
        margin: "auto",
        border: "none",
        background: "none",
        cursor: "pointer"
      }}
    >
      Reset
    </button>
    <div
      style={{
        display: "flex",
        alignItems: "flex-start",
        borderTop: "1px solid lightgrey",
        marginBottom: "20px"
      }}
    >

    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "flex-start",
        flexDirection: "column",
        marginBottom: "20px"
      }}
    >
    <div >
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          onChange={props.clickedNew}
          checked={props.checkedBox.new}
          className="custom-control-input"
          id="new"
          style={{ flex: 1 }}
        />

        <label
          className="custom-control-label"
          htmlFor="new"
          style={{ marginBottom: "10px" }}
        >
        {props.lang === "en" ?  "New" : "جديد"}
         
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          onChange={props.clickedUsed}
          checked={props.checkedBox.used}
          className="custom-control-input"
          id="used"
          style={{ flex: 1 }}
        />

        <label
          className="custom-control-label"
          htmlFor="used"
          style={{ marginBottom: "10px" }}
        >
          {props.lang === "en" ?  "Used" : "مستعمل"}
        </label>
      </div>
      <div className="custom-control custom-checkbox">
        <input
          type="checkbox"
          onChange={props.clickedScrap}
          checked={props.checkedBox.scrap}
          className="custom-control-input"
          id="scrap"
          style={{ flex: 1 }}
        />

        <label
          className="custom-control-label"
          htmlFor="scrap"
          style={{ marginBottom: "10px" }}
        >
           {props.lang === "en" ? "Scrap" : "خردا"}
        </label> 
      </div>
        </div>

      <br />

      <span >{props.lang === "en" ?" Make:" : ":الماركه"}</span>
      <select
        className="custom-select"
        onChange={e => props.changedMake(e.target.value)}
        style={{
          marginBottom: "10px",
          boxShadow: " 0 1px 3px rgba(0,0,0,.18)",
          maxWidth: "90%",
          marginTop: "10px"
        }}
      >
        <option>Make...</option>
        {props.filterData.map((car, indx) =>
          car.makeEn !== "" ? (
            <option key={indx} value={car.makeEn}>
              {" "}
              {car.makeEn}{" "}
            </option>
          ) : null
        )}
      </select>
      <br />

      <span>{props.lang === "en" ?" Model:" : ":الموديل"} </span>
      <select
        className="custom-select"
        onChange={e => props.changedModel(e.target.value)}
        style={{
          boxShadow: " 0 1px 3px rgba(0,0,0,.18)",
          maxWidth: "90%",
          marginBottom: "10px"
        }}
      >
        <option>Model...</option>
        {props.modelData.map((car, indx) =>
          car.modelEn !== "" ? (
            <option key={indx} value={car.modelEn}>
              {" "}
              {car.modelEn}{" "}
            </option>
          ) : null
        )}
      </select>
    </div>
  </div>
);

export default ConditionFilter;
