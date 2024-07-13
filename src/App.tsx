import { useState } from "react";
import {motion} from 'framer-motion';
import Loader from "./components/Loader";
import { clipPath1, clipPath2, clipPath3, clipPath4, marquee } from "./utils/motion";
import Navbar from "./components/Navbar";

const App = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true)

  return (
    <div>
      {
        isLoading ? (
          <Loader setLoading={setIsLoading} />
        ) : (
          <div className="h-screen w-screen overflow-hidden relative">
            <Navbar />
            <GridRecs />
            <LineRecs />
            <div className="absolute inset-0 z-20 h-full w-full flex items-center">
              <motion.h1 variants={marquee} initial="hidden" animate="show" className="text-[100px] font-semibold text-pink-700 tracking-tight cursor-pointer">BEYOND IMAGINATION - //(:)//</motion.h1>
            </div>
            <motion.img 
              src="/coat.webp" 
              alt="coat image" 
              className="absolute inset-0 filter " 
              initial={{scale:1.1}} 
              animate={{scale:1}} 
              transition={{type:"tween",ease:"easeInOut",duration:0.6,delay:0.2}} />
          </div>
        )
      }
    </div>
  )
}

export default App

export const GridRecs = () => {
  return (
    <section className="grid grid-cols-6 grid-row-6 w-full h-full relative z-20">            
      <motion.div className="bg-[#0e0e0e] col-span-1" variants={clipPath3} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] col-span-4 col-start-2" variants={clipPath4} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] col-span-1" variants={clipPath3} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] row-span-4" variants={clipPath2} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] col-span-2 row-span-4" variants={clipPath1} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] row-span-4 col-span-2" variants={clipPath2} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] col-span-1 row-span-4" variants={clipPath1} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] col-span-1" variants={clipPath4} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] col-span-4" variants={clipPath3} initial="hidden" animate="show"></motion.div>
      <motion.div className="bg-[#0e0e0e] col-span-1" variants={clipPath4} initial="hidden" animate="show"></motion.div>
    </section>
  )
}

export const LineRecs = () => {
  return (
    <div className="absolute z-10 inset-0 h-full w-full">
      <section className='flex justify-center space-x-8 absolute inset-0'>
        <div className='w-[1px] h-full bg-slate-300 translate-x-[-440px]' ></div>
        <div className='w-[1px] h-full bg-slate-300 translate-x-[440px]' ></div>
      </section>
      <section className='flex flex-col justify-center space-y-8 absolute inset-0'>
        <div className='w-full h-[1px] bg-slate-300 translate-y-[-202px]' ></div>
        <div className='w-full h-[1px] bg-slate-300 translate-y-[202px]' ></div>
      </section>
    </div>
  )
}