import React, { useState, useEffect, useRef } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "../assets/css/login.css";
import { checkEmail, checkName } from "../assets/js/check.js";
import permission from "../assets/icons/staff.png";
import __api__ from "../assets/js/Requester.js";
import { useAuth } from "../context/useAuth";

const Login = () => {
    const navigate = useNavigate();
    const { userId, token, dispatch, setCookie } = useAuth();
    const [email, setEmal] = useState("");
    const [password, setPassword] = useState("");
    const success = useRef(null);
    const error = useRef(null);
    const showMessage = message => {
        if (message.type === "error") {
            success.current.style.display = "none";
            success.current.textContent = "";
            error.current.style.display = "block";
            error.current.textContent = message.text;
        } else {
            error.current.style.display = "none";
            error.current.textContent = "";
            success.current.style.display = "block";
            success.current.textContent = message.text;
        }
        setTimeout(() => {
            error.current.style.display = "none";
            error.current.textContent = "";
            success.current.style.display = "none";
            success.current.textContent = "";
        }, 3000);
    };
    const saveUser = type => {
        if (type) {
            let url = process.env.API_URL + "/admin/login";
            __api__.postData(url, { email, password }, res => {
                showMessage({ type: res.status, text: res.message });
                setTimeout(() => {
                    if (res.status === "success") {
                        console.log(res);
                        setCookie("user_id", res.data.user_id);
                        setCookie("token", res.token);
                        dispatch({ type: "LOGIN_SUCCESS", payload: res.token });
                        dispatch({ type: "SAVE_USER_INFO", payload: res.data });
                        navigate("/");
                        
                    }
                }, 1000);
            });
        } else {
            showMessage({ type: "error", text: "Something Went Wrong !" });
        }
    };
    const SubmitForm = e => {
        e.preventDefault();
        if (email === "") {
            showMessage({ type: "error", text: "User Email Is Required !" });
        } else if (typeof checkEmail(email) === "string") {
            showMessage({ type: "error", text: checkEmail(email) });
        } else if (password === "") {
            showMessage({ type: "error", text: "User Password Is Required !" });
        } else if (password.length <= 5) {
            showMessage({
                type: "error",
                text: "Password Must Be 6 Characters !"
            });
        } else {
            saveUser(true);
        }
    };
    useEffect(() => {
        if (userId && token) {
            navigate("/");
        }
    }, [token, userId]);

    return (
        <>
            <div className="form">
                <label htmlFor="name">
                    <img id="std-img" src={permission} />
                </label>
                <p ref={error} id="error"></p>
                <p ref={success} id="success"></p>
                <input
                    onChange={e => {
                        setEmal(e.target.value);
                    }}
                    name="email"
                    type="email"
                    id="email"
                    placeholder="Enter Student Email"
                />
                <input
                    onChange={e => {
                        setPassword(e.target.value);
                    }}
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter Student Password"
                />
                <button id="btn" onClick={SubmitForm}>
                    Login Now
                </button>
            </div>
        </>
    );
};

export default Login;
