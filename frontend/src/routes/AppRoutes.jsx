import React from 'react';
import {Routes, Route } from 'react-router-dom';
import BrowsePage from '../pages/BrowsePage';
import SigninPage from '../pages/SigninPage';
import SignupPage from '../pages/SignupPage';
import WelcomePage from '../pages/WelcomePage';
import ClientProfilePage from '../pages/ClientProfilePage';
import CounselorProfilePage from '../pages/CounselorProfilePage';

function AppRoutes() {
    return (
        <Routes>
            <Route path="/welcome" element={<WelcomePage />} />
            <Route path="/signin" element={<SigninPage />} />
            <Route path="/signup" element={<SignupPage />} />
            <Route path="/browse" element={<BrowsePage />} />
            <Route path="/client-profile" element={<ClientProfilePage />} />
            <Route path="/counselor-profile" element={<CounselorProfilePage />} />
        </Routes>
    );
}

export default AppRoutes;