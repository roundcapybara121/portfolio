import "./Work.css";
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

function Responsive() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const [projectGrid, setprojectGrid] = useState(workData);

    const logo = process.env.PUBLIC_URL + "/" + "images/capybara-icon.png";
    const Suzzane = process.env.PUBLIC_URL + "/" + "images/responsivenessphotos/suzzan.png";
    const SuzzaneRedesign = process.env.PUBLIC_URL + "/" + "images/responsivenessphotos/suzzan-redesign.png";
    const desktopHifi = process.env.PUBLIC_URL + "/" + "images/responsivenessphotos/desktop-hifi.png";
    const phoneHifi = process.env.PUBLIC_URL + "/" + "images/responsivenessphotos/phone-hifi.png";
    const tabletHifi = process.env.PUBLIC_URL + "/" + "images/responsivenessphotos/tablet-hifi.png";
    const vsGuide = process.env.PUBLIC_URL + "/" + "images/responsivenessphotos/vsGuide.png";



    return (
        <div className="App">
            <head>

            </head>


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
                                    <a className="nav-item" href="test.html">HOME</a>
                                </li>
                            </ul>
                        </div>
                    </nav>

                    <div className="intro-text-container">
                        <div className="intro-text">
                            <h1 className="intro-h1">Responsive Redesign</h1>
                        </div>
                    </div>
                </div>

                <div className="work-section">
                    <div className="work-container">
                        <div className="sub-section">
                            <h1 className="work-section-title">Overview</h1>
                            <p className="section-text">After looking through Suzzane Collin’s personal website, I tried to identify and analyze flaws in the interface in order to brainstorm possible improvements to the site. I created mockups to visualize the changes I was going to make and then attempted to code those changes into a responsive website.
                            </p>
                            <a href="https://www.suzannecollinsbooks.com/index.htm">
                                <div className="image-container">
                                    <img className="image-full-width" src={Suzzane} />
                                </div>
                            </a>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Usability Issues</h1>
                            <p>These were the usability issues I noticed with the site:</p>
                            <ul>
                                <li className="list-outer">
                                    Too much scrolling to get information
                                    <ul>
                                        <li className="list-inner">
                                            Causes the amount of text to be misaligned on desktop and tablet view
                                        </li>
                                        <li className="list-inner">
                                            The quick links on the right side doesn’t follow you so not easily accessible
                                        </li>
                                        <li className="list-inner">
                                            Endless scrolling on mobile view
                                        </li>
                                        <li className="list-inner">
                                            It’s not clear that some of the text can act as a link . You have to hover over it first to see that it changes color
                                        </li>
                                    </ul>
                                </li>
                                <li className="list-outer">
                                    Links doesn’t bring you directly to the product or author page, only brings you to the general site and you’ll have to search for things related to the author yourself
                                </li>
                                <li className="list-outer">
                                    The column on the right side contains the same information which can be repetitive with links visible on other tabs
                                </li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Accessibility Issues</h1>
                            <p><a href="https://webaim.org/">WebAim</a> is a website where you can paste in another website’s URL in which WebAim will access how accessible the website is for users. It will examine properties such as color contrasts, fonts sizes, layout of components and more to determine a score for how accessible a site is.
                            </p>
                            <p>The website was put into WebAim Wave to examine for accessibility issues and this was the result:</p>
                            <ul>
                                <li className="list-outer">Images did not contain alt tags, people who use screen readers will not be able to know that there is an image
                                </li>
                                <li className="list-outer">A heading element was used as padding when it should just be padding that is used
                                    <ul>
                                        <li className="list-inner">
                                            Using heading elements can be confusing if the information is empty
                                        </li>
                                    </ul>
                                </li>
                                <li className="list-outer">Image caption text can be really small for some people</li>
                                <li className="list-outer">WebAim detected some contrast issues for the color of the tabs, but it seems to be inaccurate</li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Lofi prototype</h1>
                            <p>Before creating the wireframes, I tried to understand how users visiting Suzzane Collin’s site might feel in order to try and cater to them.</p>
                            <p>Empathize</p>
                            <ul>
                                <li className="list-outer">
                                    User who uses screen reader
                                </li>
                                <li className="list-outer">
                                    A fan of Suzanne Collins who wants to find more books by her
                                </li>
                            </ul>
                            <p>"How might we..." questions</p>
                            <ul>
                                <li className="list-outer">
                                    Improve the readability of our page</li>
                                <li className="list-outer">How could our page be more accessible to those who use screen readers</li>
                                <li className="list-outer">How might we make exploration more convenient</li>
                                <li className="list-outer">How might we improve user experience on mobile devices</li>
                            </ul>
                        </div>
                        <p>TODO: insert images</p>
                        <div className="sub-section">
                            <h1 className="work-section-title">Visual Style Guide</h1>
                            <p>The visual style guide is meant to keep the project’s design work consistent. In a process for a team, it makes handoffs to other developers easier. Within Figma, I created a guide to use for redesigning Suzzane Collin’s website. It includes the main colors, typography, and components in different states.</p>
                            <div className="image-container">
                                <img className="image-full-width" src={vsGuide} />
                            </div>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Hifi Prototype</h1>
                            <p>Based on my lofi wireframes and the visual style guide, I created hifi prototypes for a desktop, tablet, and mobile device.</p>
                            <div className="image-container">
                                <a href="https://www.figma.com/file/UANR7FcTrd0jES9RR0sug4/Suzanne-Collins-Redesign?node-id=9%3A46&t=cV22qsuc6EfUOApD-0"><img className="image-full-width" src={desktopHifi} />
                                    Hifi for desktop with annotations
                                </a>
                            </div>
                            <br></br>
                            <div className="image-container">
                                <a href="https://www.figma.com/file/UANR7FcTrd0jES9RR0sug4/Suzanne-Collins-Redesign?node-id=16%3A68&t=cV22qsuc6EfUOApD-0"><img className="image-full-width" src={tabletHifi} />
                                    Hifi for tablet with annotations
                                </a>
                            </div>
                            <br></br>
                            <div className="image-container">
                                <a href="https://www.figma.com/file/UANR7FcTrd0jES9RR0sug4/Suzanne-Collins-Redesign?node-id=16%3A69&t=cV22qsuc6EfUOApD-0"><img className="image-full-width" src={phoneHifi} />
                                    Hifi for phone with annotations
                                </a>
                            </div>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Challenges</h1>
                            <p>I was extremely new to web developing and ran into trouble with coding parts of my code. Using online tutorials, I figured out how to make the navigation bar responsive through media queuries and other CSS tools. However, I couldn't quite figure out how to remove the background color of the icons. Additionally, I had tried to use z-indexes in order to keep the navigation bar at the top, yet when I uploaded the pages onto github, the images lay on top of the navigation bar when testing for responsiveness.</p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Final Product</h1>
                            <p>This website was meant to be a visual display of the potential changes. The buttons are dummy elements and will not lead to an external website.</p>
                            <a href="https://roundcapybara121.github.io/responsive-redesign/">
                                <div className="image-container">
                                    <img className="image-full-width" src={SuzzaneRedesign}/>
                                </div>
                            </a>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Reflection on Critiques</h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
/* 
*/
export default Responsive;