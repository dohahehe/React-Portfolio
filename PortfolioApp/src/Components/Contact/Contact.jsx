import { useState } from 'react'
import { FaStar } from "react-icons/fa";

function Contact() {
  const handleSubmit = (e) => {
    
    e.preventDefault(); 
    const form = e.currentTarget; // the <form>
  const name = form.elements.name.value;
  const age = form.elements.age.value;
  const email = form.elements.email.value;
  const password = form.elements.password.value;
  console.log("Form clicked", name, age, email, password);
  };
  
  return (
    <div className='contact section'>
      <div className="container">
        <div className="title-component mt-0">
          <h1 className='wu'>Contact Section</h1>
          <div className="star-underline ms-1 w-100 row d-flex align-items-center justify-content-center">
            <div className="ll">
            </div>
            <span className='star star-container p-0 m-0'><FaStar /></span>
            <div className="lr">
            </div>
          </div>
        </div>
        <div className="form-row row d-flex justify-content-center align-items-center px-5 m-auto">
          <div className="col-md-8 col-12 p-0">
            <form onSubmit={handleSubmit}>
              <div className="input-group">
                <input type="text" className='form-control input-bottom-border' id="name" placeholder='userName' required />
                <label htmlFor="name">userName :</label>
              </div>
              <div className="input-group">
                <input type="text" className='form-control input-bottom-border' id="age" placeholder='userAge' required />
                <label htmlFor="name">userAge :</label>
              </div>
              <div className="input-group">
                <input type="email" className='form-control input-bottom-border' id="email" placeholder='userEmail' required />
                <label htmlFor="name">userEmail :</label>
              </div>
              <div className="input-group">
                <input type="text" className='form-control input-bottom-border' id="password" placeholder='userPassword' required />
                <label htmlFor="name">userPassword :</label>
              </div>
              <button type="submit" className="btn">send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact