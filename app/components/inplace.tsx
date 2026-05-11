"use client";

import { ArrowDownToLine, ChevronRight, Copy, Folder, Send, Sparkles, Trash } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { ReactNode, useRef, useState } from "react";
import useMeasure from "react-use-measure";

type menuItemsType = {
  title: string;
  subMenuItems?: string[];
  icon : ReactNode
  chevron? : ReactNode;
};

const menuItems: menuItemsType[] = [
  {
    title: "Add to favorites",
    icon: <Sparkles className="size-4"/>
  },
  {
    title: "Export As",
    subMenuItems: ["Web Page", "Markdown", "Plain Text","HTML"],
    icon: <ArrowDownToLine className="size-4"/>,
    chevron : <ChevronRight className="size-3.5"/>
  },
  {
    title: "Share To",
    subMenuItems: ["Slack", "Email", "X Post"],
    icon: <Send className="size-4"/>,
    chevron : <ChevronRight className="size-3.5"/>
  },
  {
    title: "Move To",
    subMenuItems: ["Product Docs", "Sprint Notes", "Roadmaps", "Archive Folder"],
    icon: <Folder className="size-4"/>,
    chevron : <ChevronRight className="size-3.5"/>
  },
  {
    title: "Copy Link",
    icon: <Copy className="size-4"/>
      },
  {
    title: "Archive",
    icon: <Folder className="size-4"/>
  },
  {
    title: "Delete",
    icon: <Trash className="size-4"/>
  }
];

export default function InPlaceMenu() {
  const [currentState, setCurrentState] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [direction, setDirection] = useState(1);

  const [elementRef, bounds] = useMeasure();

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const activeMenu = menuItems.find(
    (item) => item.title === currentState
  );

  const clearCloseTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const startCloseTimeout = () => {
    timeoutRef.current = setTimeout(() => {
      setCurrentState(null);
    }, 120);
  };

  return (
    <div className="p-20">
      <div className="relative w-56 rounded-xl bg-neutral-800/95 shadow-2xl">
        {menuItems.map((menuItem, index) => (
          <div
            key={menuItem.title}
            onMouseEnter={() => {
              clearCloseTimeout();

              if (index > currentIndex) {
                setDirection(1);
              } else if (index < currentIndex) {
                setDirection(-1);
              }

              setCurrentIndex(index);
              setCurrentState(menuItem.title);
            }}
            onMouseLeave={startCloseTimeout}
            className="flex items-center justify-between gap-3 mx-1 cursor-pointer rounded-xl py-2 px-4 text-white hover:bg-neutral-800"
          >
            <div className="flex items-center gap-3">
            {menuItem.icon}
            {menuItem.title}
            </div>
            <div>
            {menuItem.chevron}
            </div>
          </div>
        ))}

        <motion.div
          onMouseEnter={clearCloseTimeout}
          onMouseLeave={startCloseTimeout}
          animate={{
            height: bounds.height,
            opacity: activeMenu?.subMenuItems ? 1 : 0,
            scale: activeMenu?.subMenuItems ? 1 : 0.98,
          }}
          transition={{
            type: "spring",
            duration: 0.3,
            bounce: 0,
          }}
          className="absolute left-58 top-10 w-40 overflow-hidden rounded-xl bg-neutral-800/95 cursor-pointer"
        >
          <div ref={elementRef} className="relative overflow-hidden">
            <AnimatePresence mode="popLayout" initial={false}>
              <motion.div
                key={activeMenu?.title}
                initial={{
                  y: direction === 1 ? 20 : -20,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                }}
                exit={{
                  y: direction === 1 ? -20 : 20,
                  opacity: 0,
                }}
                transition={{
                  type: "spring",
                  duration: 0.3,
                  bounce: 0,
                }}
              >
                {activeMenu?.subMenuItems?.map((item) => (
                  <div
                    key={item}
                    className="py-2 pl-3 text-white rounded-xl hover:bg-neutral-800 "
                  >
                    {item}
                  </div>
                ))}
              </motion.div>
            </AnimatePresence>
          </div>
        </motion.div>
      </div>
    </div>
  );
}