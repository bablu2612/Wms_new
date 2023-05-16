import React from 'react';
import AboutUsSection from './components/AboutUsSection';
import WhatWeDoSection from './components/WhatWeDoSection';
import TeamMember from './components/TeamMember';
import HomePageStyleCss from './styles/HomePage.style';
import BlogSection from './components/BlogSection';

function HomePage() {
    return (

        <HomePageStyleCss className='mainHomepage_class'>
            <AboutUsSection />
            <WhatWeDoSection />
            <TeamMember />
            <BlogSection />
        </HomePageStyleCss>
    )
}

export default HomePage;