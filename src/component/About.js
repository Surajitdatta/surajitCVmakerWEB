import "./About.css";
import sur from "../img/sur.jpg";
import React, {useState, useEffect} from 'react';
import profile from "../img/profile.jpg";
import { BsLinkedin } from "react-icons/bs";
import { GoMail  } from "react-icons/go";
import { SiCarrd } from "react-icons/si";
import { FaConnectdevelop } from "react-icons/fa6";
import { GrVmMaintenance } from "react-icons/gr";
const About = () => {
  return (
    <div className="aboutMain">
      <div className="about">
        <div className="aboutProfile">
          <img src={profile} style={{borderRadius:"50%"}} height="200px" width="200px" />
        </div>
        <div className="aboutProfileContent">
          <div className="myContent">
            <i>Front End Developer</i>
            <h2>SURAJIT DATTA</h2>
            <p>"Hello, I'm Surajit Datta, the mind behind our innovative CV maker website. As a skilled front-end developer specializing in React.js, I've crafted this platform to empower individuals in shaping their professional narratives effortlessly.</p>


          </div>
          <div className="aboutBtnGroup">
          <a href="https://www.linkedin.com/in/surajit-datta-751600155"><BsLinkedin/></a>
          
          <a href="mailto:bubuldatta91314@gmail.com"><GoMail /></a>
           

          </div>

        </div>

      </div>
      <div className="incentive">
        <h3>What I Do</h3><br/>
        <div className="do">
          <div>
            <SiCarrd className="aboutLogo"/>

          </div>
          <div>
            <p>As the creator of our cutting-edge CV maker website, I specialize in crafting user-friendly platforms that simplify the resume creation process. I leverage React.js to ensure a seamless and intuitive experience.</p>
          </div>
          

        </div>

        <div className="do">
          <div>
            <FaConnectdevelop className="aboutLogo"/>

          </div>
          <div>
            <p>With proficiency in React.js, I excel in building responsive and visually appealing user interfaces. I implement modern design principles and techniques to create engaging web experiences.</p>
          </div>
          

        </div>

        <div className="do">
          <div>
            <GrVmMaintenance className="aboutLogo"/>

          </div>
          <div>
            <p>Beyond development, I provide ongoing support and maintenance services, ensuring the platform remains robust, secure, and functional for an exceptional user experience."</p>
          </div>
          

        </div>

      </div>
    </div>
  )
}

export default About