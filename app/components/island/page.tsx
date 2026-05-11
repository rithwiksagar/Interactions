"use client"

import { div } from "motion/react-client"
import { useMemo, useState } from "react"
import { Ring } from "./ring"
import { motion } from "motion/react"
import { Timer } from "./timer"


const ButtonStyles = `border px-3 py-1 rounded-full`
export default function Island(){
    const [view, setView] = useState("idle")
    const content = useMemo(()=>{
        switch(view) {
            case "idle" : return <div className="h-7"></div>
            case "ring" : return <Ring />
            case "timer" : return <Timer />
        }
    },[view])
    return <div className="h-screen flex justify-center items-center">
        <motion.div layout className="h-fit min-w-[100px] overflow-hidden bg-black" style={{borderRadius: 32}}>
                {content}
        </motion.div>
        <div className="fixed bottom-6 space-x-3">
            <button onClick={()=>{setView("idle")}} className={ButtonStyles}>Idle</button>
            <button onClick={()=>{setView("ring")}}  className={ButtonStyles}>Ring</button>
            <button onClick={()=>{setView("timer")}} className={ButtonStyles}>Timer</button>
            <button className={ButtonStyles}>Battery</button>
            <button className={ButtonStyles}>Idle</button>
    </div>
</div>
}