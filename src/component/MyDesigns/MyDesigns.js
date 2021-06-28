import React from "react";
import "./MyDesigns.css";
import CarouselDesign from "../CarouselDesign/CarouselDesign";


class MyDesigns extends React.Component {
   
    render() {
        return (
            <div className="jumbotron">
                <img src="https://user-images.githubusercontent.com/74163812/123679757-e1d9eb00-d815-11eb-82ec-7f1cc84738f1.png"
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