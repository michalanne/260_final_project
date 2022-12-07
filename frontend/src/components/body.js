import '../App.css';
import christmasPicture from "../images/share_light_christmas.png";
import christmasDevo from "../images/christmas_devotional.png";
import helping from "../images/helping_poor_distressed.png";
import watchChristChild from "../images/watch_christ_child.png";
import tabernacle from "../images/tabernacle_choir.png";
import messiah from "../images/the_promised_messiah.png";
import thankful from "../images/thankful_for.png";
import gratitude from "../images/gratitude_faith.png";
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
            <div className="ind">
            <a href="https://www.churchofjesuschrist.org/study/general-conference/2022/10/18oaks?lang=eng"><img src={helping}></img></a>
            </div>
            <div className="ind">
            <a href="https://www.youtube.com/watch?v=yXWoKi5x3lw"><img src={watchChristChild}></img></a>
            </div>
            </div>
            </div>
            <div className="secondRowPhotos">
            <div className="group1">
            <div className="ind">
            <a href="https://www.thetabernaclechoir.org/events/2022-pbs-and-byutv-christmas-tv-specials.html"><img src={tabernacle}></img></a>
            </div>
            <div className="ind">
            <a href="https://www.churchofjesuschrist.org/study/liahona/2022/12/04-the-promised-messiah?lang=eng"><img src={messiah}></img></a>
            </div>
            </div>
            <div className="group2row">
            <div className="ind">
            <a href="https://www.churchofjesuschrist.org/media/video/2009-11-0039-in-the-spirit-of-thanksgiving?lang=eng&alang=eng"><img src={thankful}></img></a>
            </div>
            <div className="ind">
            <a href="https://www.churchofjesuschrist.org/study/general-conference/2014/04/grateful-in-any-circumstances?lang=eng"><img src={gratitude}></img></a>
            </div>
            </div>
            </div>
          </div>
        </div>
    );
}



export default Body;