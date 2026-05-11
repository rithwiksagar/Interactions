"use client";
import { AnimatePresence, motion, spring } from "motion/react";
import { useState } from "react";



export default function Menu() {
  const [stepOne, setStepOne] = useState(true);
  const [currentStep, setCurrentStep] = useState(0)
  return (
    <div className="h-screen flex justify-center items-center">
      <div className="w-110 h-60 border border-gray-300 rounded-xl p-4 flex flex-col justify-between overflow-hidden">
        {stepOne ? (
          <AnimatePresence>
            <motion.div
              initial={{ x: -80, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: 80, opacity: 0 }}
              transition={{ type: spring, bounce: 0, duration: 0.5 }}
            >
              <h1 className="text-md font-semibold pb-2">
                This is the step one
              </h1>
              <p className="text-sm">
                this is the smaple paragraoh text just to fill the soace this is
                the smaple paragraoh text just to fill the soace this is the
                smaple paragraoh text just to fill the soace
              </p>
            </motion.div>
          </AnimatePresence>
        ) : (
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 80, opacity: 0 }}
            transition={{ type: spring, bounce: 0, duration: 0.5 }}
          >
            <h1 className="text-md font-semibold pb-2">
              make sure everything you entered is correct...
            </h1>
            <p className="text-sm">
              this is the final text before you hit the confirm button the
              smaple paragraoh text just to fill the soace this is the smaple
              paragraoh text just to fill the soace
            </p>
          </motion.div>
        )}
        <div className="flex justify-between items-end">
          <button
            disabled={stepOne}
            onClick={() => {
              setStepOne(true);
            }}
            className={`px-4 py-1 border border-gray-200 rounded-md cursor-pointer`}
          >
            back
          </button>
          <button
            onClick={() => {
              setStepOne(false);
            }}
            disabled={!stepOne}
            className="px-4 py-1 bg-linear-to-b from-blue-400 to-blue-600 rounded-md text-white cursor-pointer shadow-2xl"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}
