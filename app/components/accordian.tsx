"use client";

import { ChevronDown, ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const accordianItems = [
  {
    id: 0,
    title: "Good design",
    content:
      "A good design balances usability, clarity, accessibility effectively.",
  },
  {
    id: 1,
    title: "Why motion",
    content:
      "Motion helps users understand spatial relationships and state changes.",
  },
  {
    id: 2,
    title: "Spacing",
    content:
      "Proper spacing creates visual rhythm and separates content logically.",
  },
  {
    id: 3,
    title: "Visual hierarchy",
    content:
      "Visual hierarchy guides user attention using contrast and spacing.",
  },
  {
    id: 4,
    title: "Consistency",
    content:
      "Consistency builds familiarity and trust across interfaces.",
  },
];

export default function Accordian() {
  const [activeState, setActiveState] = useState<number | null>(null);
  const ref = useRef<HTMLDivElement | null>(null);

  const activeIndex = accordianItems.findIndex(
    (item) => item.id === activeState
  );

  const activeItem = accordianItems.find(
    (item) => item.id === activeState
  );

  const topItems =
    activeIndex !== -1
      ? accordianItems.slice(0, activeIndex)
      : accordianItems;

  const bottomItems =
    activeIndex !== -1
      ? accordianItems.slice(activeIndex + 1)
      : [];

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (ref.current && !ref.current.contains(e.target as Node)) {
        setActiveState(null);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div
      ref={ref}
      className="flex flex-col gap-2 w-56"
    >
      <motion.div
        layout
        className="bg-white rounded-2xl overflow-hidden"
      >
        {topItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            layoutId={`accordion-${item.id}`}
            onClick={() => setActiveState(item.id)}
            transition={{
              layout: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
              },
            }}
            className="px-3 py-3 flex items-center justify-between cursor-pointer"
          >
            <div className="text-xs text-neutral-800">
              {item.title}
            </div>

            <ChevronDown className="size-4 text-neutral-500" />
          </motion.div>
        ))}
      </motion.div>
      <AnimatePresence mode="popLayout">
        {activeItem && (
          <motion.div
            key={activeItem.id}
            layout
            layoutId={`accordion-${activeItem.id}`}
            style={{ originY: 0 }}
            transition={{
              layout: {
                type: "spring",
                bounce: 0.35,
                duration: 0.75,
              },
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setActiveState(null)}
            className="bg-white rounded-2xl overflow-hidden cursor-pointer"
          >
            <div className="p-3">
              <div className="flex items-center justify-between">
                <div className="text-xs text-neutral-800">
                  {activeItem.title}
                </div>

                <ChevronUp className="size-4 text-neutral-500" />
              </div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{
                    opacity: 0,
                    y: 6,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: 6,
                  }}
                  transition={{
                    duration: 0.2,
                    delay: 0.15,
                  }}
                  className="text-[11px] text-neutral-500 mt-2"
                >
                  {activeItem.content}
                </motion.div>
              </AnimatePresence>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <motion.div
        layout
        className="bg-white rounded-2xl overflow-hidden"
      >
        {bottomItems.map((item) => (
          <motion.div
            key={item.id}
            layout
            layoutId={`accordion-${item.id}`}
            onClick={() => setActiveState(item.id)}
            transition={{
              layout: {
                type: "spring",
                bounce: 0.3,
                duration: 0.7,
              },
            }}
            className="px-3 py-3 flex items-center justify-between cursor-pointer"
          >
            <div className="text-xs text-neutral-800">
              {item.title}
            </div>

            <ChevronDown className="size-4 text-neutral-500" />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
}