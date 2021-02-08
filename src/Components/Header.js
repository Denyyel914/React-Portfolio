import React from 'react';
import './header.css';

const Header = () => {
    return   <div class="main" id="Home">
    <header>
       <div class="logo">
          <h3>Deniel Salvacionssss</h3>
       </div>
       <ul class="nav-list">
          <li><a href="#Home" class="nav-list-item">Home</a></li>
          <li><a href="#About" class="nav-list-item">About</a></li>
          <li><a href="#Projects" class="nav-list-item">Projects</a></li>
          <li><a href="#Contact" class="nav-list-item">Contact</a></li>
       </ul>
       <div class="burger">
           <div class="div-1"></div>
           <div class="div-2"></div>
           <div class="div-3"></div>
       </div>
    </header>
    <div class="main-content">
       <h1>Deniel Salvacion</h1>
       <h2>Front End <span>Developer</span></h2>
       <a href="https://drive.google.com/file/d/1jP7cfiIV_8C9nm_1Q653OBA6LADhMJgl/view?usp=sharing" class="btn">Download my resume</a>
    </div>
 </div>
}

export default Header;