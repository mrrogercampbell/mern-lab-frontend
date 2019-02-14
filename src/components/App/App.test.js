import React from 'react';
import { shallow, } from "enzyme";
import App from './App';
import {Route, Link} from 'react-router-dom'
import Home from '../Home/Home'



describe('App component', () => {
  let component 
    beforeEach(() => {
      component = shallow(<App />)
    })

  //     it('should have a header that says "Counter"', () => {
  //   expect(component.contains(<h1>Counter</h1>)).toBe(true)
  // })
  
  it('should have a header that says "Welcome to the Fun With Animals App"', () => {
    expect(component.contains(<h1>Welcome to the Fun With Animals App</h1>)).toBe(true)
  })

  it('should contain nav', () => {
    expect(component.contains(<h1>Home</h1>)).toBe(true)
  })

  // it('should have a router path to "/:id', () => {
  //   expect(component.contains(<Route path='/:id'/>)).toBe(true)
  // })
})
