import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Header extends Component {
  render() {
    return (
    	<header className="header">
    	  <div className="logo">
    	    <div className="logo-img"></div>
    	    <div>
    	      <h2 className="logo-title">granit</h2>
    	      <div className="logo-descr">Доставка нерудных материалов</div>
    	    </div>
    	  </div>
    	  <div className="tel">
    	    <div className="tel-wrapper">
    	      <div className="tel-title">8 800 342-13-33</div>
    	      <div className="tel-descr">Бесплатный звонок по России</div>
    	    </div>
    	    <button className="cta">Обратный звонок</button>
    	  </div>
    	</header>
    );
  }
}

export default Header;