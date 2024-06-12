import React, { useEffect, useState } from "react";
import { useAuth } from "../context/useAuth";
import { useNavigate } from "react-router-dom";

const Protect = ({ children }) => {
    const navigate = useNavigate();
    const { userId, token } = useAuth();
    useEffect(() => {
        if (!userId && !token) {
            navigate("/login");
        }
    }, [userId,token]);

    return <>{token && children}</>;
};

export default Protect;
