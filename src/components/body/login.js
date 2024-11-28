import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./login.css";

function Login() {
    const Navigate = useNavigate();
    const [username, setName] = useState("");
    const [password, setPassword] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if (username === "ReactUser" && password === "ceciestunmdp") {
            Navigate("/index")
        } else {
            Navigate("/echouer");
        }
    };

    return (
        <div className="login-container">
          <div className="form-container">
            <form onSubmit={handleSubmit}>
              <label>
                Username :
                <input
                  type="text"
                  value={username}
                  onChange={(e) => setName(e.target.value)}
                />
              </label>
              <br />
              <br />
              <label>
                Password :
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </label>
              <button type="submit">Envoyer</button>
            </form>
          </div>
        </div>
      );
}

export default Login;
