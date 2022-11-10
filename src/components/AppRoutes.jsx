import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Results from './Results';
import Search from './Search';

const AppRoutes = () => {
    return(
        <Routes>
            <Route
                path="/search"
                element={<Search />}
            />
            <Route
                path="/results"
                element={<Results/>}
            />
            <Route path="*" element={<Search to="/search" replace />} />
        </Routes>
    );
};

export default AppRoutes;
