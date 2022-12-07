import '../App.css';
import christmasPicture from "../images/share_light_christmas.png";
import React from "react";
import { StyleSheet, Text, View, Image } from "react";

function Body() {
    return(
        <div className="body">
        <div className="centerStrip">
            <img src={christmasPicture}></img>
          </div>
        </div>
    );
}



export default Body;