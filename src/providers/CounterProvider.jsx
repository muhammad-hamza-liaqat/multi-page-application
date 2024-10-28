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


// export const CounterProvider = ({ children }) => {
//     const [count, setCount] = useState(0);

//     // Sync across tabs
//     useEffect(() => {
//         const handleStorageChange = (e) => {
//             if (e.key === "count") {
//                 setCount(parseInt(e.newValue, 10) || 0);
//             }
//         };

//         // Add storage event listener to sync count across tabs
//         window.addEventListener("storage", handleStorageChange);
//         return () => {
//             window.removeEventListener("storage", handleStorageChange);
//         };
//     }, []);

//     useEffect(() => {
//         localStorage.removeItem("count");
//     }, []);

//     const increase = () => {
//         const newCount = count + 1;
//         setCount(newCount);
//         localStorage.setItem("count", newCount);
//     };

//     const decrease = () => {
//         const newCount = count > 0 ? count - 1 : 0;
//         setCount(newCount);
//         localStorage.setItem("count", newCount);
//     };

//     return (
//         <CounterContext.Provider value={{ count, increase, decrease }}>
//             {children}
//         </CounterContext.Provider>
//     );
// };

