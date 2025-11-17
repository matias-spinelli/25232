import { useState, useCallback } from "react";
import { createPortal } from "react-dom";
import { ChuletuteAlertContext } from "./ChuletuteAlertContext";
import { ChuletuteAlert } from "./ChuletuteAlert";

export const ChuletuteAlertProvider = ({ children }) => {
  const [alertConfig, setAlertConfig] = useState(null);

  const closeAlert = () => setAlertConfig(null);

  const showAlert = useCallback((message, type = "info") => {
    return new Promise((resolve) => {
      setAlertConfig({
        message,
        type,
        onCancel: () => {
          closeAlert();
          resolve(false);
        },
      });
    });
  }, []);

  const showConfirm = useCallback((message, type = "info") => {
    return new Promise((resolve) => {
      setAlertConfig({
        message,
        type,
        onConfirm: () => {
          closeAlert();
          resolve(true);
        },
        onCancel: () => {
          closeAlert();
          resolve(false);
        },
      });
    });
  }, []);

  const showToast = useCallback((message, type = "info", duration = 2000) => {
    setAlertConfig({
      message,
      type,
      autoClose: true,
      duration,
      onCancel: closeAlert,
    });
  }, []);

  const AlertPortal = alertConfig
    ? createPortal(<ChuletuteAlert {...alertConfig} />, document.body)
    : null;

  return (
    <ChuletuteAlertContext.Provider
      value={{ showAlert, showConfirm, showToast }}
    >
      {children}
      {AlertPortal}
    </ChuletuteAlertContext.Provider>
  );
};
