import React from 'react';
import { About, HomeNavbar } from '../components';
import ContentSection1 from '../components/ContentSection1';
import ContentSection2 from '../components/ContentSection2';
import {img1,img2} from '../assets/index.js';

function LandingPage() {
    return (
        <div>
            <div className="h-screen  w-full relative">
                <img src={'./Image/Greenwashing.png'} className="w-full h-screen  object-cover
                absolute mix-blend-overlay"/>
                <HomeNavbar />
                <About />
            </div>
            <div>
                <ContentSection1 img = {img1} heading ="What is Greenwashing ?" para ="Greenwashing isn't about cleaning your lawn—it's about misleading marketing. Companies use it to make you think their products are environmentally friendly when they aren't."/>  
                <ContentSection2 img = {img2} heading ="Why even care about Greenwashing ?" para ="Misleads you to pay a premium for 'green' features that might not even exist."/>  
            </div>
        </div>

    );
}

export default LandingPage;