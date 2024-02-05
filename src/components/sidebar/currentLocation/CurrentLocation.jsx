import styles from "./currentLocation.module.css";

const CurrentLocation = (props) => {
    const { currentTimezone } = props;
    return (
        <div className={styles.current_location_wrapper}>
            <img src="/location.jpg" />
            <p className={styles.current_location}>{currentTimezone}</p>
        </div>
    );
};
export default CurrentLocation;
