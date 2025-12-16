import { FaTwitter, FaLinkedinIn, FaFacebook } from "react-icons/fa";
import { FaGlobe } from "react-icons/fa6";


function Footer() {
  return (
    <footer>
      <div className="p-0 text-white">
        <div className="ft">
          <div className="container">
            <div className="row gy-5">
              <div className="col-sm-4 d-flex flex-column text-center">
            <h1 className='wu title'>Location</h1>
            <span className='mb-3'>2215 John Daniel Drive</span>
            <span>Clark, MO 65243</span>
          </div>
          <div className="col-sm-4 d-flex flex-column align-items-center text-center">
            <h1 className='wu title'>Around the Web</h1>
            <div className="icons m-0 gap-0 row w-50 d-flex justify-content-center align-items-center">
              <div className="col-3 p-0 text-center d-flex justify-content-center gy-3">
                <div className="icon-item text-center">
                  <FaFacebook />
                </div>
              </div>
              <div className="col-3 p-0 text-center d-flex justify-content-center gy-3">
                <div className="icon-item text-center">
                  <FaTwitter />
                </div>
              </div>
              <div className="col-3 p-0 text-center d-flex justify-content-center gy-3">
                <div className="icon-item text-center">
                  <FaLinkedinIn />
                </div>
              </div>
              <div className="col-3 p-0 text-center d-flex justify-content-center gy-3">
                <div className="icon-item text-center">
                <FaGlobe />
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-4 d-flex flex-column text-center">
            <h1 className='wu title'>About Freelancer</h1>
            <span className="freelancer">Freelance is a free to use, licensed Bootstrap theme created by Route</span>
          </div>
            </div>
          </div>
          
        </div>
        <div className="fb">
          <div className="w-100 row align-items-center py-4">
            <div className="col-12 text-center">
              <span>Copyright © Your Website 2021</span>
            </div>
          </div>
          
        </div>
      </div>
    </footer>
  )
}

export default Footer