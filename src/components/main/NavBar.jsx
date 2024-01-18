import { useState } from "react";

const NavBar = () => {
    const [activeForcast, setActiveForcast] = useState("today");
    return (
        <nav className="nav-bar">
            <div className="nav-menu">
                <ul className="forecast-selector">
                    <li>
                        <span>Today</span>
                    </li>
                    <li className="active">
                        <span>Week</span>
                    </li>
                </ul>
                <ul className="unit-selector">
                    <li className="active">
                        <span>&deg;C</span>
                    </li>
                    <li>
                        <span>&deg;F</span>
                    </li>
                </ul>
            </div>
            <div className="user-profile">
                <img src="/user-profile.jpg" />
            </div>
        </nav>
    );
};
export default NavBar;
