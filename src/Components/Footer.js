import React from 'react';
import './footer.css';

const Footer = (props) => {
    const date = new Date().getFullYear();
    return  <footer>
    <p>© Copyright Deniel Salvacion Portfolio {date}</p>
 </footer>
}

export default Footer;