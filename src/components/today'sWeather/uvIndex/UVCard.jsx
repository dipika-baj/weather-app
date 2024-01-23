import ProgressBar from "../../resuable/progressBar/ProgressBar";
import styles from "./uvCard.module.css";

const UVCard = (props) => {
    const { uvIndex } = props;
    return (
        <div className={styles.uv_index}>
            <p>{Math.round(uvIndex)}</p>
            <ProgressBar value={Math.round(uvIndex)} max={12} id={"uvIndex"} />
        </div>
    );
};
export default UVCard;
