import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CounterPage from "../pages/CounterPage";
const MyAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<CounterPage />} />
        </Routes>
    )
}

export default MyAppRoutes