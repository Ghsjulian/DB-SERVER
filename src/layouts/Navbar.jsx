import React, { useRef, useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";

/*<----ICONS---->*/
import home1 from "../assets/icons/home1.png";
import user from "../assets/icons/user.png";
import messenger from "../assets/icons/messenger.png";
import notification from "../assets/icons/notification.png";
import option from "../assets/icons/option.png";
import burger_menu from "../assets/icons/burger_menu.png";
import settings1 from "../assets/icons/settings1.png";
import cancel from "../assets/icons/cancel.png";

const Navbar = () => {
    return(
        <header>
            <h3 className="logo">YOUR-DB</h3>
            <nav>
                <ul>
                    <NavLink to="/">Databases</NavLink>
                    <NavLink to="/">Export</NavLink>
                    <NavLink to="/">Import</NavLink>
                    <NavLink to="/">Admin</NavLink>
                    <NavLink to="/">Settings</NavLink>
                </ul>
            </nav>
            <button className="nav--btn">
                <img src={burger_menu} />
            </button>
        </header>
    );
};

export default Navbar;
