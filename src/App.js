import React from 'react';
import dataProject from './project-data';
import Header from './Components/Header';
import About from './Components/About';
import Project from './Components/Project';
import Contact from './Components/Contact';
import Footer from './Components/Footer';
import './App.css';

const date = new Date().getFullYear();

function App() {
  return (<div>
      <Header />
      <About />
      <div class="wrapper" id="Projects">
    <div class="container section">
       <div class="details">
          <h2>Projects</h2>
       </div>
    </div>
    <div class="container">
       <div class="grid-3">
       {dataProject.map(data => {
         return <Project
            key={data.key} 
            link={data.imgUrl} 
            image={data.location} 
            details={data.title} />
       })}
       </div>
    </div>
 </div>
      <Contact />
      <Footer year={date} />
    </div>
  );
}

export default App;
