import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [lastDirection, setLastDirection] = useState("");

    return (
        <GlobalStateContext.Provider
            value={{ count, setCount, lastDirection, setLastDirection }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};