import React from 'react';
import { shallow } from 'enzyme';
import App from './App.js';
import Gift from './Gift'


describe('App', ()=>{
  const app = shallow(<App/>);

  it('renders correctly', () => {
    expect(app).toMatchSnapshot();
  });

  it('initailizs the `state` with an empty list of gifts', () =>{
    expect(app.state().gifts).toEqual([]);
  });

describe('When clicking the `add-gift` button', () => {
  const id = 1;
     beforeEach(()=>{
       app.find('.btn-add').simulate('click');
     })

     afterEach(() =>{
       app.setState({  gifts: [] })
     })

  it('adds a new `state` ', () => {
   expect(app.state().gifts).toEqual([{ id }]);
  });

  it('adds new div to rendered list ',() => {
     expect(app.find('.gift-list').children().length).toEqual(1);
  });

  it('creates a gift component', () => {
    expect(app.find('Gift').exists()).toBe(true);
    });

   describe('and the user wants to remover added gift', () => {
     beforeEach(()=>{
       app.instance().removeGift(id);
     });

     it('removes the gift from `state`', () => {
       expect(app.state().gifts).toEqual([]);
     })
   });
  });

})
