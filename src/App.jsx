import { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import images from './images';

function App() {
  const [width, setWidth] = useState(0);
  const carousel = useRef();

  useEffect(() => {
    setWidth(carousel.current.scrollWidth - carousel.current.offsetWidth);
  }, []);
  return (
    <div className="App">
      <motion.div
        ref={carousel}
        className="carousel"
        whileTap={{ cursor: 'grabbing' }}
      >
        <motion.div
          drag="x"
          dragConstraints={{ right: 0, left: -width }}
          className="carousel-inner"
        >
          {images.map((img, index) => {
            return (
              <motion.div className="item">
                <img src={img} alt={`slider item ${index}`} key={index} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
