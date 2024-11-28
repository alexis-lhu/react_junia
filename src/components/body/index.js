import React, { useState, useEffect } from "react";
import './indexjs.css'; // Importez le CSS modifié

function Index() {
  const [advice, setAdvice] = useState("");

  const fetchAdvice = () => {
    fetch("https://api.adviceslip.com/advice")
      .then((response) => response.json())
      .then((data) => setAdvice(data.slip.advice));
  };

  useEffect(() => {
    fetchAdvice();
  }, []);

  return (
    <div className="advice-container">
      <h1>Conseil du jour</h1>
      <p>{advice}</p>
      <button onClick={fetchAdvice}>Obtenir un nouveau conseil</button>
    </div>
  );
}

export default Index;