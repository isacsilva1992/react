import React, { Component } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';

import logo from './logo.svg';
import './Assets/css/default.css';
import Header from './components/headerComponent/header';
import Footer from './components/footerComponent/footer';
import Homepage from './components/pages/homePage';
import Products from './components/pages/products';
import Contacts from './components/pages/contacts';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
            <Route exact path='/' component={Homepage} />
            <Route exact path='/Products' component={Products} />
            <Route exact path='/Contacts' component={Contacts} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
