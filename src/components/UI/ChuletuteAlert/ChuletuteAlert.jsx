import React, { useEffect } from "react";
import "./ChuletuteAlert.css";

export const ChuletuteAlert = ({
  type = "info",
  message,
  onConfirm,
  onCancel,
  autoClose = false,
  duration = 2500,
}) => {
  useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        if (onCancel) onCancel();
      }, duration);
      return () => clearTimeout(timer);
    }
  }, [autoClose, duration, onCancel]);

  return (
    <div className="chuletute-alert-overlay">
      <div className={`chuletute-alert-box chuletute-${type}`}>
        <p>{message}</p>

        {onConfirm ? (
          <div className="chuletute-alert-buttons">
            <button className="btn" onClick={onConfirm}>Aceptar</button>
            <button className="btn btn-cancel" onClick={onCancel}>Cancelar</button>
          </div>
        ) : (
          <button className="btn" onClick={onCancel}>Cerrar</button>
        )}
      </div>
    </div>
  );
};
