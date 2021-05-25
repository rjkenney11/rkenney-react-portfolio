import React from "react";
import "./ContactMe.css";

function ContactMe() {
    return (
        <div className="jumbotron">
            <img src="https://user-images.githubusercontent.com/74163812/117556525-e402a300-b037-11eb-9a20-e169f72d4d6d.png"
                className="card-img-top" alt="Rachel-Banner"></img>
            <hr></hr>
            <hr></hr>
            <div className="container-text">
                <div className="jumbotron-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="links-display-4">Check Me Out</h1>
                            <hr className="my-4"></hr>
                            <a href="mailto:rjkenney220@gmail.com" type="button" className="btn btn-info contactBtn">Email Me!</a>
                            <br></br>
                            <br></br>
                            <a href="https://www.facebook.com/rachel.kenney.37/" type="button" className="btn btn-info contactBtn">Stalk Me On
                                    Facebook!</a>
                            <br></br>
                            <br></br>
                            <a href="https://www.linkedin.com/in/rachel-kenney220/" type="button"
                                className="btn btn-info contactBtn">Link with me on LinkedIn!</a>
                            <br></br>
                            <br></br>
                            <a href="https://github.com/rjkenney11" type="button"
                                className="btn btn-info contactBtn">GitHub: Where the Magic Happens</a>
                            <br></br>
                            <br></br>
                            <a href="https://github.com/rjkenney11/homework-4/files/5960275/RachelKenney2021.pdf" download="rachelResume" type="button"
                                className="btn btn-info contactBtn">A list of noteable accomplishments: My Resume</a>

                        </div>
                        <div className="col-md-6">
                            <img src="https://user-images.githubusercontent.com/74163812/113895077-9b389f80-9796-11eb-8e3b-e2fd0b48eac0.png"
                                className="advert" alt="Rachel-advert"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;