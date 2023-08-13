import { motion } from 'framer-motion';
import images from './images';

function App() {
  return (
    <div className="App">
      <motion.div className="carousel">
        <motion.div className="carousel-inner">
          {images.map((img, index) => {
            return (
              <motion.div className="item">
                <img src={img} alt={`slider item ${index}`} />
              </motion.div>
            );
          })}
        </motion.div>
      </motion.div>
    </div>
  );
}

export default App;
