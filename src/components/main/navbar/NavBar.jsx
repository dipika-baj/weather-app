import { useState } from "react";
import styles from "./navbar.module.css";

const NavBar = () => {
    const [activeForcast, setActiveForcast] = useState("today");
    return (
        <nav className={styles.nav_bar}>
            <div className={styles.nav_menu}>
                <ul className={styles.forecast_selector}>
                    <li>
                        <span>Today</span>
                    </li>
                    <li className={styles.active}>
                        <span>Week</span>
                    </li>
                </ul>
                <ul className={styles.unit_selector}>
                    <li className={styles.active}>
                        <span>&deg;C</span>
                    </li>
                    <li>
                        <span>&deg;F</span>
                    </li>
                </ul>
            </div>
            <div className={styles.user_profile}>
                <img src="/user-profile.jpg" />
            </div>
        </nav>
    );
};
export default NavBar;
