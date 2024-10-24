import React from "react";
import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage";
import AddCar from "../pages/AddCar";

const MyAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add-car" element={<AddCar />} />
        </Routes>
    )
}

export default MyAppRoutes