import React, { useRef, useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import user from "../assets/icons/user.png";
import cart from "../assets/icons/cart.png";
import analytics from "../assets/icons/analytics.png";
import man from "../assets/icons/man.png";
import buy from "../assets/icons/buy.png";
import sale from "../assets/icons/sale.png";
import plus from "../assets/icons/plus.png";
//import Notification from "./Notification";

const Database = () => {
    return (
        <section>
            <div className="one-row">
                <div className="column">
                    <div className="top">
                        <h4>Databases</h4>
                        <button className="create">
                            <img src="" />
                            Create
                        </button>
                    </div>
                    <div className="fixed-scroll">
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                        <NavLink to="/"> mydata </NavLink>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Database;
