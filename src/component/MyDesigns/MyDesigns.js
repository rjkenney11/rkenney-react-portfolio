import React from "react";
import "./MyDesigns.css";
import CarouselDesign from "../CarouselDesign/CarouselDesign";


class MyDesigns extends React.Component {
   
    render() {
        return (
            <div className="jumbotron">
                <img src="https://user-images.githubusercontent.com/74163812/117556525-e402a300-b037-11eb-9a20-e169f72d4d6d.png"
                    className="card-img-top" alt="Rachel-Banner"></img>
                    <hr></hr>
                    <hr></hr>
                    <div className="container-text">
                        <div className="jumbotron-body">
                            <CarouselDesign />
                        </div>
                    </div>
            </div>
    )}
}

export default MyDesigns;