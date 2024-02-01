import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { CampaignDetails, CreateCampaign, Home, Profile } from './Pages';

export default function App() {
    return (
        <div>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='/profile' element={<Profile />} />
                <Route path="/create-campaign" element={<CreateCampaign />} />
                <Route path="/campaign-details/:id" element={<CampaignDetails />} />
            </Routes>
        </div>
    );
}