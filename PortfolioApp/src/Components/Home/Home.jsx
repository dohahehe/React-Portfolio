import avatar from '../../assets/Home-img/avataaars.svg';
import { FaStar } from 'react-icons/fa';

function Home() {
  return (
    <div className='home about section'>
      <div className="container">
        <div className="row d-flex flex-column justify-content-center align-items-center p-0 text-white">
          <div className="image mb-5">
            <img src={avatar} alt="avatar" />
          </div>
          <div className="title-component text-center">
            <h1 className='wu'>Start Framework</h1>
            <div className="star-underline w-100 ms-1 row d-flex align-items-center justify-content-center">
              <div className="ll">
              </div>
              <span className='star star-container p-0 m-0'><FaStar /></span>
              <div className="lr">
              </div>
            </div>
          </div>
          <span className='text-center mt-2'>Graphic Artist - Web Designer - Illustrator</span>
        </div>
        
      </div>
      
    </div>
  )
}

export default Home