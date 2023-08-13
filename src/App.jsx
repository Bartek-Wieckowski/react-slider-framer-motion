import { motion } from 'framer-motion';
import images from './images';

function App() {
  console.log(images);
  return (
    <div className="App">
      <motion.div className="carousel">
        <motion.div className="carousel-inner"></motion.div>
      </motion.div>
    </div>
  );
}

export default App;
