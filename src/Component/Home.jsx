import React, { useState, useEffect } from 'react';
import "../Style/home.css";
import { Link, animateScroll as scroll } from "react-scroll";

function Home() {
    
  return (
    <div className="home-background" id="home">
        <div className="home-header">
            <Link activeClass="active" to="home" spy={true} smooth={true} offset={-20} duration={500}><p className="logo">Techraveller</p></Link>
            <div className="nav-bar">
                <Link activeClass="active" to="content" spy={true} smooth={true} offset={-20} duration={500}><p className="nav-item">Places</p></Link>
                <Link activeClass="active" to="article" spy={true} smooth={true} offset={-20} duration={500}><p className="nav-item">Articles</p></Link>
                <button className="button-style">Visit Techraveller</button>
            </div>
           
        </div>
        <div></div>
        <div className="home-container">
            <h1 className="home-title">Iceland</h1>
        </div>
        <div className="home-fadeend"></div>
    </div>
  );
}

export default Home;
