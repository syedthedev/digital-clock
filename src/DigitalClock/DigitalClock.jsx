import React from "react";
import { useState,useEffect } from "react";
import './DigitalClock.css';

function DigitalClock()
{
    const [time,setTime] = useState(new Date());

    useEffect(() =>
    {
        const intervalId = setInterval(()=> {setTime(new Date());},1000);
        return () =>
            {
                clearInterval(intervalId);
            }
    },[]);

    function formatTime()
    {
        let hours = time.getHours();
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();
        const meridiem = hours > 12 ? "PM" : "AM";
        hours = hours % 12 || 12;


        return  `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${meridiem}`;
    }

    function pad(number)
    {
        return String(number).padStart(2,0);
    }

     return(
        <>
            <div className="clock-container">
                <div className="clock">
                    <span>{formatTime()}</span>
                </div>
            </div>
        </>
    );
}
export default DigitalClock