import { FaStar } from 'react-icons/fa';
import { FaPlus } from "react-icons/fa6";
import { useState } from 'react';
import portfolio1 from '../../assets/Portfolio-img/poert1.png';
import portfolio2 from '../../assets/Portfolio-img/port2.png';
import portfolio3 from '../../assets/Portfolio-img/port3.png'; 

function Portfolio() {
  const [selectedImage, setSelectedImage] = useState(null);

  const portfolioItems = [
    { id: 1, image: portfolio1 },
    { id: 2, image: portfolio2 },
    { id: 3, image: portfolio3 },
    { id: 4, image: portfolio1 },
    { id: 5, image: portfolio2 },
    { id: 6, image: portfolio3 },
  ];

  const handleImageClick = (image) => {
    setSelectedImage(image);
    // console.log(image,'selected');
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <div className='portfolio section'>
      <div className="container">
        <div className="title-component pt-4">
          <h1 className='wu'>Portfolio Component</h1>
          <div className="star-underline ms-1 w-100 row d-flex align-items-center justify-content-center">
            <div className="ll">
            </div>
            <span className='star star-container p-0 m-0'><FaStar /></span>
            <div className="lr">
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row d-flex justify-content-center align-items-center gy-5 gx-4 pt-2">
          {portfolioItems.map((item) => (
             <div className="col-lg-4 col-md-6" key={item.id}>
              <div className="portfolio-item"
              onClick={() => handleImageClick(item.image)}>
                <div className="overlay d-flex justify-content-center align-items-center">
                  <div className="overlay-text d-flex justify-content-center align-items-center">
                    <FaPlus />
                  </div>
                </div>
                <img src={item.image} className='port-img' alt={`Portfolio ${item.id}`} />
              </div>
            </div>
          ))}

          {/* overlay for selected image */}
          {selectedImage && (
            <div 
              className="modal-overlay bg-primary bg-opacity-25 m-0"
              onClick={closeModal}
            >
              <div 
                className="modal-content"
                onClick={(e) => e.stopPropagation()}
                style={{
                  maxWidth: '38.4%',
                  position: 'relative',
                }}
              >
                <img 
                  src={selectedImage} 
                  alt="Full size portfolio" 
                  style={{
                    width: '100%',
                    height: 'auto',
                  }}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Portfolio