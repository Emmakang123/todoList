import React, { useEffect, useState } from 'react';

function Clock(props) {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const updateClock = () => {
            const now  = new Date();
            const formattedTime = now.toLocaleTimeString("en-GB", {
                hour:"2-digit",
                minute : "2-digit",
                hour12 : false // 24hours time rull
            });
            setTime(formattedTime);
        }
        updateClock();
        
        const interval = setInterval(updateClock, 1000);

        return() => clearInterval(interval);
    },[])
    return (
        <div className='clock-container'>
            <h1 className='clock'>{time.toLocaleString()}</h1>
        </div>
    );
}

export default Clock;