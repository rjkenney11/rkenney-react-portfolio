import React from "react";
import "./MyPortfolio.css";
import CarouselItem from "../CarouselItem/CarouselItem";


class MyPortfolio extends React.Component {
   
    render() {
        return (
            <div className="jumbotron">
                <img src="https://user-images.githubusercontent.com/74163812/112648748-312c0c00-8e20-11eb-8442-dcd8e707143c.png"
                    className="card-img-top" alt="Rachel-Banner"></img>
                    <hr></hr>
                    <hr></hr>
                    <div className="container-text">
                        <div className="jumbotron-body">
                            <CarouselItem />
                        </div>
                    </div>
            </div>
    )}
}

export default MyPortfolio;