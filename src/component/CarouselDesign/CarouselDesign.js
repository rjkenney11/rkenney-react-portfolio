import React from "react";
import "./CarouselDesign.css";
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from "../../assets/Images/Cicadon'tCare.png";
import SecondImage from "../../assets/Images/SnakeNBake.png";
import ThirdImage from "../../assets/Images/NautigirlLabel.png";
import FourthImage from "../../assets/Images/Sullis.png";
import FifthImage from "../../assets/Images/TadBelPdCst.jpg";


const SLIDE = [
    { alt:"First slide",pictitle:'Cicada Beer Can Label',src:`${FirstImage}`,Description:"Original drawing/design for local brewery. Created using Procreate & Canva.- May 2021", state:" carousel-item active"},
    { alt:"Third slide",pictitle:'Nauti Girl Beer Can Label',src:`${ThirdImage}`,Description:"Original drawing/design. Created using Procreate & Canva. Not available for use.",state:"carousel-item"},
    { alt:"Second slide",pictitle:'Medusa Beer Can Label',src:`${SecondImage}`,Description:"Original drawing/design available for use by breweries. Created using Procreate & Canva. Changes can be made upon request. Inquire by email.",state:"carousel-item"},
    { alt:"Fifth slide",pictitle:'Podcast Cover Photo',src:`${FifthImage}`,Description:"Original portrait drawings/design commissioned and created for Baltimore podcast using Procreate & Canva. June 2021",state:"carousel-item"},
    { alt:"Fourth slide",pictitle:'Recycling Company Logo',src:`${FourthImage}`,Description:"Original drawing/design commissioned and created for recycling company using Procreate. June 2021",state:"carousel-item"},
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