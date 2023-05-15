import React from 'react';
import AboutUsSection from './components/AboutUsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import TeamMember from './components/TeamMember';
import HomePageStyleCss from './styles/HomePage.style';

function HomePage() {
    return (

        <HomePageStyleCss className='mainHomepage_class'>
            <AboutUsSection />
            <WhatWeDoSection />
            <TeamMember />
        </HomePageStyleCss>
    )
}

export default HomePage;