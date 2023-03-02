import React from "react";
// import { Link } from "react-router-dom";

import "./AboutMe.css";

function AboutMe() {
  return (
        <div className="jumbotron">
            <img className="card-img-top" src="https://user-images.githubusercontent.com/74163812/123679757-e1d9eb00-d815-11eb-82ec-7f1cc84738f1.png" alt="Rachel-Banner"></img>
             <hr></hr>
            <hr></hr>
            <div className="container-text">
                <h1 className="display-4">About Me</h1>
                <img className="RachelKenney"
                    src="https://user-images.githubusercontent.com/74163812/112669528-34ca8d80-8e36-11eb-886f-cecbebc1627e.png"
                    ALIGN="right" alt="a girl with red hair"></img>
                <p className="lead">Hello and مرحبا !</p>
                <p>My name is Rachel Kenney and I am considered by many to be the greatest Bop-It player of our time. </p>
                <p>I graduated from the University of Maryland, College Park in 2015 with a Bachelor of Arts in Arabic Studies, but have always had a passion for design.</p> 
                <p>I was recently given the opportunity to pursue a Full-Stack Web Development certification through Johns Hopkins University and successfully completed the course with an "A" average in May of 2021. I am eagerly looking forward to pursuing a career as a Full-Stack Web Developer as it scratches my creative itch, keeps my mind engaged and encourages me to be a lifelong learner.</p>
                <p>If you look through my portfolio, you will find that I have a knack for creating fun user interactions, often incorporating my own designs or illustrations in the process.</p>
                    <p>A few facts about me:
                            <ul>
                            <li>Godzilla is considerd a Christmas movie in my household.</li>
                            <li>Nicolas Cage is my least favorite actor (and no "Leaving Las Vegas" will not change my mind).</li>
                            <li>I was voted "Most Fun" in my senior year of high school and will never let anyone forget it.
                                    </li>
                        </ul>
                    </p>
            </div>
        </div>
  );
}

export default AboutMe;