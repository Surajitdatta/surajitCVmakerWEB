import React from 'react'
import { NavLink } from 'react-router-dom';
import sur from "../img/sur.jpg";
const Banner = () => {
  return (
    <>
      <div className="banner">
        <div className="bannerInner">
            <div className="bannerImg">
                <img src={sur} height="400px" width="100%" />

            </div>
            <div className="bannerContent">
                <h2>Join Our Mission</h2>
                <p>Craft Your Success: Build Your Professional Story with Our CV Maker Platform!
Unleash Your Potential: Create Customized Resumes Effortlessly.
Unlock Opportunities: Stand Out in Your Career Journey Today!</p>
                <br/>
                <p><b>Come and immerse yourself to change your world.</b></p>
                <NavLink to="/Sign"><button className="btnn" style={{width:"200px", whiteSpace:"nowrap"}}>SIGN-UP NOW</button></NavLink><br/>
                {/* <i>Already sign up? <NavLink to="/SignIn">Sign in</NavLink></i> */}
            </div>
           
        </div>

      </div>
    </>
  )
}

export default Banner;