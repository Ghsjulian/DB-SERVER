import { useAuth } from "../context/useAuth";
import React, { useState } from "react";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const { isLoggedIn, dispatch } = useAuth();

    const handleLogin = async () => {
        // Call your login API here
        const user = { email, password };

        // Assuming the API returns the user object on success
        dispatch({ type: "LOGIN_SUCCESS", payload: user });
    };

    return (
        <div>
            <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
            />
            <input
                type="password"
                value={password}
                onChange={e => setPassword(e.target.value)}
            />
            <button onClick={handleLogin}>Login</button>

            {isLoggedIn && <div>Welcome, {email}!</div>}
        </div>
    );
}

export default Login;
