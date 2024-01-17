import "../index.css";
import NavBar from "./NavBar";
import WeeklyWeather from "./WeeklyWeather";
import TodayWeather from "./TodayWeather";
const Main = (props) => {
    const { weeklyWeather, currentTimeZone, currentWeather } = props;
    return (
        <div className="weather-detail-wrapper">
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
