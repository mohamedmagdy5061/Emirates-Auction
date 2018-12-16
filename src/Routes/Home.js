import React, { Component } from "react";
import CardList from "../Components/Forms/CardList/CardList";
import TopFilter from "../Components/Filters/TopFilter";
import ConditionFilter from "../Components/Filters/ConditionFilter";
import InputRange from "react-input-range";
import { GetData } from "../ApiServices/GetData";
import "react-input-range/lib/css/index.css";
import $ from "jquery";
import EALogo from "../Assets/logooo.png";
import Navbar from "../Components/Navbar/Navbar";
import "./Home.css";
import { connect } from 'react-redux';


class Home extends Component {
  state = {
    cars: [],
    carsSource: [
      {
        carID: 111570,
        image:
          "https://cdn.emiratesauction.com//media//28hiley359kmm34bkfpccoho6z5jng1j9m7ww3mx525kxadm23//t_,w_500,h_500//images.jpg",
        descriptionAr: "",
        descriptionEn: "",
        imgCount: 38,
        sharingLink: "https://www.emiratesauction.com/lofi/#/cars/cars/online",
        sharingMsgEn:
          "Emirates Auction\n2017 Mercedes - E 200 for auction\nLot# 111570\nCurrent Price: AED 210,000\nAuction Ends on 4 Nov 6:00 PM",
        sharingMsgAr:
          "الامارات للمزادات\n2017 مرسيدس - إى 200 للبيع بالمزاد\nتسلسل# 111570\nالسعر الحالي: 210,000 درهم\nينتهي المزاد في 4 نوفمبر 6:00 م",
        mileage: "19794",
        makeID: 78,
        modelID: 269,
        bodyId: 59,
        year: 2017,
        makeEn: "Mercedes",
        makeAr: "مرسيدس",
        modelEn: "E 200",
        modelAr: "إى 200",
        bodyEn: "Coupe",
        bodyAr: "كوبيه",
        AuctionInfo: {
          bids: 0,
          endDate: 7530,
          endDateEn: "4 Nov 6:00 PM",
          endDateAr: "4 نوفمبر 6:00 م",
          currencyEn: "AED",
          currencyAr: "درهم",
          currentPrice: 210000,
          minIncrement: 100,
          lot: 111570,
          priority: 4,
          VATPercent: 0,
          isModified: 0,
          itemid: 111570,
          iCarId: 0,
          iVinNumber: ""
        }
      },
      {
        carID: 93937,
        image:
          "https://cdn.emiratesauction.com//media//28hiley359kmm34bkfpccoho6z5jng1j9m7ww3mx525kxadm23//t_,w_500,h_500//images.jpg",
        descriptionAr: "",
        descriptionEn: "",
        imgCount: 26,
        sharingLink: "https://www.emiratesauction.com/lofi/#/cars/cars/online",
        sharingMsgEn:
          "Emirates Auction\n2015 Hyundai - Elantra for auction\nLot# 93937\nCurrent Price: AED 18,900\nAuction Ends on 4 Nov 6:00 PM",
        sharingMsgAr:
          "الامارات للمزادات\n2015 هيونداي - الينترا للبيع بالمزاد\nتسلسل# 93937\nالسعر الحالي: 18,900 درهم\nينتهي المزاد في 4 نوفمبر 6:00 م",
        mileage: "71001",
        makeID: 54,
        modelID: 414,
        bodyId: 6,
        year: 2015,
        makeEn: "Hyundai",
        makeAr: "هيونداي",
        modelEn: "Elantra",
        modelAr: "الينترا",
        bodyEn: "Saloon",
        bodyAr: "صالون",
        AuctionInfo: {
          bids: 18,
          endDate: 7531,
          endDateEn: "4 Nov 6:00 PM",
          endDateAr: "4 نوفمبر 6:00 م",
          currencyEn: "AED",
          currencyAr: "درهم",
          currentPrice: 18900,
          minIncrement: 100,
          lot: 93937,
          priority: 1000,
          VATPercent: 0,
          isModified: 0,
          itemid: 93937,
          iCarId: 0,
          iVinNumber: ""
        }
      },
      {
        carID: 97257,
        image:
          "https://cdn.emiratesauction.com//media//28hiley359kmm34bkfpccoho6z5jng1j9m7ww3mx525kxadm23//t_,w_500,h_500//images.jpg",
        descriptionAr: "",
        descriptionEn: "",
        imgCount: 18,
        sharingLink: "https://www.emiratesauction.com/lofi/#/cars/cars/online",
        sharingMsgEn:
          "Emirates Auction\n2013 Mitsubishi - Rosa for auction\nLot# 97257\nCurrent Price: AED 21,600\nAuction Ends on 4 Nov 6:00 PM",
        sharingMsgAr:
          "الامارات للمزادات\n2013 ميتسوبيشي - روسا للبيع بالمزاد\nتسلسل# 97257\nالسعر الحالي: 21,600 درهم\nينتهي المزاد في 4 نوفمبر 6:00 م",
        mileage: "87501",
        makeID: 82,
        modelID: 89,
        bodyId: 10,
        year: 2013,
        makeEn: "Mitsubishi",
        makeAr: "ميتسوبيشي",
        modelEn: "Rosa",
        modelAr: "روسا",
        bodyEn: "Bus",
        bodyAr: "حافلة",
        AuctionInfo: {
          bids: 29,
          endDate: 7531,
          endDateEn: "4 Nov 6:00 PM",
          endDateAr: "4 نوفمبر 6:00 م",
          currencyEn: "AED",
          currencyAr: "درهم",
          currentPrice: 21600,
          minIncrement: 100,
          lot: 97257,
          priority: 1000,
          VATPercent: 0,
          isModified: 0,
          itemid: 97257,
          iCarId: 0,
          iVinNumber: ""
        }
      }
    ],
    show: true,
    nameFilter: "",
    makeFilter: "",
    modelFilter: "",
    min: 0,
    max: 100,
    checkedBoxNew: false,
    checkedBoxUsed: false,
    checkedBoxScrap: false,
    value: { min: 0, max: 100 },
    loading: false,
    paginationView: [],
    paginationCount: 1
  };

