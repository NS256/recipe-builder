import React from "react";
import '../styles/SetTimeInstruction.css';

export default function SetTimeInstruction({timeTillNext = ""}) {
    console.log(timeTillNext)
    return (
        <div className="timer-instruction">
            <h3>Set a timer for {timeTillNext}</h3>
        </div>
    );
}