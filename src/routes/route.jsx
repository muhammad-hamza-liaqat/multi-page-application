import React from "react";
import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage";

const MyAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
        </Routes>
    )
}

export default MyAppRoutes