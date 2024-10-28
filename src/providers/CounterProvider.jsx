import React, { useEffect, useState } from "react";
import CounterContext from "../context/CounterContext";

export const CounterProvider = ({ children }) => {
    const [count, setCount] = useState(0);
    // 
    useEffect(() => {
        console.log("value changed")
    }, [count])

    const increase = () => {
        setCount((prevCount) => prevCount + 1);
    };

    const decrease = () => {
        setCount((prevCount) => (prevCount > 0 ? prevCount - 1 : 0));
    };

    return (
        <CounterContext.Provider value={{ count, increase, decrease }}>
            {children}
        </CounterContext.Provider>
    );
};
