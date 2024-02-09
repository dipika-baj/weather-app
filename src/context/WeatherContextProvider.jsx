import { createContext, useEffect, useState } from "react";

// const initialWeatherValue = [undefined, () => {}];
export const WeatherContext = createContext();

const WeatherContextProvider = ({ children }) => {
    const [weatherData, setWeatherData] = useState();
    const [coordinates, setCoordinates] = useState({
        lat: 27.708317,
        lon: 85.3205817,
    });

    useEffect(() => {
        const api = `https://api.openweathermap.org/data/2.5/onecall?exclude=alerts,minutely&lat=${
            coordinates.lat
        }&lon=${coordinates.lon}&units=metric&appid=${
            import.meta.env.VITE_APP_ID
        }`;

        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data);
            })
            .catch((err) => {
                console.log("ERROR");
            });
    }, [coordinates]);

    return (
        <WeatherContext.Provider value={{ weatherData, setCoordinates }}>
            {children}
        </WeatherContext.Provider>
    );
};

export default WeatherContextProvider;
