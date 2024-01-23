import ProgressBar from "../../resuable/progressBar/progressBar";
import styles from "./humidity.module.css";
const HumidityCard = (props) => {
    const { humidity } = props;
    return (
        <>
            <div className={styles.humidity}>
                <p>{humidity}%</p>
                <ProgressBar value={humidity} id={"humidity"} />
            </div>
        </>
    );
};
export default HumidityCard;
