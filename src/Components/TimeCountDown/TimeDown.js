import { Component } from "react";
import moment from "moment";

class TimeDown extends Component {
  state = {
    endDate: this.props.endDate,
    timer: this.props.endDate-1
  }

  componentDidMount() {
      
        
    setInterval(() => {
        this.setState(oldstate =>{ 
            return  { timer: this.oldsState(oldstate)-1}
        });
        }, 1000+(this.props.index*10));
      
    }

    oldsState = (oldValue)=>{
        let now = new Date().getTime();
        let stampDate = (oldValue.endDate * 1000)
            let timers = stampDate - now;
        return timers 
        }
    

  render() {
    return  moment(this.state.timer).format("HH:mm:ss"); 

  }
}

export default TimeDown;
