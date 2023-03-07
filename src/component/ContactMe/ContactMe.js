import React from "react";
import "./ContactMe.css";

function ContactMe() {
    return (
        <div className="jumbotron">
            <img src="https://user-images.githubusercontent.com/74163812/223305712-4fc4dfe3-dc6e-4549-b418-59fc0473432a.png"
                className="card-img-top" alt="Rachel-Banner"></img>
            <div className="container-text">
                <div className="jumbotron-body">
                    <div className="row">
                        <div className="col-md-6">
                            <h1 className="links-display-4">Check Me Out</h1>
                            <hr className="my-4"></hr>
                            <a href="mailto:rjkenney220@gmail.com" type="button" className="btn btn-info contactBtn" id="contactBtn">Email Me!</a>
                            <br></br>
                            <br></br>
                            <a href="https://www.facebook.com/rachel.kenney.37/" type="button" className="btn btn-info contactBtn" id="contactBtn">Stalk Me On
                                    Facebook!</a>
                            <br></br>
                            <br></br>
                            <a href="https://www.linkedin.com/in/rachel-kenney220/" type="button"
                                className="btn btn-info contactBtn" id="contactBtn">Link with me on LinkedIn!</a>
                            <br></br>
                            <br></br>
                            <a href="https://github.com/rjkenney11" type="button"
                                className="btn btn-info contactBtn" id="contactBtn">GitHub: Where the Magic Happens</a>
                            <br></br>
                            <br></br>
                            <a href="https://github.com/rjkenney11/rkenney-react-portfolio/files/6548397/Rachel.Kenney.Resume.21.pdf" download="rachelResume" type="button"
                                className="btn btn-info contactBtn" id="contactBtn">A list of noteable accomplishments: My Resume</a>

                        </div>
                        <div className="col-md-6">
                            <img src="https://user-images.githubusercontent.com/74163812/222328688-e42af699-4eae-408f-8816-80e2a074dc9c.png"
                                className="advert" alt="Rachel-advert"></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ContactMe;