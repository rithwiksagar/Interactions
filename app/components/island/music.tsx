import { time } from "console";
import { reverse } from "dns";
import { motion, scale, spring } from "motion/react";
import Image from "next/image";
import { useState } from "react";

export default function Music() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div className="w-68 h-42 flex flex-col justify-between">
      <div className="p-4 flex justify-between">
        <div className="flex items-center gap-2">
          <motion.div
            whileTap={{ scale: 0.9 }}
            initial={{
              rotate: 20,
              rotateY: 50,
              rotateX: 60,
              scale: 0.7,
              opacity: 0,
            }}
            animate={{
              rotate: 0,
              rotateY: [-20, 0],
              rotateX: 0,
              scale: 1,
              opacity: 1,
            }}
            transition={{
              type: "spring",
              stiffness: 120,
              damping: 10,
              mass: 1,
            }}
            className="size-14 rounded-xl bg-linear-to-b from-purple-400 to-blue-400"
          ></motion.div>
          <div>
            <div className="text-white font-medium text-[18px]">JUNGLE</div>
            <div className="text-neutral-400 font-medium text-[14px]">
              vinak
            </div>
          </div>
        </div>
        <MusicBars isPaused={isPaused} />
      </div>
      <div>
        <div className="relative mx-auto w-32 bg-neutral-600 h-1 rounded-2xl">
          <motion.div
            initial={{ width: "0%" }}
            animate={{ width: "100%" }}
            transition={{ duration: 60, ease: "linear" }}
            className="absolute top-0 left-0 h-1 rounded-2xl bg-white"
          ></motion.div>
        </div>
        <div className="flex justify-between items-center p-4 mx-16">
          <motion.button
            whileTap={{ scale: 0.8 }}
            className="text-[14px] text-white cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 16 16"
              className="-scale-x-100  text-neutral-300 size-5"
            >
              <g fill="currentColor">
                <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z"></path>
                <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z"></path>
              </g>
            </svg>
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.8 }}
            onClick={() => {
              setIsPaused((c) => !c);
            }}
            className="text-[14px] text-white cursor-pointer"
          >
            {!isPaused ? (
              <svg
                viewBox="0 0 10 13"
                fill="none"
                className="size-5 fill-current text-neutral-300"
              >
                <path d="M1.03906 12.7266H2.82031C3.5 12.7266 3.85938 12.3672 3.85938 11.6797V1.03906C3.85938 0.328125 3.5 0 2.82031 0H1.03906C0.359375 0 0 0.359375 0 1.03906V11.6797C0 12.3672 0.359375 12.7266 1.03906 12.7266ZM6.71875 12.7266H8.49219C9.17969 12.7266 9.53125 12.3672 9.53125 11.6797V1.03906C9.53125 0.328125 9.17969 0 8.49219 0H6.71875C6.03125 0 5.67188 0.359375 5.67188 1.03906V11.6797C5.67188 12.3672 6.03125 12.7266 6.71875 12.7266Z"></path>
              </svg>
            ) : (
              <svg
                viewBox="0 0 10 13"
                fill="none"
                className="size-5 fill-current text-neutral-300"
              >
                <path d="M0.9375 13.2422C1.25 13.2422 1.51562 13.1172 1.82812 12.9375L10.9375 7.67188C11.5859 7.28906 11.8125 7.03906 11.8125 6.625C11.8125 6.21094 11.5859 5.96094 10.9375 5.58594L1.82812 0.3125C1.51562 0.132812 1.25 0.015625 0.9375 0.015625C0.359375 0.015625 0 0.453125 0 1.13281V12.1172C0 12.7969 0.359375 13.2422 0.9375 13.2422Z"></path>
              </svg>
            )}
          </motion.button>

          <motion.button
            whileTap={{ scale: 0.8 }}
            className="text-[14px] text-white cursor-pointer"
          >
            <svg
              viewBox="0 0 16 13"
              fill="none"
              className="size-5 fill-current text-neutral-300"
            >
              <g fill="currentColor">
                <path d="M7.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C.713 12.69 0 12.345 0 11.692V4.308c0-.653.713-.998 1.233-.696z"></path>
                <path d="M15.596 7.304a.802.802 0 0 1 0 1.392l-6.363 3.692C8.713 12.69 8 12.345 8 11.692V4.308c0-.653.713-.998 1.233-.696z"></path>
              </g>
            </svg>
          </motion.button>
        </div>
      </div>
    </div>
  );
}

function MusicBars({ isPaused }: { isPaused: boolean }) {
  const bars = new Array(7).fill(0).map((_, idx) => idx);

  return (
    <div className="flex items-center gap-0.5">
      {bars.map((bar, idx) => {


        return (
          <motion.div
            key={idx}
            animate={{
              scaleY: [0.3, 1, 0.5, 0.8, 0.2],
            }}
            transition={
              isPaused
                ? {}
                : {
                    duration: 0.8,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: Math.random()*0.5,
                    ease: "easeInOut",
                  }
            }
            style={{
              transformOrigin: "center",
            }}
            className="w-[3px] h-5 bg-blue-400 rounded-full"
          />
        );
      })}
    </div>
  );
}
