import React from 'react';
import './about.css';

const About = () => {
    return <div>
    <div class="container section" id="About">
    <div class="details">
       <h2>About me</h2>
    </div>
 </div>
 <section class="section flex">
    <div class="div1">
       <img src="img/deniel2.jpg" alt="" />
    </div>
    <div class="div2">
       <p>I'm an aspiring Front End Developer who loves to learn and to improve my skills.</p>
       <p>I love to build cool stuff to showcase my skills.</p>
       <p> I graduated from Far Eastern University with a Bachelor's degree in Information Technology.</p>
       <div class="margin-2">
          <p>I was supposed to graduate this year. However, a pandemic occurred.But while waiting for my graduation, I'm self studying skills to prepare myself for a job.</p>
          <p class="bold">Here are some technologies I've been working and improving with recently</p>
          <div class="grid-ul">
             <ul>
                <li>Html</li>
                <li>Css</li>
                <li>Javascript</li>
                <li>Php</li>
             </ul>
             <ul>
                <li>Materialize Css</li>
                <li>Bootstrap Css</li>
                <li>Git</li>
                <li>Mysql</li>
             </ul>
          </div>
       </div>
    </div>
 </section>
 </div>
}

export default About;