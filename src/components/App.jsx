import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Layout/Layout";
import Home from "../Pages/HomePage/HomePage";
// import AdvertsList from "./AdvertsList";
import Catalog from "../Pages/CatalogPage/CatalogPage";
import Favorites from "../Pages/FavoritesPage/FavoritesPage";

function App() {
    return (
        <div className="App">

            <Routes>
                <Route path="/" element={<Layout />} />
                <Route index element={<Home />} />
                {/* <Route path="/adverts" element={<AdvertsList />} /> */}
                <Route path="/catalog" element={<Catalog />} />
                <Route path="/favorites" element={<Favorites />} />
                <Route path="*" element={<Navigate to='/' replace />} />
                </Routes>            
            </div>
    );
}

export default App;