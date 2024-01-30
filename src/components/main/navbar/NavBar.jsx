import { useEffect, useState } from "react";
import styles from "./navbar.module.css";
import { SquareUserRound } from "lucide-react";

const NavBar = () => {
    const [activeForcast, setActiveForcast] = useState("week");
    const [activeUnit, setActiveUnit] = useState("c");

    return (
        <nav className={styles.nav_bar}>
            <div className={styles.nav_menu}>
                <ul className={styles.forecast_selector}>
                    <li
                        className={
                            activeForcast === "today" ? styles.active : ""
                        }
                        onClick={() => setActiveForcast("today")}
                    >
                        <span>Today</span>
                    </li>
                    <li
                        className={
                            activeForcast === "week" ? styles.active : ""
                        }
                        onClick={() => setActiveForcast("week")}
                    >
                        <span>Week</span>
                    </li>
                </ul>
                <ul className={styles.unit_selector}>
                    <li
                        className={activeUnit === "c" ? styles.active : ""}
                        onClick={() => setActiveUnit("c")}
                    >
                        <span>&deg;C</span>
                    </li>
                    <li
                        className={activeUnit === "f" ? styles.active : ""}
                        onClick={() => setActiveUnit("f")}
                    >
                        <span>&deg;F</span>
                    </li>
                </ul>
            </div>
            <div className={styles.user_profile}>
                <SquareUserRound />
            </div>
        </nav>
    );
};
export default NavBar;
