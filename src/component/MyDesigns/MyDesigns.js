import React from "react";
import "./MyDesigns.css";
import CarouselDesign from "../CarouselDesign/CarouselDesign";


class MyDesigns extends React.Component {
   
    render() {
        return (
            <div className="jumbotron">
                <img src="https://user-images.githubusercontent.com/74163812/223305712-4fc4dfe3-dc6e-4549-b418-59fc0473432a.png"
                    className="card-img-top" alt="Rachel-Banner"></img>
                    <div className="container-text">
                        <div className="jumbotron-body">
                            <CarouselDesign />
                        </div>
                    </div>
            </div>
    )}
}

export default MyDesigns;