  componentDidMount() {

    GetData().then(cars => {
    //     let newCars = this.state.cars
    //     let newSouCar = this.state.carsSource
    //   for(let i=0 ; i < 10  ; i++){
    //     newCars.push(cars[i])
    // }
      this.setState(() => { 
        // return { carsSource: cars, cars:newCars };
        return { carsSource: cars };

      });
   
    });

    this.handelMinMaxRange();

    $(window).on("scroll", () => {
      let scrollHeight = $(document).height();
      let scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        // console.log("w-h", $(window).height());
        // console.log("d-h", $(document).height());
        // console.log("w-s", $(window).scrollTop());
        // this.pushDataPagination();
      }
    });   
    setInterval(() => this.handelRefresh(),90000)
  }


  // pushDataPagination = () => {
  //   let newCars = this.state.cars
  //   let newSouCar = this.state.carsSource
  //   for(let i=0 ; i < 10  ; i++){
  //     if(newCars!==[]){
  //       newCars.push(newSouCar[i])
  //     }
  //   }
  //     this.setState({cars:newCars})
  //   if(newSouCar.length-1 > 20){
  //     // console.log( newSouCar.length)
  //        newSouCar.splice(0,10)    
  //     }else{
  //       // console.log( newSouCar.length-1)
  //       newSouCar.splice(0)
  //     }
  // }; 
 
  handelReset = () => {
    this.setState({
      cars: [],
      makeFilter: "",
      modelFilter: "",
      checkedBoxNew: false,
      checkedBoxUsed: false,
      checkedBoxScrap: false,
      value: { min: this.state.min, max: this.state.max }
    });
  };

  handelRefresh = () => {
      this.setState({ carsSource: [], loading: true });
      setTimeout(() => {
        
        GetData().then(cars =>
          this.setState({ carsSource: cars, loading: false })
        );
      },2000);
  };

  handleShowCard = (type) => {
   

    this.setState({ show: type });
  };

  sorting = (value1, value2) => {
    const temp = (this.state.cars != ""
      ? this.state.cars
      : this.state.carsSource
    ).sort((a, b) => {
      if (value2 === "undefined") {
        a = a[value1];
        b = b[value1];
      } else {
        a = a[value1][value2];
        b = b[value1][value2];
      }
      return a < b ? -1 : a > b ? 1 : 0;
    });
    return temp;
  };

  handleSort = sortBy => {
    switch (sortBy) {
      case "price":
        let tempPrice = this.sorting("AuctionInfo", "currentPrice");
        this.setState({ cars: tempPrice });
        break;

      case "year":
        let tempYear = this.sorting("year", "undefined");
        this.setState({ cars: tempYear });
        break;

      case "endDate":
        let tempEndDate = this.sorting("AuctionInfo", "endDate");
        this.setState({ cars: tempEndDate });
        break;

      case "bids":
        let tempBids = this.sorting("AuctionInfo", "bids");
        this.setState({ cars: tempBids });
        break;

      default:
        console.log("not include switch case ");
    }
  };

  filterByName = name => {
    return (this.state.cars != "" ? this.state.cars : this.state.carsSource)
    .filter(car =>`${car.modelEn} ${car.makeEn}`.toLowerCase().indexOf(name.toLowerCase()) > -1);
  };

  handleFilterByName = event => {
    event.preventDefault();
    this.setState({ nameFilter: event.target.value });
  };

  handelNewCar = () => {
    const notChecke = this.state.checkedBoxNew;
    let newCars = this.state.carsSource.filter(
      car => car.year >= new Date().getFullYear() - 1
    );
    this.setState({ cars: newCars, checkedBoxNew: !notChecke });
  };

  handelUsedCar = () => {
    const notChecke = this.state.checkedBoxUsed;
    let usedCars = this.state.carsSource.filter(
      car => car.year <= new Date().getFullYear() - 5
    );
    this.setState({ cars: usedCars, checkedBoxUsed: !notChecke });
  };

  handelScrapCar = () => {
    const notChecke = this.state.checkedBoxScrap;
    this.setState({ checkedBoxScrap: !notChecke });
  };

  handleRange = value => {
    let rangeCars = this.state.carsSource.filter(
      car =>
        car.AuctionInfo.currentPrice >= value.min &&
        car.AuctionInfo.currentPrice <= value.max
    );
    this.setState({ value: value, cars: rangeCars });
  };

  handelMinMaxRange = () => {
    const min = Math.min.apply(
      null,
      (this.state.cars != "" ? this.state.cars : this.state.carsSource).map(
        elem => elem.AuctionInfo.currentPrice - 50
      )
    );
    const max = Math.max.apply(
      null,
      (this.state.cars != "" ? this.state.cars : this.state.carsSource).map(
        elem => elem.AuctionInfo.currentPrice + 50
      )
    );
    // console.log(min, "||", max);
    this.setState({ min: min, max: max,value:{min,max} });
  };

  handelOptionMake = value => {
    let MakeCars = this.state.carsSource.filter(car => car.makeEn === value);
    this.setState({ cars: MakeCars });
  };

  handelOptionModel = value => {
    let carModel = this.state.cars.filter(car => car.modelEn === value);
    this.setState({ cars: carModel });
  };


  

  render() {
    const { nameFilter } = this.state;
    return (
      <div>
        <div className="pageLayouts" style={ this.props.language === "en" ? null: {flexDirection: "row-reverse"} }  >
          <div className="siedMenu">
            <div style={{ padding: "17px" }}>
              <img style={{ width: "30px" }} src={EALogo} alt="logo" />
            </div>
            <div style={{ padding: "25px", backgroundColor: "#f2f2f2" }}>
              <i className="fas fa-car" />
            </div>
            <div style={{ padding: "25px",color:"#FFF " }}>
              <i className="far fa-credit-card" />
            </div>
            <div style={{ padding: "25px",color:"#FFF " }}>
              <i className="fas fa-home" />
            </div>
            <div style={{ padding: "25px",color:"#FFF " }}>
              <i className="fas fa-image" />
            </div>
            <div style={{ padding: "25px",color:"#FFF " }}>
              <i className="fas fa-plus-circle" />
            </div>
            <div style={{ padding: "25px",color:"#FFF " }}>
              <i className="fas fa-cogs" />
            </div>
            <div style={{ padding: "25px",color:"#FFF " }}>
              <i className="fas fa-heartbeat" />
            </div>
          </div>
          <div className="main"  style={this.props.language === "en" ? {marginLeft:"71px"}:{marginRight:"71px"}} >
            <div className="nav-bars" style ={{position:"fixed",width:"96vw",zIndex:1000}} >
              <Navbar
                clickRefresh={this.handelRefresh}
              />
            </div>
            <div className="mainDisplay" style={ this.props.language === "en" ? {marginTop:"5%"}: {flexDirection: "row-reverse",marginTop:"5%"} } >
              <div className="filterSide" style={this.props.language === "en" ?{position:"fixed",height:"100vh", marginLeft: "2%"}:{position:"fixed",height:"100vh",marginLeft: "-2%"}}>
                <ConditionFilter
                  clickedReset={this.handelReset}
                  filterData={this.state.carsSource}
                  modelData={this.state.cars}
                  changedMake={this.handelOptionMake}
                  changedModel={this.handelOptionModel}
                  clickedd={this.click}
                  clickedNew={this.handelNewCar}
                  clickedUsed={this.handelUsedCar}
                  clickedScrap={this.handelScrapCar}
                  checkedBox={{
                    new: this.state.checkedBoxNew,
                    used: this.state.checkedBoxUsed,
                    scrap: this.state.checkedBoxScrap
                  }}
                  lang={this.props.language === "en" ? "en" : "ar"}
                />
                <hr />
                <button
                  disabled
                  style={ this.props.language === "en" ? {
                    color: "#3a3a3a",
                    marginBottom: "20px",
                    border: "none",
                    background: "none",
                    textAlign: "start",
                    display: "block",
                    width: "100%"
                  }: {
                    color: "#3a3a3a",
                    marginBottom: "20px",
                    border: "none",
                    background: "none",
                    textAlign: "end",
                    display: "block",
                    width: "100%"
                    
                  }}
                  
                >
                  {this.props.language === "en" ? "Price" : "السعر"}
                </button>
                <div>
                  <InputRange
                    maxValue={this.state.max}
                    minValue={this.state.min}
                    value={this.state.value}
                    onChange={value => this.handleRange(value)}
                  />
                </div>
              </div>

              <div className="showData" style={this.props.language === "en" ?{marginLeft: "20%"}:{marginRight :"20%"}}>
                <div className="topFilter">
                  <TopFilter
                    clickedGrid={this.handleShowCard.bind(null, true)}
                    clickedList={this.handleShowCard.bind(null, false)}
                    clickedPrice={this.handleSort.bind(this, "price")}
                    clickedYear={this.handleSort.bind(this, "year")}
                    clickedBid={this.handleSort.bind(this, "bids")}
                    clickedTime={this.handleSort.bind(this, "endDate")}
                    changedName={this.handleFilterByName}
                    lang={this.props.language === "en" ? "en" : "ar"}
                   
                  />
                </div>
                <div className="data">
                    <CardList
                      show={this.state.show}
                      carData={this.filterByName(nameFilter)}
                      lang={this.props.language === "en" ? "en" : "ar"}
                      loading={this.state.loading}
                    />  
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    language : state.language
  };
}

export default connect(mapStateToProps)(Home);
