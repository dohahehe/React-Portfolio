import React from 'react'
import { FaStar } from "react-icons/fa";

function About() {
  return (
    <div className='about section d-flex flex-column justify-content-center align-items-center w-100 pt-3'>
      <div className="container">
        <div className="title-component text-center">
          <h1 className='wu'>About Component</h1>
          <div className="star-underline w-100 ms-1 row d-flex align-items-center justify-content-center">
            <div className="ll">
            </div>
            <span className='star star-container p-0 m-0'><FaStar /></span>
            <div className="lr">
            </div>
          </div>
        </div>
        <div className="row d-flex justify-content-center g-0 w-100 text-white mt-2">
          <div className="col-md-6 ps-md-4">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
          <div className="col-md-6 ps-md-3">
            <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About