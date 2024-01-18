import NavBar from "../navbar/NavBar";
import WeeklyWeather from "../../weeklyWeather/weeklyWeather/WeeklyWeather";
import TodayWeather from "../../today'sWeather/TodayWeather";
import style from "./main.module.css";
const Main = (props) => {
    const { weeklyWeather, currentTimeZone, currentWeather } = props;
    return (
        <div className={style.weather_detail_wrapper}>
            <NavBar />
            <WeeklyWeather
                weeklyWeather={weeklyWeather}
                timeZone={currentTimeZone}
            />
            <TodayWeather currentWeather={currentWeather} />
        </div>
    );
};
export default Main;