import styles from "./visibility.module.css";
const VisibilityCard = (props) => {
    const { visibility } = props;
    return (
        <>
            <div className={styles.visibility}>
                <p>
                    {visibility / 1000}
                    <span>km</span>
                </p>
            </div>
        </>
    );
};
export default VisibilityCard;
