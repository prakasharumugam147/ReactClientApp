import React,{Component} from 'react';
import logo from '../../assests/img/mphasis_logo.png';
import Footer from '../footer/footer'
import Routes from '../../routes';

import './header.css'

const Header=({props})=>(
  <div className="root-level">
    <div className="header">
      <img src={logo} width="200" height="65"/>      
    </div>
    <div className="main">
       <Routes/>
    </div>
    <Footer/>
  </div>
);

export default Header;