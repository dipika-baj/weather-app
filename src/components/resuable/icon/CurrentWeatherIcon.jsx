import {
    Cloudy,
    Sun,
    SunMedium,
    CloudRain,
    CloudDrizzle,
    CloudLightning,
    Snowflake,
} from "lucide-react";
const CurrentWeatherIcon = (props) => {
    const { weather } = props;
    switch (weather) {
        case "Thunderstorm":
            return <CloudLightning />;
        case "Drizzle":
            return <CloudDrizzle />;
        case "Rain":
            return <CloudRain />;
        case "Snow":
            return <Snowflake />;
        case "Clear":
            return <Sun />;
        case "Clouds":
            return <Cloudy />;
        default:
            return <SunMedium />;
    }
};
export default CurrentWeatherIcon;
