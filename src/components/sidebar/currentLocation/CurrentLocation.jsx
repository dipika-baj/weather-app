import { useContext } from "react";
import styles from "./currentLocation.module.css";
import { WeatherContext } from "../../../context/WeatherContextProvider";

const CurrentLocation = () => {
    const { weatherData } = useContext(WeatherContext);

    return (
        <div className={styles.current_location_wrapper}>
            <img src="/location.jpg" />
            <p className={styles.current_location}>{weatherData.timezone}</p>
        </div>
    );
};
export default CurrentLocation;
