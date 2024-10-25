import React from "react";
import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage";
import AddCar from "../pages/AddCar";
import News from "../pages/News";

const MyAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/all-news" element={<News />} />
        </Routes>
    )
}

export default MyAppRoutes