import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CampaignDetails, CreateCampaign, LandingPage, Profile } from './Pages';

export default function App() {
    return (
        <div>
            
            <Routes>
                <Route path='/' element={<LandingPage />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/create-campaign" element={<CreateCampaign />} />
                <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            </Routes>
        </div>
    );
}