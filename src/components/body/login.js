import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Login() {
    const Navigate = useNavigate();
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault(); // Empêche le rechargement de la page
        if (username === "ReactUser" && password === "ceciestunmdp") {
            Navigate("/index")
        } else {
            Navigate("/echouer");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <br />
            <label>
                Username :
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setName(e.target.value)} // Mise à jour du state
                />
            </label>
            <br />
            <br />
            <label>
                Password :
                <input type="password"
                    vale={password}
                    onChange={(e) => setPassword(e.target.value)} />
            </label>
            <button type="submit">Envoyer</button>
        </form>
    );
}

export default Login;
