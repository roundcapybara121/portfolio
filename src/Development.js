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

function Development() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const [projectGrid, setprojectGrid] = useState(workData);

    const logo = process.env.PUBLIC_URL + "/" + "images/capybara-icon.png";
    const plant = process.env.PUBLIC_URL + "/" + "images/developmentPhotos/plant.png";
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
                            <h1 className="intro-h1">Development</h1>
                        </div>
                    </div>
                </div>

                <div className="work-section">
                    <div className="work-container">
                        <div className="sub-section">
                            <h1 className="work-section-title">Overview</h1>
                            <p className="section-text">The goal of this project was to  develop an interactive interface, use interface components, and tie the components to an internal data state using React JS. I created a list-based interface centered around buying  plants.
                            </p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Design Process</h1>
                            <p>Thinking as an online shopper, there are things we find convenient such as a sorting function or filtering function in order to find items quickly. Additionally, an aggregator is necessary to see the total price and relieve some responsibility from the user of having to calculate it themselves.
                            </p>
                            <h3>Organization of Components</h3>
                            <p>
                                I have 2 components: 1 for card with a plant's information and 1 for the item in a cart. The plant item card component is located in plantItem.js and requires me to pass in information for it from App.js for the cards to be displayed. Once the add to cart button of a card is hit, this will update the cart's state and include the name of the plant that was added. In App.js, I made a component that goes through each cart item and create a remove button.
                            </p>
                            <h3>Usability Principles for Layout and Hierarchy</h3>
                            <p>
                                Each image in the item card has an alt tag to remain accessible for certain people who use text to speech. To give users an easier time to navigate through the website, I laid out hierachy using color and different font sizes/weights. For the website name and subsection headings, I used the font style "limelight" to indicate some importance. For smaller texts that display extra information, I used the font style "Courier New". I group information into a block of color. For example, each plant card has a dark green background compared to the light green used as the site's background. To further distiguish the cards from one another, I added an orange border. To improve learnability, I made sure all the buttons were the same style with an orange border, light green background, and text in the middle indicating what the button does. Additionally, the overall layout will not change from sorting or filtering. The plants will remain on the left and the options to change will stay on the right. Operations are simple, usually requiring a click to activate something and then a reclick to turn it off. Hopefully this will improve memorability because operations shouldn't be overally complicated and I have also included some small descriptions in case there is any confusion.
                            </p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Goal of Application and Value to Users</h1>
                            <p>This application can be used by businesses to sell plants online. This removes the need for an employee to manage business transactions and allows the consumer direct control over what they buy. For consumers, they can easily all the plants this stores sells and have costs calculated for them. This allows them to have more time to focus on whether they have enough money, or if they want to get certain items, in which they can remove from cart if they don't like it anymore. Further development of the site can lead to actual transactions or more calculations such as taxes and shipping costs.
                            </p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Final Product</h1>
                            <a href="https://roundcapybara121.github.io/development-project"><img className="image-full-width" src={plant} /></a>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Reflection</h1>
                        </div>
                    </div>
                </div>

            </div>

        </div>
    );
}
/* 
*/
export default Development;