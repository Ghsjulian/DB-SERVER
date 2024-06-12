import React, { useContext, createContext } from "react";

const authContext = createContext();
const useAuthContext = ({ children }) => {
    const test = name => {
        alert(name);
    };
    return (
        <authContext.Provider value={test}>{{ children }}</authContext.Provider>
    );
};

const useAuth = () => {
    return useContext(authContext);
};

export { useAuthContext,authContext, useAuth };
