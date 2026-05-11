"use client"
import { animate } from "motion";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react"

type buttonCopyTypes = "idle" | "loading" | "success";

const buttonCopy = {
  idle: "Send me a login link",
  loading: "Loading",
  success: "Login link sent!",
};

export default function App(){
  const [buttonState, setButtonState] =  useState<buttonCopyTypes>("idle");
  return <div className="h-screen flex justify-center items-center">
    <button 
    disabled={buttonState !== "idle"}
    onClick={()=>{
      setButtonState("loading");
      setTimeout(()=>{
        setButtonState("success")
      },1000);

      setTimeout(()=>{
        setButtonState("idle")
      },5000)
    }}

    className="w-60 h-10 bg-linear-to-b from-blue-400 to-blue-600 rounded-md text-white cursor-pointer shadow-2xl overflow-hidden">
      <AnimatePresence mode="popLayout" initial={false}>
      <motion.span
      key={buttonState}
      initial={{opacity:0, y: -25}}
      animate={{opacity:1, y:0}}
      exit={{opacity:0, y:25}}
      className="flex justify-center items-center px-5 py-2"
      >{buttonCopy[buttonState]}</motion.span>
      </AnimatePresence>
    </button>
  </div>
}