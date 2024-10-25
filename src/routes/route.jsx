import React from "react";
import { Route, Routes } from "react-router-dom"
import Homepage from "../pages/Homepage";
import AddCar from "../pages/AddCar";
import News from "../pages/News";
import NewsDetail from "../components/News/NewsDetails";

const MyAppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/add-car" element={<AddCar />} />
            <Route path="/news" element={<News />} />
            <Route path="/news/:newsId" element={<NewsDetail />} />
        </Routes>
    )
}

export default MyAppRoutes