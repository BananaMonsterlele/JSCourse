import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Main extends Component {
  render() {
    return (
    	<div className="main">
    	  <div className="main-container">
    	    <h1 className="main-title">быстрая Доставка </h1>
    	  <p className="main-descr">бетона, щебня, песка</p> 
    	  <p className="main-descr">и других нерудных материалов</p>
    	  <p className="main-descr">по Москве и Московской области</p>
    	  <div className="main-cta">
    	    <button className="main-cta_button">Подробнее о доставке</button>
    	    <p className="main-cta_text">или <a href="#" className="main-cta_text__a">перейти в каталог</a></p>
    	  </div>
    	  </div>\
    	</div>
    );
  }
}

export default Main;