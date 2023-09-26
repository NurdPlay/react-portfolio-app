import {useEffect, useState} from 'react';

function ScrollToTop() {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 50) {
        setScrollToTop(true)
      } else {
        setScrollToTop(false)
      }
    })
  }, [])

  const scrollUp = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    })
  }

  return (
    <div 
      style={{
        position: 'fixed',
        zIndex: '1000'
        }}>
      {scrollToTop && (
        <button
          onClick={scrollUp}
          style={{
            position: 'fixed',
            zIndex:'1000',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px',
            backgroundColor: '#333',
            color: 'White'
          }}
        >
        ^
        </button>
      )}
    </div>
  )
}

export default ScrollToTop;
