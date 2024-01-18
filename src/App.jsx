import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/resuable/card/Card";
import Sidebar from "./components/sidebar/sideBar/Sidebar";
import Main from "./components/main/main/Main";
let count = 1;
function App() {
    const [weatherData, setWeatherData] = useState();
    const [isDataFetched, setIsDataFetch] = useState(false);

    useEffect(() => {
        if (count > 1) return;
        count++;
        const api = `https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=${
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
    }, []);

    if (!isDataFetched) return <>Loading</>;
    return (
        <>
            <Card>
                <Sidebar
                    currentWeather={weatherData.current}
                    currentTimezone={weatherData.timezone}
                />
                <Main
                    weeklyWeather={weatherData.daily}
                    currentTimezone={weatherData.timezone}
                    currentWeather={weatherData.current}
                />
            </Card>
        </>
    );
}

export default App;
