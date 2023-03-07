import React from "react";
// import { Link } from "react-router-dom";

import "./AboutMe.css";

function AboutMe() {
  return (
        <div className="jumbotron">
            <img className="card-img-top" src="https://user-images.githubusercontent.com/74163812/223305712-4fc4dfe3-dc6e-4549-b418-59fc0473432a.png" alt="Rachel-Banner"></img>
            <div className="container-text">
                <h1 className="display-4">About Me</h1>
                <img className="RachelKenney"
                    src="https://user-images.githubusercontent.com/74163812/223309376-3cec3ecf-d88b-4c63-909d-9be32c4dac24.png"
                    ALIGN="right" alt="a girl with red hair"></img>
                {/* <p className="lead">Hello and مرحبا !</p> */}
                <hr/>
                <p>My name is Rachel Kenney and I have a passion for design and creating fun user experiences, often incorporating self-made graphics and illustrations in the process. </p>
                <p>I graduated from the University of Maryland, College Park in 2015 with a Bachelor of Arts in Arabic Studies and was recently given the opportunity to pursue a Full-Stack Web Development certification through Johns Hopkins University and successfully completed the course with an "A" average in May of 2021. I am eagerly looking forward to pursuing a career as a Full-Stack Web Developer as it scratches my creative itch, keeps my mind engaged and encourages me to be a lifelong learner.</p>
                <p>If you look through my portfolio, you will find that I have a playful style with lots of reach-out-and-grab-you imagery.</p>
                    {/* <p>A few facts about me:
                            <ul>
                            <li>Godzilla is considerd a Christmas movie in my household.</li>
                            <li>Nicolas Cage is my least favorite actor (and no "Leaving Las Vegas" will not change my mind).</li>
                            <li>I was voted "Most Fun" in my senior year of high school and will never let anyone forget it.
                                    </li>
                        </ul>
                    </p> */}
            </div>
        </div>
  );
}

export default AboutMe;