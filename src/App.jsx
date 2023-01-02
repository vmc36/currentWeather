import { useState, useEffect } from "react";
import axios from "axios";

function App() {
  const [location, setLocation] = useState(false);
  const [weather, setWeather] = useState(false);

  useEffect(() => {
    navigator.geolocation.getCurrentPosition((position) => {
      getWeather(position.coords.latitude, position.coords.longitude);
      setLocation(true);
    });
  }, []);

  const getWeather = async (lat, long) => {
    const res = await axios.get(
      "http://api.openweathermap.org/data/2.5/weather",
      {
        params: {
          lat: lat,
          lon: long,
          appid: import.meta.env.VITE_BASE_URL,
          lang: "pt",
          units: "metric",
        },
      }
    );

    setWeather(res.data);
  };

  if (location == false) {
    return <>Você precisa habilitar a localização no browser </>;
  } else if (weather == false) {
    return <>Carregando o clima...</>;
  } else {
    const iconWeather = weather.sys.country;
    const conditionWeather = weather["weather"][0]["icon"];
    const cityName = weather.name;

    const countryIconFlag = `https://countryflagsapi.com/png/${iconWeather}`;
    const conditionIcon = `http://openweathermap.org/img/wn/${conditionWeather}@2x.png`;
    const apiUnsplash = `https://source.unsplash.com/1600x900/?${cityName}`;

    const infoTemp = {
      nowTemp: weather["main"]["temp_max"],
      maxTemp: weather["main"]["temp"],
      minTemp: weather["main"]["temp_min"],
      humidity: weather["main"]["humidity"],
      wind: weather["wind"]["speed"],
    };

    return (
      <>
        <div
          className="w-full h-screen bg-gradient-to-r from-cyan-500 to-blue-500 text-white"
          style={{ backgroundImage: `url(${apiUnsplash})` }}
        >
          <div className="w-full h-full items-center relative flex justify-center ">
            <div className="p-8 h-72 border border-none space-x-5 space-y-4 bg-blue-600 rounded-lg shado">
              <div className="flex justify-center items-center space-x-2">
                <img src="/location.svg" alt="location" />
                <h1 className="font-bold text-4xl">{weather.name}</h1>
                <img
                  className="w-8 h-6"
                  crossOrigin="anonymous"
                  src={countryIconFlag}
                  alt="Bandeira do País."
                />
              </div>
              <div className="h-[1px] w-full bg-white flex ml-[5px]"></div>
              <ul className="flex flex-col items-center">
                <div className="flex justify-center items-center">
                  <img src="thermometer.svg" alt="thermometer icon" />
                  <li> {parseInt(infoTemp.nowTemp)}°C</li>
                </div>
                <div className="flex justify-center items-center">
                  <li className="font-medium">
                    {weather["weather"][0]["description"]}
                  </li>
                  <li>
                    <img
                      src={conditionIcon}
                      alt="condition icon"
                      className="w-16"
                    />
                  </li>
                </div>
                <div className="flex space-x-3">
                  <img src="drop.svg" alt="drop icon" />
                  <li>{infoTemp.humidity} %</li>
                </div>
                <div className="flex space-x-3">
                  <img src="wind.svg" alt="drop icon" />
                  <li>{infoTemp.wind} Km/H</li>
                </div>
              </ul>
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default App;
