import React from "react";
import {useNavigate} from "react-router-dom";

function App() {
    const navigate = useNavigate();
    const handleLogin = () => {
    localStorage.setItem("user", JSON.stringify({ username: "ReactUser", password: "ceciestunmdp" }));
    navigate( "/login") ;
  };

  return (
    <div>
      <h1>Bienvenue sur l'application</h1>
      <button onClick={handleLogin}>Se connecter</button>
    </div>
  );
}

export default App;
