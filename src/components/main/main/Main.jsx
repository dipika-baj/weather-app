import NavBar from "../navbar/NavBar";
import WeeklyWeather from "../../weeklyWeather/weeklyWeather/WeeklyWeather";
import TodayWeather from "../../today'sWeather/TodayWeather";
import style from "./main.module.css";
const Main = (props) => {
    const { weeklyWeather, currentTimezone, currentWeather } = props;
    console.log("main");
    return (
        <div className={style.weather_detail_wrapper}>
            <NavBar />
            <WeeklyWeather
                weeklyWeather={weeklyWeather}
                timezone={currentTimezone}
            />
            <TodayWeather
                currentWeather={currentWeather}
                timezone={currentTimezone}
            />
        </div>
    );
};
export default Main;
