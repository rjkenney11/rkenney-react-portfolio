import React from "react";
// import { Link } from "react-router-dom";

import "./AboutMe.css";

function AboutMe() {
    return (
        <div className="jumbotron">
            <img src="https://user-images.githubusercontent.com/74163812/112648748-312c0c00-8e20-11eb-8442-dcd8e707143c.png"
                className="card-img-top" alt="Rachel-Banner"></img>
             <hr></hr>
            <hr></hr>
            <div className="container-text">
                <h1 className="display-4">About Me</h1>
                <img className="RachelKenney"
                    src="https://user-images.githubusercontent.com/74163812/112669528-34ca8d80-8e36-11eb-886f-cecbebc1627e.png"
                    ALIGN="right" alt="a girl with red hair"></img>
                <p className="lead">Hello and مرحبا !</p>
                <p>My name is Rachel Kenney and I am considered by many to be the greatest bop-it player of our time. </p>
                <p>I like long walks on the beach, playing Dungeons and Dragons and yelling at my cats to get off the
                counter.</p>
                        <p>I graduated from the University of Maryland, College Park in 2015 with a degree in Arabic Studies, but have always had a passion for design. After being given the opportunity to pursue a UX/UI Design certification through John's Hopkins University, I feel like I have finally found my path.</p>
                    <p>A few facts:
                            <ul>
                            <li>Godzilla is a Christmas movie.</li>
                            <li>Nicolas Cage is the absolute worst (and no "Leaving Las Vegas" will not change my mind).</li>
                            <li>I was voted "Most Fun" in my senior year of high school and will never let anyone forget it.
                                    </li>
                        </ul>
                    </p>
            </div>
        </div>
  );
}

export default AboutMe;