import styles from "./uvCard.module.css";
const UVCard = (props) => {
    const { uvIndex } = props;
    return (
        <div>
            <p className={styles.uv_index}>{uvIndex}</p>
        </div>
    );
};
export default UVCard;
