import "../index.css";
import NavBar from "./NavBar";
import WeeklyWeather from "./WeeklyWeather";
const Main = (props) => {
    const { weeklyWeather, currentTimeZone } = props;
    return (
        <div className="weather-detail-wrapper">
            <NavBar />
            <WeeklyWeather
                weeklyWeather={weeklyWeather}
                timeZone={currentTimeZone}
            />
        </div>
    );
};
export default Main;
