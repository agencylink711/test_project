'use client'
import React, { useEffect, useState } from 'react'
import { motion} from 'framer-motion'
import Image from 'next/image';
import { staggerContainer,slideIn } from '@/font_utils/motion';
const TopBtn = () => {
    const [isVisible, setIsVisible] = useState(false);

    const goToBtn = () => {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    };
  
    const listenToScroll = () => {
      let heightToHidden = 20;
      const winScroll =
        document.body.scrollTop || document.documentElement.scrollTop;
  
      if (winScroll > heightToHidden) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
  
    useEffect(() => {
      window.addEventListener("scroll", listenToScroll);
      return () => window.removeEventListener("scroll", listenToScroll);
    }, []);
  
    return (
    <>
        {isVisible && (
        //  top-[96%] 
             <motion.div variants={staggerContainer}
             initial="hidden"
             whileInView="show"
             viewport={{ once: false, amount: 0.25 }}  className="flex  justify-end overflow-hidden fixed  top-[90%] px-3   transition  delay-500  z-[99999!important]  right-0 " onClick={goToBtn}>
            <motion.div variants={slideIn('right', 'tween', 0.2, 1)}  className="border border-[#fec63f] bg-[#fec63f] ml-auto  top-btn  py-2 px-2 rounded-md ">
                <Image src={'/images/topbtn.png'} alt='arrow' width={20} height={20} />         

               </motion.div>
          </motion.div>
         
        )}
     </>
    );
  };

export default TopBtn

