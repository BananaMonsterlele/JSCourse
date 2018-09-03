import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class Menu extends Component {
  render() {
    return (
    	<div className="menu">
    	  <div className="menu-part"><a href="#">Главная</a></div>
    	  <div className="menu-part"><a href="#">Каталог</a></div>
    	  <div className="menu-part"><a href="#">Услуги</a></div>
    	  <div className="menu-part"><a href="#">Доставка</a></div>
    	  <div className="menu-part"><a href="#">О компании</a></div>
    	  <div className="menu-part"><a href="#">Контакты</a></div>
    	</div>   
    );
  }
}

export default Menu;