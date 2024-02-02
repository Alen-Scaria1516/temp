import React from 'react';
import { About, HomeNavbar } from '../components';


function Home() {
    return (
        <div className="h-full w-full relative">
            <img src={'./Image/Greenwashing.png'} className="w-full h-auto object-cover
             absolute mix-blend-overlay"/>
            <HomeNavbar />
            <About />
        </div>
    );
}

export default Home