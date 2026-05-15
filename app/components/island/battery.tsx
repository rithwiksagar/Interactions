import { AnimatePresence, motion, spring } from "motion/react"



export default function Battery(){
    return <div
        className="relative flex h-7 items-center justify-between px-2.5 w-50 text-white">
        <AnimatePresence>
        <motion.div 
        initial={{opacity:0, filter: "blur(4px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        exit={{opacity:0, filter: "blur(4px)"}}
        className="text-[12.5px]">
            Low Battery
        </motion.div>
        </AnimatePresence>
        <AnimatePresence>
        <motion.div
        initial={{opacity:0, filter: "blur(4px)"}}
        animate={{opacity:1, filter: "blur(0px)"}}
        exit={{opacity:0, filter: "blur(4px)"}}        
        className="flex items-center gap-0.5">
        <span className="text-[12.5px] text-red-400 tracking-wider">20%</span>
        <div className="relative ml-1 h-[10px] w-[20px] overflow-hidden rounded-[3px] bg-[#e2857c]/50">
        <motion.div 
        initial={{width: "100%"}}
        animate={{width: "20%"}} 
        transition={{type: spring, bounce: 0.35, duration:1, delay:0.6,}}
        className="h-full bg-[#E65B4F]"></motion.div>
        </div>
        </motion.div>
        </AnimatePresence>

    </div>
}