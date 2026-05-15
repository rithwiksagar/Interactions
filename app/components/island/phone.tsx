import { AnimatePresence, motion, spring } from "motion/react";
import { useEffect, useState } from "react";


export default function Phone(){
  const [count, setCount] = useState(0);

  useEffect(()=>{
    const interval = setInterval(()=>{
      setCount(c => c+1)
    },1000);

    return () => clearInterval(interval)
  },[])
  const variants = {
    initial: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
    animate: { opacity: 1, scale: 1, filter: "blur(0px)" },
    exit: { opacity: 0, scale: 0.25, filter: "blur(4px)" },
  };
    return <div className="flex h-7 items-center justify-between px-2.5 w-50 text-white">
        <AnimatePresence>
        <motion.div 
        variants={variants}
        initial= "initial"
        animate= "animate"
        exit="exit"
        className="flex gap-1 items-center">
        <motion.svg 
        initial={false}
        animate={{rotate: [-20,20,-10,10,0]}}
        
        xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" className="size-4 text-[#2FD057]"><path fill="currentColor" d="M19.95 21q-3.125 0-6.175-1.362t-5.55-3.863t-3.862-5.55T3 4.05q0-.45.3-.75t.75-.3H8.1q.35 0 .625.238t.325.562l.65 3.5q.05.4-.025.675T9.4 8.45L6.975 10.9q.5.925 1.187 1.787t1.513 1.663q.775.775 1.625 1.438T13.1 17l2.35-2.35q.225-.225.588-.337t.712-.063l3.45.7q.35.1.575.363T21 15.9v4.05q0 .45-.3.75t-.75.3"></path></motion.svg>
        <span className="text-[#2FD057] text-[14px] font-medium">0:{count.toString().padStart(2,"0")}</span>
        </motion.div>
        </AnimatePresence>

        <div>
            <PhoneBars />
        </div>
    </div>
}

function PhoneBars() {
  const bars = new Array(16).fill(0).map((_, idx) => idx);

  return (
    <div className="flex items-center gap-0.5">
      {bars.map((bar, idx) => {
        return (
          <motion.div
            key={idx}
            animate={{
              scaleY: [0.3, 1, 0.5, 0.8, 0.2],
            }}
          transition={{
            duration: 0.8,
            repeat: Infinity,
            delay: Math.random() * 0.5,
            ease: "easeInOut",
          }}
            style={{
              transformOrigin: "center",
            }}
            className="w-[2px] h-4 bg-[#2FD057] rounded-full"
          />
        );
      })}
    </div>
  );
}