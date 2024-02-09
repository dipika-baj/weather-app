import { useContext, useState } from "react";
import Card from "../components/resuable/card/Card";
import Main from "../components/main/main/Main";
import Sidebar from "../components/sidebar/sideBar/Sidebar";
import { WeatherContext } from "../context/WeatherContextProvider";

function Weather() {
    const { weatherData } = useContext(WeatherContext);
    const [unit, setUnit] = useState("c");

    if (!weatherData) return <>Loading</>;

    return (
        <Card>
            <Sidebar unit={unit} />
            <Main unit={unit} setUnit={setUnit} />
        </Card>
    );
}

export default Weather;
