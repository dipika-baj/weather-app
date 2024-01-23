import styles from "./sunRiseSet.module.css";
import { Sunrise, Sunset } from "lucide-react";

const SunRiseSetCard = (props) => {
    const { sunRise, sunSet, timezone } = props;
    return (
        <>
            <div className={styles.sun_rise_set}>
                <Sunrise />
                <p>
                    {new Intl.DateTimeFormat("en-US", {
                        timeZone: timezone,
                        hour12: true,
                        hour: "2-digit",
                        minute: "2-digit",
                    }).format(sunRise * 1000)}
                </p>
            </div>
            <div className={styles.sun_rise_set}>
                <Sunset />
                <p>
                    {new Intl.DateTimeFormat("en-US", {
                        timeZone: timezone,
                        hour12: true,
                        hour: "2-digit",
                        minute: "2-digit",
                    }).format(sunSet * 1000)}
                </p>
            </div>
        </>
    );
};
export default SunRiseSetCard;
