import React, { useEffect, useState } from 'react';

function Clock(props) {
    const [time, setTime] = useState(new Date());

    useEffect(()=>{
        const interval = setInterval(() => setTime(new Date),1000);
        return() => clearInterval(interval);
    })
    return (
        <div>
            <h1 style={{textAlign:'center'}}>{time.toLocaleString()}</h1>
        </div>
    );
}

export default Clock;