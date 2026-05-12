"use client";
import { Inbox, Link, Menu, MessageCircle, Share } from "lucide-react";
import { AnimatePresence, motion, spring } from "motion/react";
import { useState } from "react";

const ToolTipItems = [
  {
    title: "Links",
    icon: <Link />,
  },
  {
    title: "Inbox",
    icon: <Inbox />,
  },
  {
    title: "Share",
    icon: <Share />,
  },
  {
    title: "Menu",
    icon: <Menu />,
  },
];

export default function ToolTip() {
  const [currentState, setCurrentState] = useState<string | null>();
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [direction, setDirection] = useState(-1)
  return (
    <div>
      <div className="relative w-40 h-10 bg-black rounded-full flex items-center justify-between text-white cursor-pointer">
        
        {ToolTipItems.map((item, index) => (
          <div
            onMouseEnter={() => {
              if(index > currentIndex){
                setDirection(1)
              }
              else if(index < currentIndex){
                setDirection(-1)
              }
              setCurrentState(item.title);
              setCurrentIndex(index)
            }}
            onMouseLeave={() => {
              setCurrentState(null);
            }}
            key={item.title}
          >
            <div className="px-2">{item.icon}</div>

            {currentState == item.title ? (
              <motion.div
                layoutId="change"
                transition={{type: spring, duration:0.6, bounce: 0.1}}
                className="absolute -top-10 bg-black px-2 py-1 rounded-md"
              >

                <motion.div
                initial={{x: direction == 1 ? 25 : -25}}
                animate={{x:0}}

                transition={{type: spring, duration: 0.4, bounce:0}}>
                {item.title}
                </motion.div>
              </motion.div>
            ) : null}
          </div>
        ))}
      </div>
    </div>
  );
}
