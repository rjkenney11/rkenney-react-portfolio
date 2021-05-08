import React from "react";
import "./ContactMe.css";

function ContactMe(){
    return (
        <div className="jumbotron">
            <img src="https://user-images.githubusercontent.com/74163812/112648748-312c0c00-8e20-11eb-8442-dcd8e707143c.png"
                className="card-img-top" alt="Rachel-Banner"></img>
            <hr></hr>
            <hr></hr>
            <div className="container-text">
                <div className="jumbotron-body">
                    <div className="containerForm.transbox">
                        <div className="container">
                            <div className="row">
                                <div className="col-md-6">
                                    <h1 className="links-display-4">Check Me Out</h1>
                                    <hr className="my-4"></hr>
                                    <a href="mailto:rjkenney11@gmail.com" type="button" className="btn btn-info">Email Me!</a>
                                    <br></br>
                                    <br></br>
                                    <a href="https://www.facebook.com/rachel.kenney.37/" type="button" className="btn btn-info">Stalk Me On
                                    Facebook!</a>
                                    <br></br>
                                    <br></br>
                                    <a href="https://www.linkedin.com/in/rachel-kenney-98b03b156/" type="button"
                                        className="btn btn-info">Click here to be unimpressed!</a>
                                    <br></br>
                                    <br></br>
                                    <a href="https://github.com/rjkenney11" type="button"
                                        className="btn btn-info">GitHub: Where the Magic Happens</a>
                                    <br></br>
                                    <br></br>
                                    <a href="https://github.com/rjkenney11/homework-4/files/5960275/RachelKenney2021.pdf" download="rachelResume" type="button"
                                        className="btn btn-info">A list of noteable accomplishments: My Resume</a>

                                </div>
                                <div>
                                    <img src="https://user-images.githubusercontent.com/74163812/113895077-9b389f80-9796-11eb-8e3b-e2fd0b48eac0.png"
                                        className="advert" alt="Rachel-advert"></img>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
  )
}

export default ContactMe;