import React, {
    createContext,
    useEffect,
    useState,
    useContext,
    useReducer
} from "react";
import { Reducer } from "../reducer/Reducer";
import __api__ from "../assets/js/Requester.js";
import axios from "axios";

const AuthContext = createContext();
const setCookie = (cname, cvalue) => {
    const d = new Date();
    d.setTime(d.getTime() + 30 * 24 * 60 * 60 * 1000);
    let expires = "expires=" + d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};
const getCookie = cname => {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(";");
    for (let i = 0; i < ca.length; i++) {
        let c = ca[i];
        while (c.charAt(0) == " ") {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
};
const getUser = () => {
    let session = [];
    let tok = getCookie("user_token");
    let url = "http://localhost:8080/users";
    __api__.postData(url, { user_token: tok }, res => {
        session.push(res);
    });
    return session;
};

const initialstate = {
    userId: getCookie("user_id") || null,
    token: getCookie("token") || null,
    session : null
};

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(Reducer, initialstate);
    return (
        <AuthContext.Provider
            value={{
                ...state,
                dispatch,
                setCookie,
                getCookie,
            }}
        >
            {children}
        </AuthContext.Provider>
    );
};

const useAuth = () => {
    return useContext(AuthContext);
};

export { AuthProvider, useAuth, AuthContext };
