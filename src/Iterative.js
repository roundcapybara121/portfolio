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

function Iterative() {
    // TODO: use useState to create a state variable to hold the state of the cart
    /* add your cart state code here */
    const [projectGrid, setprojectGrid] = useState(workData);

    const logo = process.env.PUBLIC_URL + "/" + "images/capybara-icon.png";
    const hifiBefore = process.env.PUBLIC_URL + "/" + "images/Iterativephotos/hifi-before.png"; 
    const hifiFinal = process.env.PUBLIC_URL + "/" + "images/Iterativephotos/hifi-final.png";
    const hifiNotes = process.env.PUBLIC_URL + "/" + "images/Iterativephotos/hifi-notes.png";
    const wireframe = process.env.PUBLIC_URL + "/" + "images/Iterativephotos/wireframe.png";
    const mockup = process.env.PUBLIC_URL + "/" + "images/Iterativephotos/mockup.png";

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
                            <h1 className="intro-h1">Iterative Design and Evaluation</h1>
                        </div>
                    </div>
                </div>

                <div className="work-section">
                    <div className="work-container">
                        <div className="sub-section">
                            <h1 className="work-section-title">Overview</h1>
                            <p className="section-text">Working in a group of four, we designed an interactive interface for an emerging startup called Toko. We started by creating sketches and mockups which then received feedback from peers. Using the feedback, we made a revised hi-fi prototype which we submitted to user testing and to the startup to see their opinions.
                            </p>
                            <p>
                                The goal of the project was to mimic an iterative design process flow through a series of steps.
                            </p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Sketching and Wireframing</h1>
                            <h3>Pre-Design Thinking</h3>
                            <p>
                                The goal of Toko is to create an experience that would allow users in East Asia to quickly learn English. By providing users with over 150 topics based on real-world scenarios, Toko hopes to remove the stress of learning a new language that comes with other language learning apps. Toko’s appeal is that they give learners an accessible way to have engaging, short, and realistic conversations with an AI and give users feedback on their grammar.
                            </p>
                            <h3>Sketching</h3>
                            <p>Without looking at our startup’s existing interface, our group tried to make a variety of screens and layouts of possible designs for an interface that would meet Toko’s goals.</p>
                            <div className="sketch-images">
                                <image>TODO: insert images</image>
                                <br></br>
                                <image>TODO: insert images</image>
                                <br></br>
                                <image>TODO: insert images</image>
                                <br></br>
                                <image>TODO: insert images</image>
                            </div>
                            <h3>Final lofi Wireframes</h3>
                            <p>We met up as a group to decide on which aspects of each sketch to include into the final design.
                            </p>
                            <div className="sketch-lofi">
                                <div className="image-container">
                                    <img className="wireframe" src={wireframe} />
                                </div>
                            </div>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">Hifi Prototype</h1>
                            <p>Using our wireframe, we created a fully functional hifi prototype in Figma for our peers to critique
                            </p>
                            <a href="https://www.figma.com/proto/pvSaC5YstmYMQkLkj8fzi1/toko?node-id=77%3A151&scaling=scale-down&page-id=77%3A146&starting-point-node-id=78%3A956"><img className="image-full-width" src={hifiBefore}/></a>
                            <h3>Critiques</h3>
                            <ul>
                                <li className="list-outer">Text across the app was too small. Specifically, “view all” buttons, “browse all”, topic names, and sign up instructions, which we made bigger. </li>
                                <li className="list-outer">The login screen flows were confusing. We streamlined this into one sign up page and one login page.</li>
                                <li className="list-outer">We had inconsistent use of bookmark icons for saved topics. We added bookmark icons to every topic to allow users to save topics.</li>
                                <li className="list-outer">We had inconsistent titles for the “Continue Practicing” sections on the home and notebook pages. We made these sections’ titles the same to make it clear these were the same section.</li>
                                <li className="list-outer">We used red text for mistake corrections, which was seen as too aggressive. We changed this to blue.</li>
                                <li className="list-outer">Our prototype didn’t show that corrections were made in real time on the chat screen. We added grammatical corrections and a pop up explanation.</li>
                                <li className="list-outer">To better use the touch interface, we added a swipe up functionality to continue the conversation on the transcript screen.</li>
                                <li className="list-outer">The profile page had no way to edit account details, so we added edit buttons.</li>
                            </ul>
                            <h3>Improvements</h3>
                            <p>Reflecting on our peers' critiques, we made changes to our prototype. Here were the changes that we made.</p>
                            <div className="image-container">
                                <img src={hifiNotes}/>
                            </div>
                            <br></br>
                            <div className="image-container">
                                <a href="https://www.figma.com/proto/pvSaC5YstmYMQkLkj8fzi1/toko?node-id=212%3A770&scaling=scale-down&page-id=212%3A475&starting-point-node-id=212%3A770"><img className="image-full-width" src={hifiFinal}/></a>
                            </div>
                            <p>Click on the image to view our final prototype!</p>
                        </div>
                        <div className="sub-section">
                            <h1 className="work-section-title">User Testing</h1>
                            <p>User testing is an invaluable part of design. It allows us to see how a user might interact with our design and can make flaws within our design more noticeable. We submitted our hifi prototype to <a href="https://www.usertesting.com/">UserTesting.com </a>and asked them to complete a task. The user then records a video of them figuring out the interface and allows us to review.</p>
                            <h3>Task</h3>
                            <p>This is the description we gave users of our prototype:</p>
                            <ul>
                                <li className="list-indent">This is a prototype of a language app that teaches non-native English speakers English by having realistic chats with an AI bot about different topics.
                                    Imagine you are trying to learn English in this app. Navigate through the app and learn about different topics and interact with the app by completing the given tasks!
                                    NOTE: This is not an actual website but an interactive mockup made on prototyping software; so you can click through but not actually type into the chat boxes or other complex features; also not all prototype components are completed (so only specific topics are 'clickable'). This is a mobile app so imagine that your cursor is your finger (click = tap, click and drag = swipe up or down, scroll = scroll).
                                </li>
                            </ul>
                            <p>These are the specific tasks given to users</p>
                            <ul>
                                <li className="list-outer"> Imagine you are trying to learn English in this app. Navigate through the app and try to chat about the topic “Social Gathering” (note: this is a prototype so you can’t actually interact with the AI bot or type into the chat box just navigate to the chat screen)
                                </li>
                                <li className="list-outer">After Task 1, imagine that you’ve previously already learned about the topic: “Snack Time.” Try to go back to that previously learned topic and continue the conversation about “Snack Time.” Then in your current conversation in “Snack Time,” try to learn the details of the grammatical mistake that you made in the chat.
                                </li>
                                <li className="list-outer"><p>After Task 2, look back through your conversation so far; see if you can go back to the transcript.</p>
                                </li>
                                <li className="list-outer">Go back to the home screen and navigate to view all the possible topics</li>
                                <li className="list-outer">Navigate through the app and try to sign out or log out.
                                </li>
                            </ul>
                            <h3>Post-Test Questionairre</h3>
                            <ul>
                                <li className="list-outer">Was there anything confusing when using the app? Why or why not?</li>
                                <li className="list-outer"> Is there anything that you would like to improve about the app?</li>
                                <li className="list-outer">What did you like the most about using this app? What did you like the least?</li>
                                <li className="list-outer">On a scale from 1-5 from least likely to most likely, how likely would you recommend this app to a friend?</li>
                            </ul>
                            <h3>Results from Users</h3>
                            <p>Task 1: Social Gathering</p>
                            <li>Analysis: All three users were able to successfully find the “Social Gathering” topic and enter into the chat. One user suggested making the topic titles easier to be spotted either by making it a darker color or bolding it since the text was not super obvious. The other two users said that it was easy to find.</li>
                            {/* TODO: figure out how to stylize a certain part of text without causing the newline */}
                            <p>Task 2: Snack Time &#40;continue convo and find mistakes&#41;</p>
                            <li>Analysis: All three users struggled with figuring out how to continue the conversation. The drag up functionality was not intuitive, and they all attempted to click the section and saw no response and did not try dragging. Only one user was able to figure it out and found the grammar correction pop up immediately. Possibly the drap up interaction on a phone would be more intuitive than simulating phone interactions on a computer. Regardless, this would be more intuitive with a button.
                            </li>
                            <p>Task 3: Snack Time &#40;go back to transcript/history&#41;</p>
                            <li>Analysis: Since some users were unable to navigate to the continued conversation page, they did not understand where the transcript was. One user that did find the page, thought that the arrow signs were confusing in that they weren’t exactly pointing to the transcript, leading her to misidentify which page was the transcript.</li>
                            <p>Task 4: Go back to home screen and navigate all possible topics</p>
                            <li>Analysis: All three users were able to navigate back to the home screen by finding it on the bottom navigation menu bar. Some users noted that the “Browse All” button was obvious and easy to find. A user noted that they liked the blue color scheme for all the topics and seemed very calming. All users found this task to be very easy.</li>
                            <p>Task 5: Sign out</p>
                            <li>Analysis: All the users were able to find the sign out button and found the task extremely easy. The sign out button being under the profile page was expected and intuitive to all the users.
                            </li>
                            <h3>Possible Interface Changes</h3>
                            <ul>
                                <li>One of the main comments that we received from user testing was that for Task 2, it was not very intuitive on how to continue a previously done conversation. We would potentially change our interface from swipe up to continue to a solid button so that the directionality of the arrow symbol doesn’t confuse the user on which screen is supposed to be the transcript screen and which screen is supposed to be the continue conversation screen. </li>
                                <li>The other main issue was that users found it confusing that during a continued conversation, they could see the transcript while learning and as a static page. Users were not sure why there were two screens for the transcript. We would potentially change our interface to only show the static transcript page when viewing a previous conversation, and then if a user wanted to continue the conversation we would not have the option to open up the static transcript from the messaging page.</li>
                            </ul>
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
export default Iterative;