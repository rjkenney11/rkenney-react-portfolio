import React from "react";
import "./CarouselItem.css";
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from "../../assets/Images/AdventureCompanion.png";
import SecondImage from "../../assets/Images/Pokedex1.png";
import ThirdImage from "../../assets/Images/Pokedex2.png";
import FourImage from "../../assets/Images/VoxMachina.png";
import FithImage from "../../assets/Images/Bebbanburgers.png";
import SixImage from"../../assets/Images/DayPlanner.png";
import SevenImage from"../../assets/Images/TeamProfile.png";
import EighthImage from "../../assets/Images/DPad.png";
import NinthImage from "../../assets/Images/D-Pad2.png";

const SLIDE = [
    { alt:"First slide",title:'Adventure Companion',href:"https://bartok1945.github.io/adventure_companion/",src:`${FirstImage}`,Description:"A dynamic digital character sheet for Dungeons & Dragons", github: "https://github.com/Bartok1945/adventure_companion", state:" carousel-item active"},
    { alt:"Second slide",title:'D-Pad',href:"https://rocky-hollows-56755.herokuapp.com/",src:`${EighthImage}`,Description:"D-Pad is an app allows users to browse video games and organize their favorites with ease.", github: "https://github.com/Bartok1945/d_pad", state:"carousel-item"},
    { alt:"Third slide",title:'D-Pad (Part 2)',href:"https://rocky-hollows-56755.herokuapp.com/",src:`${NinthImage}`,Description:"D-Pad is an app allows users to browse video games and organize their favorites with ease.", github: "https://github.com/Bartok1945/d_pad", state:"carousel-item"},
    { alt:"Fourth slide",title:'Vox Machina Quiz',href:"https://rjkenney11.github.io/Vox-Machina-Quiz/",src:`${FourImage}`,Description:"A timed quiz to test your Critical Role knowledge.", github: "https://github.com/rjkenney11/Vox-Machina-Quiz", state:"carousel-item"},
    { alt:"Fith slide",title:'Bebbanburgers',href:"https://intense-scrubland-85974.herokuapp.com/",src:`${FithImage}`,Description:"an app for a fictional restaurant based on the Netflix show, The Last Kingdom.", github: "https://github.com/rjkenney11/Nice-Buns", state:"carousel-item"},
    { alt:"Six slide",title:'Pallet Town Pokedex',href:"https://vast-forest-11479.herokuapp.com/",src:`${SecondImage}`,Description:"Demonstrated the base utilization of CRUD by creating an app to organize and keep track of your Pokemon Cards.", github: "https://github.com/asheth22/Project2-Pokemon", state:"carousel-item"},
    { alt:"Seven slide",title:'Pallet Town Pokedex (Part 2)',href:"https://vast-forest-11479.herokuapp.com/",src:`${ThirdImage}`,Description:"Demonstrated the base utilization of CRUD by creating an app to organize and keep track of your Pokemon Cards.", github: "https://github.com/asheth22/Project2-Pokemon", state:"carousel-item"},
    { alt:"Eighth slide",title:'Team Profile Generator',href:"https://drive.google.com/file/d/1hc6GFoRuRzk71ktqlvzuC4_jPHDOjbIx/view",src:`${SevenImage}`,Description:"a Node.js command-line app to generate employee profile", github: "https://github.com/rjkenney11/Team-Profile-Generator", state:"carousel-item"},
    { alt:"Ninth slide",title:'Daily Work Planner',href:"https://rjkenney11.github.io/work_planner/",src:`${SixImage}`,Description:"a simple calendar application that allows a user to save events for each hour of the day." ,github: "https://github.com/rjkenney11/work_planner",state:"carousel-item"},
]

class CarouselItem extends React.Component {

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
                    <a href ={sl.href} className = "title">{sl.title}</a>
                    <p className = "description">{sl.Description}</p>
                    <a href ={sl.github} className = "fab fa-github"></a>
                </Carousel.Caption>
                </div>
            </Carousel.Item>
            ))}
        </Carousel>
        );
    }
}

export default CarouselItem;