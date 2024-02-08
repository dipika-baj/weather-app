import { useEffect, useState } from "react";
import Card from "./components/resuable/card/Card";
import Sidebar from "./components/sidebar/sideBar/Sidebar";
import Main from "./components/main/main/Main";

function App() {
    const [weatherData, setWeatherData] = useState();
    const [isDataFetched, setIsDataFetch] = useState(false);
    const [unit, setUnit] = useState("c");
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
                setIsDataFetch(true);
                setWeatherData(data);
            })
            .catch((err) => {
                console.log("ERROR");
            });
    }, [coordinates]);

    if (!isDataFetched) return <>Loading</>;

    return (
        <>
            <Card>
                <Sidebar
                    currentWeather={weatherData.current}
                    currentTimezone={weatherData.timezone}
                    unit={unit}
                    setCoordinates={setCoordinates}
                />
                <Main
                    weeklyWeather={weatherData.daily}
                    hourlyWeather={weatherData.hourly}
                    currentTimezone={weatherData.timezone}
                    currentWeather={weatherData.current}
                    unit={unit}
                    setUnit={setUnit}
                />
            </Card>
        </>
    );
}

export default App;
