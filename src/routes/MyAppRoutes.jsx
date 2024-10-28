import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import CounterPage from "../pages/CounterPage";
import SummaryPage from "../pages/SummaryPage";
const MyAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/counter" element={<CounterPage />} />
            <Route path="/summary" element={<SummaryPage />} />
        </Routes>
    )
}

export default MyAppRoutes