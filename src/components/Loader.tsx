import {motion} from 'framer-motion';
import { rectangleH, rectangleW } from '../utils/motion';

const Loader = ({setLoading}:{setLoading:(s:boolean) => void}) => {
  
  const waitLoading = () => {
    setTimeout(() => {
      setLoading(false);
    },1500)
  }

  return (
    <motion.div 
      className='h-screen w-screen relative overflow-hidden z-50'>
      <section className='flex justify-center space-x-8 h-full w-full absolute inset-0'>
        <motion.div className='w-[1px] bg-slate-300' variants={rectangleH} initial="hidden" animate={["show","moveXleft"]}></motion.div>
        <motion.div className='w-[1px] bg-slate-300' variants={rectangleH} initial="hidden" animate={["show","moveXright"]}></motion.div>
      </section>
      <section className='flex flex-col justify-center space-y-8 h-full w-full absolute inset-0'>
        <motion.div className='w-0 h-[1px] bg-slate-300' variants={rectangleW} initial="hidden" animate={["show","moveYup"]}></motion.div>
        <motion.div className='w-0 h-[1px] bg-slate-300' variants={rectangleW} initial="hidden" animate={["show","moveYdown"]} onAnimationComplete={waitLoading}></motion.div>
      </section>
    </motion.div>
  )
}

export default Loader