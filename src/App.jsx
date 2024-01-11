import { useEffect, useState } from "react";
import "./App.css";
import Card from "./components/Card";
let count = 1;
function App() {
    const [weatherData, setWeatherData] = useState();

    useEffect(() => {
        if (count > 1) return;
        count++;
        const api = ` https://openweathermap.org/data/2.5/onecall?lat=51.5085&lon=-0.1257&units=metric&appid=${
            import.meta.env.VITE_APP_ID
        }`;

        fetch(api)
            .then((response) => response.json())
            .then((data) => {
                setWeatherData(data);
            });
    }, []);

    return <Card weatherData={weatherData} />;
}

export default App;
