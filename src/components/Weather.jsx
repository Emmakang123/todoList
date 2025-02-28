import React, { useEffect, useState } from 'react';

function Weather(props) {
    console.log(":MY_WEATHER_API_KEY : ", import.meta.env.VITE_WEATHER_API_KEY)
    const [weather, setWeather] = useState(null);
    const API_KEY = import.meta.env.VITE_WEATHER_API_KEY; 
    const [errMsg, setErrorMsg] = useState(null);
    if(!API_KEY) {
        console.error ("ERROR : API Key is missing!!!");
        return <div> Please try refresh for showing weather</div>;
    }

    
    useEffect( () => {
        navigator.geolocation.getCurrentPosition( (position) => {
            let lat = position.coords.latitude;
            let lon = position.coords.longitude;
            console.log("current Latitude and longitude : ", lat, " ", lon);
            getWeather(lat, lon);
        });
    }, [API_KEY])
    // When API_KEY changed render again
    // API_KEY의 값이 변경될때만 실행됨됨
    const getWeather = async (lat,lon) => {
        try{
            const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`);

            if(!res.ok){
                throw new Error(`HTTP error! status : ${res.status}`)
            }
            const data = await res.json();
            console.log(data)
            const weatherId = data.weather[0].id;
            // const weatherKo = weatherDescKo[weatherId];
            const weatherIcon = data.weather[0].icon;
            const weatherIconAdrs = ` https://openweathermap.org/img/wn/${weatherIcon}@2x.png`
            const _temp = Math.round(data.main.temp);
            setWeather({
                name : data.name,
                desc : data.weather[0].description,
                temp : _temp,
                icon : weatherIconAdrs,
            });
            console.log(weather)
        }catch(error){
            console.error("Error fetching weather data : ", error);
            setErrorMsg(error.message)
        }
    }

    return (
      <div className='weather-widget'>
            {errMsg ? (
                <div className='error'>{errMsg}</div>
            ) : weather ? (
            <div className='weather-content'>   
                <h2>{weather.name}</h2>
                <div className='weather-info'>
                    <img className='weather-icon' src={weather.icon} alt={weather.desc}/>
                    <p className='weather-temp'>{weather.temp}</p>
                </div>
                <p className='weather-desc'>{weather.desc}</p>
            </div>) : (
                <p>WAIT !! Almost DONE !!!!</p>
            )}
      </div>
    );
}

export default Weather;