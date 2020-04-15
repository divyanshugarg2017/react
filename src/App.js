import React from 'react';
import logo from './logo.svg';
import {Navbar,NavbarBrand} from 'reactstrap';
import Menu from './components/MenuComponents';
import './App.css';
import {DISHES} from './shared/dishes';
import { render } from '@testing-library/react';

function App() {

  constructor (props) {
    super(props);
    this.state= {
      dishes: DISHES
    };
  }

  render() {
    return (
      <div className="App">
        <Navbar dark color="primary">
          <div className="container">
            <NavbarBrand href="/">ristorante con fusion</NavbarBrand>
          </div>
  
        </Navbar>
  
        <Menu dishes={this.state.dishes} />
        
       
      </div>
    );
  }
  }


export default App;
