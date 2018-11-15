import React, { Component } from "react";
import CardList from "../Components/Forms/CardList/CardList";
import TopFilter from "../Components/Filters/TopFilter";
import ConditionFilter from "../Components/Filters/ConditionFilter";
import InputRange from "react-input-range";
import { GetData } from "../ApiServices/GetData";
import "react-input-range/lib/css/index.css";
import $ from "jquery";
import Navbar from  "../Components/Navbar/Navbar";



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
    max: 0,
    lang: true,
    checkedBoxNew: false,
    checkedBoxUsed: false,
    checkedBoxScrap: false,
    value: { min: 0, max: 0 },
    language:true,
    dir:"rtl"
  };

  componentDidMount() {
    GetData().then(cars => {
      this.setState(() => {
        return { carsSource: cars };
      });
    });

    this.handelMinMaxRange();

    $(window).on("scroll", () => {
      let scrollHeight = $(document).height();
      let scrollPosition = $(window).height() + $(window).scrollTop();
      if ((scrollHeight - scrollPosition) / scrollHeight === 0) {
        console.log("w-h", $(window).height());
        console.log("d-h", $(document).height());
        console.log("w-s", $(window).scrollTop());
      }
    }); 

   

  }


handelLanguage = () => {
  const arabic = this.state.language;
  this.setState({ language : !arabic });
  console.log(this.state.lang);
};


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
    window.location.reload();
    // setTimeout(()=>{
    //   // alert ("sdsfsdfsdds")
    //   GetData().then(cars => this.setState({carsSource: cars}))
    // },1000)
}


  handleShowCard = type => {
    this.setState({ show : type });
  };

  sorting = (value1, value2) => {
    const temp = (this.state.cars != "" ? this.state.cars : this.state.carsSource).sort((a, b) => {
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
        
        let tempPrice = this.sorting("AuctionInfo","currentPrice");
        this.setState({ cars: tempPrice });
        break;

      case "year":
      
        let tempYear = this.sorting("year","undefined");
        this.setState({ cars: tempYear });
        break;

      case "endDate":
      
        let tempEndDate = this.sorting("AuctionInfo","endDate");
        this.setState({ cars: tempEndDate });
        break;

      case "bids":
      
        let tempBids = this.sorting("AuctionInfo","bids");
        this.setState({ cars: tempBids });
        break;

      default:
        console.log("not include switch case ");
    }
  };

  filterByName = name => {
    return (this.state.cars != ""
      ? this.state.cars
      : this.state.carsSource
    ).filter(
      car =>
        `${car.modelEn} ${car.makeEn}`
          .toLowerCase()
          .indexOf(name.toLowerCase()) > -1
    );
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
    console.log(min, "||", max);
    this.setState({ min: min, max: max });
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
      <div >
        
         <Navbar 
          lang={(this.state.language)?"en":"ar"}
          clicked={this.handelLanguage}
          clickRefresh={this.handelRefresh}/>

        <div className="container" style={{paddingTop: "95px" , display: "flex"}}>
          <section
            className="container"
            style={{ color: "black", flex: "1", minWidth: "25%" }}
          >
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
            />
            <hr />
            <button
              disabled
              style={{
                color: "#3a3a3a",
                display: "flex",
                justifyContent: "start",
                marginBottom: "20px",
                border: "none",
                background: "none"
              }}
            >
              Price:
            </button>
            <div style={{ maxWidth: "90%", margin: "auto" }}>
              <InputRange
                maxValue={this.state.max}
                minValue={this.state.min}
                value={this.state.value}
                onChange={value => this.handleRange(value)}
              />
            </div>
          </section>
          <section style={{ minWidth: "75%" }}>
            <TopFilter
              clickedGrid={this.handleShowCard.bind(null,true)}
              clickedList={this.handleShowCard.bind(null,false)}
              clickedPrice={this.handleSort.bind(this, "price")}
              clickedYear={this.handleSort.bind(this, "year")}
              clickedBid={this.handleSort.bind(this, "bids")}
              clickedTime={this.handleSort.bind(this, "endDate")}
              changedName={this.handleFilterByName}
            />
            <CardList
              show={this.state.show}
              carData={this.filterByName(nameFilter)}
              lang={(this.state.language)?"en":"ar"}
            />
          </section>
        </div>
      </div>
    
    );
  }
}

export default Home;
