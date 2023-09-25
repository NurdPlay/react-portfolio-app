import React, {useState, useEffect} from "react";
import {FaAngleDoubleUp} from 'react-icons/fa';

const ScrollToTop = () => {
    const [showScrollToTopButton, setShowScrollToTopButton] = useState(false);
    
    useEffect(() => {
        window.addEventListener('scroll', () => {
           if(window.scrollY > 300 ){
            setShowScrollToTopButton(true) 
           } else{
            setShowScrollToTopButton(false)
           }
        })
       
    }, [])
  
    const scrollTop = () => {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
    return (
        <div>
     {showScrollToTopButton && <FaAngleDoubleUp className="top-btn-position" onClick={scrollTop} />}
        </div>
  
  )
}
}
export default ScrollToTop;