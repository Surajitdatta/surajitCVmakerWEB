import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import { NavLink } from 'react-router-dom';
const Service = () => {
  return (
    <>
    <div className="service">
      <div className='serviceContent'>
        <div className="empower">
          <div>
            <h3>Youth-Driven CV Creation Platform </h3>
          </div>
          <div className="line">
            <div className="circle"></div>
            <div className="circleLine"></div>
          </div>
          <div>
            <p>"Empower your professional journey effortlessly with our youth-driven CV creation platform. We understand the unique challenges and aspirations of the younger generation, which is why we've designed an intuitive and user-friendly interface to simplify the process of crafting exceptional resumes.

Our platform offers a diverse range of modern templates tailored to showcase your skills and experiences effectively. Whether you're a recent graduate, a student seeking internships, or an early-career professional, our expert guidance and innovative tools ensure that your resume stands out in today's competitive job market.

With a focus on simplicity and quality, we provide step-by-step guidance to help you highlight your strengths, achievements, and aspirations. Our goal is to empower you to create professional resumes that resonate with employers and recruiters.

Stay ahead in your career journey by utilizing our comprehensive suite of features, including customizable templates, industry-specific advice, and easy-to-follow formatting guidelines. Join thousands of satisfied users who have successfully crafted impactful resumes through our platform.

Empower yourself with the tools you need to make a lasting impression. Create your standout CV effortlessly and embark on your path to success with our dedicated youth-centric CV maker platform."





</p>
          </div>
        
        </div>
        <div className="goal">
          <div className="social">
            <img src="https://yesj.org/assets/images/h1.png" height="65px" width="67px"/>
          </div>
          <div className="socialContent">
            <h2>OUR GOAL</h2>
            <p>Unlock your potential with our commitment to your success. As part of our mission to empower individuals, we offer a complimentary CV creation service. Create a professional-grade resume for free and take the first step towards your dream career. No hidden charges, just a seamless experience tailored to elevate your professional profile. Join us in shaping your future today! <a href="#">Read more <AiOutlineArrowRight/></a></p>
          </div>

        </div>
        <div className="approach">
          <div className="social">
            <img src="https://yesj.org/assets/images/h2.png" height="65px" width="67px"/>
          </div>
          <div className="socialContent">
            <h2>OUR APPROACH</h2>
            <p>We are committed to evolving with the job market, regularly updating our features to reflect industry demands and technological advancements.<a href="#">Read more <AiOutlineArrowRight/></a></p>
          </div>

        </div>
        <div className="roots">
          <div className="social">
            <img src="https://yesj.org/assets/images/h3.png" height="65px" width="67px"/>
          </div>
          <div className="socialContent">
            <h2>OUR ROOTS</h2>
            <p>We embrace diversity and inclusivity, ensuring that our platform caters to individuals from various backgrounds, skill sets, and career stages. <a href="#">Read more <AiOutlineArrowRight/></a></p>
          </div>

        </div>
      </div>


      {/* image section */}
      <div className='serviceImage'>
        <NavLink to="/Template"><img src="https://i.pinimg.com/originals/5d/4c/4b/5d4c4b8ab77511a2ae6af6c862dcdc6a.png" width="90%" style={{margin:"auto"}} height="300px"  className="img1"/></NavLink>
        <NavLink to="/Template"><img src="https://cdn-images.zety.com/pages/modern_resume_templates_011.jpg" width="95%" height="300px" className="img2"/></NavLink>
      </div>

    </div>
      
    </>
  )
}

export default Service;