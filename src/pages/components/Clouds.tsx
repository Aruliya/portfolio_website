import "./cloud.css"
import cloud2 from "../../assets/parallax-imgs/cloud2.webp"
import cloud3 from "../../assets/parallax-imgs/cloud3.png"
import mount1 from "../../assets/parallax-imgs/mount1.webp"
import mount2 from "../../assets/parallax-imgs/mount2.webp"
import mount3 from "../../assets/parallax-imgs/mount3.webp"
import sky from "../../assets/parallax-imgs/sky.jpg"
import cloudMask from "../../assets/parallax-imgs/cloudMask.png"
import downarrow from "../../assets/whitearrow.png"
import {motion} from "framer-motion"
// import { useRef} from "react";
// import React, { useState } from 'react';

export default function Clouds() {
  
  const variants = {
    move: {
      
      translateY: "20px",
      scale: 1,

    }

  };

  return (
    <>
    <div className="parallax">

        <img className="sky" src={sky} alt= "sky"/>
        <img className="mount1" src={mount1} alt= "mount1"/>
        <img className="mount2" src={mount2} alt= "mount2"/>
        <img className="cloud2" src={cloud2} alt= "cloud2"/>
        <img className="mount3" src={mount3} alt= "mount3"/>
        <img className="cloud3" src={cloud3} alt= "cloud3"/>
        <img className="cloudMask" src={cloudMask} alt="cloudMask"/>
  
    </div>
    <div id="center-hero">
    <div id="hero">
      EXPLORE 
        <a href="#further">
          <motion.div id="image_container" variants={variants} whileHover="move" whileTap="tap">
            <motion.img 
                id="downarrow" 
                src={downarrow} 
                alt="white_down_arrow"  
                
            />
          </motion.div>
          </a>
        </div>
      </div>
      </>
   
  )
}