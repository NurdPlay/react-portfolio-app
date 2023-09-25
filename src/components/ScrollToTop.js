import {useEffect, useState} from 'react';

function ScrollToTop() {
  const [scrollToTop, setScrollToTop] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', () => {
      if(window.scrollY > 100) {
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
    <div>
      {scrollToTop && (
        <button
          onClick={scrollUp}
          style={{
            position: 'fixed',
            bottom: '50px',
            right: '50px',
            height: '50px',
            width: '50px',
            fontSize: '50px'
          }}
        >
        ^
        </button>
      )}
    </div>
  )
}

export default ScrollToTop;
