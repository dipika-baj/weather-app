import styles from "./weatherCard.module.css";

const WeatherCard = (props) => {
    const { children, title } = props;
    return (
        <div className={styles.weather_card}>
            <p className={styles.card_title}>{title}</p>
            {children}
        </div>
    );
};
export default WeatherCard;
