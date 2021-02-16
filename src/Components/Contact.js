import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import './contact.css';

const Contact = () => {
    return  <div class="wrapper-2 section" id="Contact">
       <div class="container">
          <div class="details">
             <h2>Contact Me</h2>
          </div>
          <div class="contact-grid">
             <div>
                <img src="img/tenor.gif" alt="" />
             </div>
             <div class="social-links">
                <h2>Discuss something?</h2>
                <p>Email: denielsalvacion@gmail.com</p>
                <p>Address: Philippines</p>
                <p>Contact: +63 961 039 2529</p>
                
                <div>
                   <h2>Get in touch</h2>
                   <a href="https://twitter.com/Denyyel"><TwitterIcon className="icon tw" /></a>
                   <a href="https://github.com/Denyyel914"><GitHubIcon className="icon git"/></a>
                   <a href="https://www.linkedin.com/in/deniel-salvacion-75aba31b4/" ><LinkedInIcon className="icon linkedin" /></a>
                   <a href="https://www.facebook.com/denyyelkid/"><FacebookIcon className="icon fb"/></a>
                   <a href="https://www.instagram.com/denyyel/"><InstagramIcon className="icon ig"/></a>
                </div>
             </div>
          </div>
       </div>
    </div>
}

export default Contact;