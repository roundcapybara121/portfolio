import "./App.css";
import React from "react";
import { useState, useEffect } from "react";
import workData from "./assets/work-data.json";
import WorkItem from "./components/workItem.js"
import { NavLink } from 'react-router-dom';

/* ####### DO NOT TOUCH -- this makes the image URLs work ####### */
workData.forEach((item) => {
  item.image = process.env.PUBLIC_URL + "/" + item.image;
});
/* ############################################################## */

function App() {
  // TODO: use useState to create a state variable to hold the state of the cart
  /* add your cart state code here */
  const [projectGrid, setprojectGrid] = useState(workData);

  const logo = process.env.PUBLIC_URL + "/" + "images/capybara-icon.png";
  const persona = process.env.PUBLIC_URL + "/" + "images/project1.png";
  const responsive = process.env.PUBLIC_URL + "/" + "images/project2.jpeg";
  const iterative = process.env.PUBLIC_URL + "/" + "images/project3.png";
  const Development = process.env.PUBLIC_URL + "/" + "images/project4.jpeg";


  return (
    <div className="App">
      <head>

      </head>


      {/* <h1>Final Portfolio</h1> TODO: personalize your bakery (if you want) */}
      <div className="container">

        <div className="intro-section">
          {/* moved navbar section inside so the background could be behind it */}
          <nav className="navbar">
            <div>
              <img className="logo" src={logo}></img>
            </div>
            <div>
              <ul className="nav-list">
                <li>
                  <a className="nav-item" href="#">HOME</a>
                </li>
              </ul>
            </div>
          </nav>
          <div className="intro-text-container">
            <div className="intro-text">
              <h1 className="intro-h1">Hi, I'm roundCapybara121</h1>
              <h3 className="inro-h3">I am currently studying UI/UX @ Brown</h3>
              <h3 className="intro-h3">Read more about my journey below!</h3>
            </div>

          </div>
        </div>
        
        <h1 className="work-title">Featured Works</h1>
        <div className="work-section">
          <div className="content-wrapper">
            <div className="content">
              <div className="card">
                <img className="card-img" src={persona}></img>
                <div className="card-content">
                  <h2 className="card-title">Personas and Storyboarding</h2>
                  <p className="card-description">worked on understanding clients and ui design</p>
                  <a href="https://calendar.google.com/calendar/u/0/r/week">
                    <button className="card-button">read more</button>  {/* create link to respective pages later */}
                  </a>
                </div>
              </div>
              <div className="card">
                <img className="card-img" src={responsive}></img>
                <div className="card-content">
                  <h2 className="card-title">Responsive Redesign</h2>
                  <p className="card-description">worked on better understanding layouts for different devices</p>
                  <a href="https://calendar.google.com/calendar/u/0/r/week">
                    <button className="card-button">read more</button>  {/* create link to respective pages later */}
                  </a>
                </div>

              </div>
              <div className="card">
                <img className="card-img" src={iterative}></img>
                <div className="card-content">
                  <h2 className="card-title">Iterative Design</h2>
                  <p className="card-description">started a design for a start up company from scratch</p>
                  <a href="https://calendar.google.com/calendar/u/0/r/week">
                    <button className="card-button">read more</button>  {/* create link to respective pages later */}
                  </a>
                </div>

              </div>
              <div className="card">
                <img className="card-img" src={Development}></img>
                <div className="card-content">
                  <h2 className="card-title">Development</h2>
                  <p className="card-description">worked with react in javascript to build a functional plant shop</p>
                  <a href="https://calendar.google.com/calendar/u/0/r/week">
                    <button className="card-button">read more</button>  {/* create link to respective pages later */}
                  </a>
                </div>

              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
/* 
*/
export default App;
