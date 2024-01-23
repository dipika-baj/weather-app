import { useEffect } from "react";
import styles from "./progressBar.module.css";

const ProgressBar = (props) => {
    const { value = 0, max = 100, id } = props;
    const position = (Math.min(value, max) / max) * 100;
    useEffect(() => {
        const progressIndicator = document.getElementById(id);
        progressIndicator.style.bottom = `${position}%`;
    }, []);
    console.log(position);
    return (
        <div className={styles.progress_bar}>
            <div className={styles.progress_indicator_wrapper}>
                <div className={styles.progress_indicator} id={id}></div>
            </div>
        </div>
    );
};
export default ProgressBar;
