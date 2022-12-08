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

function Personas() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const [projectGrid, setprojectGrid] = useState(workData);

    const logo = process.env.PUBLIC_URL + "/" + "images/capybara-icon.png";
    const philip = process.env.PUBLIC_URL + "/" + "images/personaPhotos/person-philip.png";
    const helen = process.env.PUBLIC_URL + "/" + "images/personaPhotos/person-helen.png";
    const microwave = process.env.PUBLIC_URL + "/" + "images/personaPhotos/microwave.jpg";
    const philip1 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip1.jpg";
    const philip2 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip2.jpg";
    const philip3 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip3.jpg";
    const philip4 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip4.jpg";
    const philip5 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip5.jpg";
    const philip6 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip6.jpg";
    const philip7 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip7.jpg";
    const philip8 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip8.jpg";
    const philip9 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip9.jpg";
    const philip10 = process.env.PUBLIC_URL + "/" + "images/personaPhotos/philip10.jpg";


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
                            <h1 className="intro-h1">Personas and Storyboarding</h1>
                        </div>
                    </div>
                </div>

                <div className="work-section">
                    <div className="work-container">
                        <div className="sub-section">
                            <h1 className="work-section-title">Overview</h1>
                            <p className="section-text">The microwave is a simple appliance found in many people’s homes. Its interface should be clear and concise as it is advertised to be a quick and easy way to prepare a meal. However, what if the interface is difficult to navigate? In this project, I explore three users’ interactions with the interface of the microwave in the Goddard Kitchen of Brown University. To further display and understand the decision making behind UX design, I created a persona and storyboard based on these users.
                            </p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">The Interface</h1>
                            <div className="image-container">
                                <img className="microwave-image" src={microwave} />
                            </div>
                            <p>Though the microwave is relatively new, it lacks the number pad seen in modern microwaves. “Time cook” allows one to input a set time to cook food. Other buttons offer a present time to reheat food quickly.
                            </p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Observations</h1>
                            <p>I watched as three users attempted to heat up a meal using this microwave. This is the general trend that I observed among users.
                            </p>
                            <ul>
                                <li>Found themselves having to experiment by pressing multiple buttons before getting the right one
                                </li>
                                <li>The knob was an interesting implementation that they found amusing</li>
                                <li>Users often asked where the instructions were</li>
                                <li>Some had wondered if the buttons were faulty or if the power was on</li>
                            </ul>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Interview with Users</h1>
                            <p>After each user was done with using the microwave, I asked them a series of questions in order to understand how they felt about the interface.
                            </p>
                            <li className="list-outer">
                                Have you had previous experience using a microwave?
                                <ul>
                                    <li className="list-inner">
                                        All users answered yes
                                    </li>
                                </ul>

                            </li>
                            <li className="list-outer">
                                Did this microwave’s interface match your expectations?
                                <ul>
                                    <li className="list-inner">
                                        All users answered no
                                    </li>
                                </ul>
                            </li>
                            <li className="list-outer">
                                What buttons do you expect to click to microwave your food?
                                <ul>
                                    <li className="list-inner">
                                        Two users answered hit “time cook” then “start”
                                    </li>
                                    <li className="list-inner">
                                        One user said hit “reheat”
                                    </li>
                                </ul>
                            </li>
                            <li className="list-outer">
                                What were some features that you liked?
                                <ul>
                                    <li className="list-inner">
                                        All users really liked the knob, some described it as “fun”
                                    </li>
                                </ul>
                            </li>
                            <li className="list-outer">
                                What were some features that you disliked?
                                <ul>
                                    <li className="list-inner">
                                        Users generally agreed that the combinations of buttons to click was confusing
                                    </li>
                                    <li className="list-inner">
                                        One user didn’t like how there was no indication that the knob could be pushed in
                                    </li>
                                    <li className="list-inner">
                                        One user also noted the time to cook lacked customizability. The knob only increments time by 30 seconds.
                                    </li>
                                </ul>
                            </li>
                            <li className="list-outer">
                                Please draw your ideal interface.
                                <ul>
                                    <li className="list-inner">
                                        TODO: add images
                                    </li>
                                </ul>

                            </li>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Personas</h1>
                            <p>Personas are character archetypes that represent the spectrum of users for a product, or design. They are mainly used in product design so designers are able to create layouts that make them feel the most comfortable. From my previous observations and interview results, I created two personas based on the trend of my data. These personas are in the form of a four-quadrant empathy map describing what a user might think, feel, say, and do. </p>
                            <div className="persona-container">
                                <img className="persona-image" src={helen} />
                                <img className="persona-image" src={philip} />
                            </div>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Storyboarding</h1>
                            <p>Picking father Philip as the persona, I created a storyboard. Storyboards are meant to show a user’s journey from start to end and how they might interact with the interface. It displays their emotions and actions, and gives designers a chance to better personify/characterize a potential client. </p>
                            <p>TODO: add images</p>
                            <div className="storyboard-container">
                                <div className="panel">
                                    <img className="panel-image" src={philip1}/>
                                    <p>1. ​It is 8pm. Philip comes home late from work, exhausted. His stomach rumbles and he starts to wonder what there is to eat at home.</p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip2}/>
                                    <p>2. He surfs through his phone and realizes his favorite supermarket is closed for the day. He thinks to himself,  "good thing I have leftovers."
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip3}/>
                                    <p>3. After picking up his kids from the babysitter, he heads straight for the fridge. He scavenges through for a bit until he finally finds a large bowl of rice and pieces of frozen chicken.
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip4}/>
                                    <p>4. He places the chicken in the microwave and hits defrost. While the chicken was warming up, he turns towards the rice and thinks about how long he wants to cook it for. "Let's go for 3 minutes," he tells to himself.
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip5}/>
                                    <p>5. His children stare at him, waiting patiently for their food. Until one of them finally squeaks, "when is dinner ready, dad?" Philip answers, "just a minute!" as he stares at the microwave, perplexed. How was he going to set the microwave for 3 minutes if there was no number pad to input 3 minutes?
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip6}/>
                                    <p>6. Philip starts to press the buttons at random. He presses, "start", nothing happened. He presses "power," a screen asking "power level?" pops up. Then he presses "time cook" and finally sees that there is some progress.
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip7}/>
                                    <p>7. The screen displays "time: 00:00". He twists the knob, hoping that it'll work. It does. He then hits start and nothing happens. A headache starts to set in. 
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip8}/>
                                    <p>8. He unplugs the microwave and plugs it back in hoping that it would work, but it doesn't. He tries over and over again, thinking that the microwave might just be broken. Then, his hand fumbles over the knob and he hears a click. "You can press the knob?" he exclaims. 
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip9}/>
                                    <p>9. He hits "start". The microwave starts to hum and Philip feels a wave of relief wash over him.
                                    </p>
                                </div>
                                <div className="panel">
                                    <img className="panel-image" src={philip10}/>
                                    <p>10. ​He pulls out the rice from the microwave, turns towards his children and announced, "let's eat!". After a long day, they finally get to enjoy this meal together.
                                    </p>
                                </div>
                            </div>
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
export default Personas;