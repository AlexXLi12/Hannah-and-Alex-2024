import React, { createContext, useState } from "react";

export const GlobalStateContext = createContext();

export const GlobalStateProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    const [lastDirection, setLastDirection] = useState("");
    const [interacted, setInteracted] = useState(false);
    return (
        <GlobalStateContext.Provider
            value={{ count, setCount, lastDirection, setLastDirection, interacted, setInteracted }}
        >
            {children}
        </GlobalStateContext.Provider>
    );
};