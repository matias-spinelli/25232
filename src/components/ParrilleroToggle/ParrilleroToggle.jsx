import React, { useState } from "react";
import { useSizzleSound } from "../hooks/useSizzleSound";
import "./ParrilleroToggle.css";

export const ParrilleroToggle = () => {
  const { play, stop } = useSizzleSound();
  const [active, setActive] = useState(false);

  const toggle = () => {
    if (active) stop();
    else play();
    setActive(!active);
  };

  return (
    <div className="parrillero-toggle">
      <button className={`toggle-btn ${active ? "active" : ""}`} onClick={toggle}>
        {active ? "🧯 Apagar brasas" : "🔥 Encender brasas"}
      </button>
      {active && <div className="smoke" />}
    </div>
  );
};
