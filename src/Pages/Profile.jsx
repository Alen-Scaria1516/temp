import React, { useState, useEffect } from 'react'

import { DisplayCampaigns } from '../components';
import { useStateContext } from '../context';
import { Sidebar, Navbar } from '../components';

const Profile = () => {
    
    const [isLoading, setIsLoading] = useState(false);
    const [campaigns, setCampaigns] = useState([]);

    const { address, contract, getCampaigns } = useStateContext();

    console.log(address)

    const fetchCampaigns = async () => {
        setIsLoading(true);
        const data = await getCampaigns();
        setCampaigns(data);
        setIsLoading(false);
    }

    useEffect(() => {
        if (contract) fetchCampaigns();
    }, [address, contract]);

    return (
        <div className="relative sm:-8 p-4 bg-gradient-to-r from-color-3 to-color-5 min-h-screen flex flex-row">
            <div className="sm:flex hidden mr-10 relative">
                <Sidebar />
            </div>

            <div className="flex-1 max-sm:w-full max-w-[1280px] mx-auto sm:pr-5">
                <Navbar />

                <DisplayCampaigns
                    title="All Campaigns"
                    isLoading={isLoading}
                    campaigns={campaigns}
                />
            </div>
        </div>
    )
}

export default Profile