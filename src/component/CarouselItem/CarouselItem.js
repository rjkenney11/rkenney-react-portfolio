import React from "react";
import "./CarouselItem.css";
import Carousel from 'react-bootstrap/Carousel';
import FirstImage from "../../assets/Images/AdventureCompanion.png";
import SecondImage from "../../assets/Images/Pokedex1.png";
import ThirdImage from "../../assets/Images/poke2.png";
import FourImage from "../../assets/Images/VoxMachina.png";
import FithImage from "../../assets/Images/Bebbanburgers.png";
import SixImage from"../../assets/Images/DayPlanner.png";
import SevenImage from"../../assets/Images/TeamProfile.png";
import EighthImage from "../../assets/Images/dpadb.png";
import NinthImage from "../../assets/Images/D-Pad2.png";
import TenthImage from "../../assets/Images/dpadgif.gif";

const SLIDE = [
    { alt:"First slide",pictitle:'D-Pad (1)',src:`${EighthImage}`,Description:"I styled this application after a Nintendo Switch, to make browsing through games feel more like playing one. Games given the green “thumbs up” are added to the user’s playlist, while ones given the red “thumbs down” are rejected.", github: "https://github.com/Bartok1945/d_pad", state:"carousel-item active"},
    { alt:"Second slide",pictitle:'D-Pad (2)',src:`${NinthImage}`,Description:"Using React, JavaScript & CSS, I designed most of the front-end for this video game browsing app.", github: "https://github.com/Bartok1945/d_pad", state:"carousel-item"},
    { alt:"Third slide",pictitle:'D-Pad (3)',src:`${TenthImage}`,Description:"The sign in page features a GIF of multiple gaming-themed graphics to welcome users to a fun, dynamic experience.", github: "https://github.com/Bartok1945/d_pad", state:"carousel-item"},
    { alt:"Fourth slide",title:'Adventure Companion',href:"https://bartok1945.github.io/adventure_companion/",src:`${FirstImage}`,Description:"A dynamic digital character sheet for Dungeons & Dragons made using HTML, Javascript & CSS.", github: "https://github.com/Bartok1945/adventure_companion", state:" carousel-item"},
    { alt:"Fifth slide",title:'Vox Machina Quiz',href:"https://rjkenney11.github.io/Vox-Machina-Quiz/",src:`${FourImage}`,Description:"A timed quiz to test your Critical Role knowledge.", github: "https://github.com/rjkenney11/Vox-Machina-Quiz", state:"carousel-item"},
    { alt:"Six slide",pictitle:'Bebbanburgers',src:`${FithImage}`,Description:"An application to allow users to log the burgers they have eaten or want to eat from a fictional restaurant (based on the Netflix show The Last Kingdom in which the main character is titled Uhtred of Bebbanburg). Created with MySQL, Node, Express, Handlebars and a homemade ORM.", github: "https://github.com/rjkenney11/Nice-Buns", state:"carousel-item"},
    { alt:"Seven slide",pictitle:'Pallet Town Pokedex',src:`${SecondImage}`,Description:"Demonstrated the base utilization of CRUD by creating an app to organize and keep track of your Pokemon Cards.", github: "https://github.com/asheth22/Project2-Pokemon", state:"carousel-item"},
    { alt:"Eighth slide",pictitle:'Pallet Town Pokedex (Part 2)',src:`${ThirdImage}`,Description:"Demonstrated the base utilization of CRUD by creating an app to organize and keep track of your Pokemon Cards.", github: "https://github.com/asheth22/Project2-Pokemon", state:"carousel-item"},
    { alt:"Ninth slide",title:'Team Profile Generator',href:"https://drive.google.com/file/d/1hc6GFoRuRzk71ktqlvzuC4_jPHDOjbIx/view",src:`${SevenImage}`,Description:"a Node.js command-line app to generate employee profile", github: "https://github.com/rjkenney11/Team-Profile-Generator", state:"carousel-item"},
    { alt:"Tenth slide",title:'Daily Work Planner',href:"https://rjkenney11.github.io/work_planner/",src:`${SixImage}`,Description:"a simple calendar app that allows a user to save events for each hour of the day." ,github: "https://github.com/rjkenney11/work_planner",state:"carousel-item"},
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
                    <p className = "pictitle">{sl.pictitle}</p>
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