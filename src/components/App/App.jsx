import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "../Layout/Layout";
import Home from "../../Pages/HomePage/HomePage";
import Header from "../Header/Header";
import Catalog from "../../Pages/CatalogPage/CatalogPage";
import Favorites from "../../Pages/FavoritesPage/FavoritesPage";
import { Box } from "./StyledApp";

console.log("App component is rendered"); 
function App() {
    return (
        <div>
            <Header />
        <Box>
            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Home />} />
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Navigate to='/' replace />} />
                </Routes>            
            </Box>
            </div>
    );
}

export default App;