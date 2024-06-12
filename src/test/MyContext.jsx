import { useAuth } from "../context/useAuth";
import React, { useState } from "react";
const MyContext = () => {
    const { isLoggedIn, user } = useAuth();
    alert(isLoggedIn);
    return (
        <div>
            <h2>This Is Test</h2>
            <p>Login : {user.message}</p>
        </div>
    );
};

export default MyContext;
