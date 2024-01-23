import ProgressBar from "../../resuable/progressBar/ProgressBar";
import styles from "./humidity.module.css";
const HumidityCard = (props) => {
    const { humidity } = props;
    return (
        <>
            <div className={styles.humidity}>
                <p>{humidity}%</p>
                <ProgressBar value={humidity} />
            </div>
        </>
    );
};
export default HumidityCard;
