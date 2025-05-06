import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import "./styles.css"; // Asegúrate de incluir este archivo para los estilos

function TrafficLight() {
  const [color, setColor] = useState("red");

  return (
    <div className="traffic-light">
      <div
        className={`light red ${color === "red" ? "active" : ""}`}
        onClick={() => setColor("red")}
      />
      <div
        className={`light yellow ${color === "yellow" ? "active" : ""}`}
        onClick={() => setColor("yellow")}
      />
      <div
        className={`light green ${color === "green" ? "active" : ""}`}
        onClick={() => setColor("green")}
      />
    </div>
  );
}

const root = ReactDOM.createRoot(document.querySelector("#root"));
root.render(<TrafficLight />);
