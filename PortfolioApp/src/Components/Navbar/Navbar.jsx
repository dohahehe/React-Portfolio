import { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom'
import { FaBars } from 'react-icons/fa6';

function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    // handlw scroll with debounce
    useEffect(() => {
        let timeoutId;
        
        const handleScroll = () => {
            clearTimeout(timeoutId);
            timeoutId = setTimeout(() => {
                setIsScrolled(window.scrollY > 0);
            }, 1);
        };

        window.addEventListener('scroll', handleScroll);
        
        return () => {
        clearTimeout(timeoutId);
        window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
    const handleClickOutside = (e) => {
        if (isMenuOpen && !e.target.closest('.nav-items') && !e.target.closest('.menu-toggle')) {
            setIsMenuOpen(false);
        }
    };
    
    const handleResize = () => {
        if (window.innerWidth >= 992) {
            setIsMenuOpen(false);
        }
    };

    document.addEventListener('click', handleClickOutside);
    window.addEventListener('resize', handleResize);
    
    return () => {
        document.removeEventListener('click', handleClickOutside);
        window.removeEventListener('resize', handleResize);
    };
    }, [isMenuOpen]);

     const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    }
    
    const closeMenu = () => {
        setIsMenuOpen(false);
    }
    
  return (
    <nav className={`navbar position-fixed w-100 ${isScrolled ? 'paddingY13' : 'paddingY29'}`}
         style={{
           transition: 'all .7s ease',
           zIndex: 1000
         }}>
        <div className="container">
            <div className="row w-100 justify-content-between align-items-center m-0 text-white">
                <span className="col-6 logo"><Link to="/" className='ns'>Start Framework</Link></span>

                {/* Mobile Menu Toggle Button */}
                    <button 
                        className="menu-toggle d-lg-none col-6 text-end p-0 bg-transparent border-0 text-white"
                        onClick={toggleMenu}
                        aria-label="Toggle menu"
                        style={{ fontSize: '24px' }}
                    >
                        <FaBars />
                    </button>
                

                 {/* Desktop Menu (visible on lg and up) */}
                <ul className="nav-items d-none d-lg-flex col-6 justify-content-end align-items-center gap-3 m-0">
                    <li>
                        <NavLink to="about">About</NavLink>
                    </li>
                    <li>
                        <NavLink to="portfolio">Portfolio</NavLink>
                    </li>
                    <li>
                        <NavLink to="contact">Contact</NavLink>
                    </li>
                </ul>
            </div>
             {/* Mobile Menu (visible when toggled on small screens) */}
            <div className={`mobile-menu-container ${isMenuOpen ? 'show' : ''}`}>
                <div className="container">
                    <ul className="mobile-nav-items d-flex flex-column gap-4 mt-2 p-0">
                        <li>
                            <NavLink to="about" onClick={closeMenu}>About</NavLink>
                        </li>
                        <li>
                            <NavLink to="portfolio" onClick={closeMenu}>Portfolio</NavLink>
                        </li>
                        <li>
                            <NavLink to="contact" onClick={closeMenu}>Contact</NavLink>
                        </li>
                    </ul>
                </div>
                
            </div>
        </div>
    </nav>
  )
}

export default Navbar