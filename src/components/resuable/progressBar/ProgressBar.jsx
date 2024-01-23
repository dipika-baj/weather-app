import styles from "./progressBar.module.css";

const ProgressBar = (props) => {
    const { value = 0, max = 100 } = props;
    const position = (Math.min(value, max) / max) * 100;

    return (
        <div className={styles.progress_bar}>
            <div className={styles.progress_indicator_wrapper}>
                <div
                    className={styles.progress_indicator}
                    style={{ bottom: `${position}%` }}
                ></div>
            </div>
        </div>
    );
};
export default ProgressBar;
