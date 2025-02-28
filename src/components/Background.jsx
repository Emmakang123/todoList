import React, { useEffect, useState } from 'react';

function Background(props) {
    const [bgUrl, setBgUrl] = useState("");

    useEffect(()=>{
        fetch("https://picsum.photos/1920/1080").then((res)=>{
            setBgUrl(res.url)
        })
    },[]);
    return (
            <div className='background' style={{backgroundImage:`url(${bgUrl})`}}></div>
    );
}

export default Background;