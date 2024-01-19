import styles from "./humidity.module.css";
const HumidityCard = (props) => {
    const { humidity } = props;
    return (
        <>
            <div className={styles.humidity}>
                <p>{humidity}%</p>
            </div>
        </>
    );
};
export default HumidityCard;
