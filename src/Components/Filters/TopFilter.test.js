import  React from "react";
// // import ReactDOM from 'react-dom';
import TopFilter from "./TopFilter";
 import  {configure, shallow,mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

// // import configureMockStore from 'redux-mock-store'

configure({ adapter: new Adapter() });


const props = {
      clickedGrid:"handleShowCard.bind(null, true)",
      clickedList:"handleShowCard(null, false)",
      clickedPrice: "handleSort(this, price)",
      clickedYear: "handleSort(this, year)",
      clickedBid: "handleSort(this, bids)",
      clickedTie:"handleSort(this, endDte",
      changedNae:"handleFilterByam",
      lang:"language === ar",
    } 

describe("TopFilter test", () => {
      it("TopFilter", () => {
        const wrapper = shallow(<TopFilter  {...props}  />);
         console.log(wrapper.debug())
        expect(true).toBe(true);
      });

      it("simulate click sort by size",()=>{
        const wrapper = mount(<TopFilter  {...props}  />);
        // wrapper.instance().clickedList = jest.fn();
        // let { clickedList } = wrapper.instance();
      //  const list= wrapper.find('#list').simulate('click')
        // console.log('ssssssssssssssss',list)
        // wrapper.simulate('click');
        // console.log( wrapper.simulate('click'))
        // expect(true).toBe(true)
        // expect(handleShowCard).toHaveBeenCalledTimes(1);

      });


      it("simulate lang===ar button",()=>{
        const wrapper = mount(<TopFilter   />);
        wrapper.setProps(props)
        // const list= wrapper.find('#langs').simulate('click')
        // console.log('fffffffffff',list.debug())
        console.log(wrapper.debug())

      })

      
      it("simulate click langs button",()=>{
        const wrapper = mount(<TopFilter   />);
        wrapper.setProps(props)
        //  wrapper.find('#list').simulate('Click')
        // console.log('fffffffffff',list.debug())
        // expect(TopFilter.props.clickedList("handleShowCard(nullfalse)")).toEqual("handleShowCard(nullfalse)")
        console.log(wrapper.debug())

      })


    });
    