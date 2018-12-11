//  import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';

// import  {configure}  from 'enzyme';
// import Adapter from 'enzyme-adapter-react-16';

// import { shallow, mount, render } from 'enzyme';
// import {renderer} from 'react-test-renderer'
// import configureStore from 'redux-mock-store'
// const { configureStore } = require('redux-mock-store')

// const mockStore = configureStore();
// const store = mockStore({});


// configure({ adapter: new Adapter() });

// describe("<app /> TesT",()=>{ 


  // it('match snapshot ', () => {
  //       expect(1+2).toEqual(3)  
  //   });

//   it('match snapshot ', () => {
//     const tree = renderer.create(<App />).toJSON();
//     expect(tree).toMatchSnapshot()  
// });


//   it('renders edit area', () => {
//     const wrapper = shallow(<App />);
//     // const state = wrapper.state().cars
//     expect(wrapper.find("p").length).toEqual(1)  
// });


// })

it('add', () => {
  expect(2 + 2).toEqual(4)  
});