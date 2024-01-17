import {
    Cloud,
    Cloudy,
    Sun,
    SunMedium,
    CloudRain,
    CloudDrizzle,
} from "lucide-react";
const CurrentWeatherIcon = (props) => {
    const { weather } = props;
    switch (weather) {
        case "clear sky":
            return <SunMedium />;
        case "few clouds":
            return <Sun />;
        case "scattered clouds":
            return <Cloud />;
        case "broken clouds":
            return <Cloudy />;
        case "shower rain":
            return <CloudRain />;
        case "rain":
            return <CloudDrizzle />;
        case "overcast clouds":
            return <Cloudy />;
        default:
            return <SunMedium />;
    }
};
export default CurrentWeatherIcon;
