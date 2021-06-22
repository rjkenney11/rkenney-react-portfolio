import React from "react";
import "./CarouselDesign.css";
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from "../../assets/Images/Cicadon'tCare.png";
import SecondImage from "../../assets/Images/SnakeNBake.png";
import ThirdImage from "../../assets/Images/NautigirlLabel.png";

const SLIDE = [
    { alt:"First slide",pictitle:'Cicada Beer Can Label',src:`${FirstImage}`,Description:"Original drawing/design for local brewery- May 2021", state:" carousel-item active"},
    { alt:"Third slide",pictitle:'Nauti Girl Beer Can Label',src:`${ThirdImage}`,Description:"Original drawing/design. Not available for use.",state:"carousel-item"},
    { alt:"Second slide",pictitle:'Medusa Beer Can Label',src:`${SecondImage}`,Description:"Original drawing/design available for use by breweries. Changes can be made upon request. Inquire by email.",state:"carousel-item"},
]

class CarouselDesign extends React.Component {

    render(){
        return (
        <Carousel>
            {SLIDE.map(sl => (
            <Carousel.Item key={sl.alt} className = "my-4"interval={70000}>
                <img
                    className="d-block w-300 image align-items-start"
                    src={sl.src}
                    alt={sl.alt}
                />
                <div className = "captionDiv">
                <Carousel.Caption className = "caption" id ="#divInfo">
                    <p className = "pictitle">{sl.pictitle}</p>
                    <p className = "description">{sl.Description}</p>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            ))}
        </Carousel>
        );
    }
}

export default CarouselDesign;