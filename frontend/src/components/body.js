import '../App.css';
import christmasPicture from "../images/share_light_christmas.png";
import christmasDevo from "../images/christmas_devotional.png";
import helping from "../images/helping_poor_distressed.png";
import watchChristChild from "../images/watch_christ_child.png";
import React from "react";
import { StyleSheet, Text, View, Image } from "react";

function Body() {
    return(
        <div className="body">
        <div className="centerStrip">
        <div className="topPhoto">
            <a href="https://www.churchofjesuschrist.org/comeuntochrist"><img src={christmasPicture}></img></a>
            </div>
            <div className="secondRowPhotos">
            <div className="group1">
            <a href="https://newsroom.churchofjesuschrist.org/article/2022-first-presidency-christmas-devotional-summary"><img src={christmasDevo}></img></a>
            </div>
            <div className="group2">
            <div className="top">
            <a href="https://www.churchofjesuschrist.org/study/general-conference/2022/10/18oaks?lang=eng"><img src={helping}></img></a>
            </div>
            <div className="bottom">
            <a href="https://www.youtube.com/watch?v=yXWoKi5x3lw"><img src={watchChristChild}></img></a>
            </div>
            </div>
            </div>
          </div>
        </div>
    );
}



export default Body;