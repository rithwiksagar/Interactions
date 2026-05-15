"use client";

import { useMemo, useState } from "react";
import { Ring } from "./ring";
import { motion, spring } from "motion/react";
import { Timer } from "./timer";
import Battery from "./battery";
import Music from "./music";
import Phone from "./phone";

const ButtonStyles = `bg-neutral-200 px-3 py-1 rounded-md text-[16px] cursor-pointer`;
export default function Island() {
  const [view, setView] = useState("idle");
  const content = useMemo(() => {
    switch (view) {
      case "idle":
        return <div className="h-7"></div>;
      case "ring":
        return <Ring />;
      case "timer":
        return <Timer />;
      case "battery":
        return <Battery />;
      case "music":
        return <Music />;
      case "phone": return <Phone />
    }
  }, [view]);
  return (
    <div className="h-screen flex justify-center items-center">
      <motion.div
        layout
        transition={{ type: spring, bounce: 0.35 }}
        className="h-fit min-w-[100px] overflow-hidden bg-black"
        style={{ borderRadius: 32 }}
      >
        {content}
      </motion.div>
      <div className="fixed bottom-6 space-x-3">
        <button
          onClick={() => {
            setView("idle");
          }}
          className={ButtonStyles}
        >
          Idle
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              setView("ring");
            }, 500);
            setView("idle");
          }}
          className={ButtonStyles}
        >
          Ring
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              setView("timer");
            }, 500);
            setView("idle");
          }}
          className={ButtonStyles}
        >
          Timer
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              setView("music");
            }, 500);
            setView("idle");
          }}
          className={ButtonStyles}
        >
          Music
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              setView("battery");
            }, 500);
            setView("idle");
          }}
          className={ButtonStyles}
        >
          Battery
        </button>
        <button
          onClick={() => {
            setTimeout(() => {
              setView("phone");
            }, 500);
            setView("idle");
          }}
          className={ButtonStyles}
        >
          Phone
        </button>
      </div>
    </div>
  );
}
