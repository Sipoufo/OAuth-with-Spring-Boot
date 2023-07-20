import "./App.css";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import IndexAut from "./components/index";
import Auth from "./components/auth";
import Home from "./components/home";

function App() {
    return (
        <BrowserRouter forceRefresh={true}>
            <Routes>
                <Route path="/" element={<IndexAut />}>
                    <Route index element={<Auth />} />
                    <Route path="/home" element={<Home/>} />
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default App;
