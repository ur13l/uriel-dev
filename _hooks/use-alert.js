import { createContext, useContext, useReducer, useState } from "react";

const AlertContext = createContext();
export const useAlertContext = () => useContext(AlertContext);

export const AlertProvider = ({ children }) => {
  const [show, display] = useReducer((v) => !v, false);
  const [message, setMessage] = useState(
    "Hola mis amigos, esto es un mensaje de prueba, no creo que todo quepa muy bien, pero hacemos el intento."
  );
  const [color, setColor] = useState("green-500");

  const displayAlert = (message, ms = 5000, color = "green-500") => {
    setMessage(message);
    setColor(color);
    display();
    setTimeout(() => {
      display();
    }, ms);
  };

  const v = { displayAlert };

  return (
    <AlertContext.Provider value={v}>
      <>{children}</>
      <div
        className={`bottom-0 md:bottom-auto md:top-10 md:right-10 text-white z-10 py-5 px-10 w-full max-h-xs md:max-w-xs md:rounded-xl 
        transition-all fixed duration-200 ease-in-out transform
        bg-${color} ${
          show
            ? "opacity-100"
            : "opacity-0 pointer-events-none translate-y-96 md:translate-y-0 md:translate-x-96"
        }`}
      >
        {message}
      </div>
    </AlertContext.Provider>
  );
};
