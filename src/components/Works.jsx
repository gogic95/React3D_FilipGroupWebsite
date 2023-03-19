import Tilt from 'react-parallax-tilt';
import { motion } from 'framer-motion';  
import { styles } from '../styles';
import { github } from '../assets';
import { SectionWrapper } from '../higherOrderComponent';
import { projects } from '../constants';
import { fadeIn, textVariant } from '../utils/motion';


const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
          <p className={`${styles.sectionSubText}`}>Whar are we currently doing</p>
          <h2 className={`${styles.sectionHeadText}`}>Our <span className='text-[#d12c2f]'>projects</span></h2>
      </motion.div>
    
    
    </>
  )
}

export default SectionWrapper(Works,"")