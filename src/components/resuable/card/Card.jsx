import Sidebar from "../../sidebar/sideBar/Sidebar";
import Main from "../../main/main/Main";
import styles from "./card.module.css";
const Card = (props) => {
    const { weatherData } = props;
    console.log(weatherData);
    return (
        <div className={styles.weather_app_wrapper}>
            <Sidebar
                currentWeather={weatherData.current}
                currentTimezone={weatherData.timezone}
            />
            <Main
                weeklyWeather={weatherData.daily}
                currentTimezone={weatherData.timezone}
                currentWeather={weatherData.current}
            />
        </div>
    );
};
export default Card;
