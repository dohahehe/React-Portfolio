import {useEffect} from 'react'
import Navbar from '../Navbar/Navbar'
import { Outlet, useLocation } from 'react-router-dom'
import Footer from '../Footer/Footer'

function Layout() {
  const location = useLocation();

  useEffect(() => {
    const seg = location.pathname === '/' ? '' : location.pathname.split('/')[1] || '';    
    let pageName = seg ? seg.charAt(0).toUpperCase() + seg.slice(1) : 'Home';
    
    const validPages = ['Home', 'About', 'Portfolio', 'Contact'];
    
    if (!validPages.includes(pageName)) {
      pageName = '404';
    }
    
    document.title = pageName;

  }, [location.pathname]);



  return (
    <>
        <Navbar />
        <main className='main-content'>
          <Outlet />
        </main>
        <Footer />
    </>
  )
}

export default Layout