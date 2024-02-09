import styles from "./card.module.css";

const Card = (props) => {
    const { children } = props;

    return <div className={styles.weather_app_card}>{children}</div>;
};

export default Card;
