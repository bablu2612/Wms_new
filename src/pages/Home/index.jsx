import React from "react";
import AboutUsSection from "./components/AboutUsSection";
import WhatWeDoSection from "./components/WhatWeDoSection";
import TeamMember from "./components/TeamMember";
import HomePageStyleCss from "./styles/HomePage.style";
import BlogSection from "./components/BlogSection";
import Testimonial from "./components/Testimonial";
import Faq from "./components/Faq";

function HomePage() {
  return (
    <HomePageStyleCss>
      <div className="mainHomepage_class">
        <AboutUsSection />
        <WhatWeDoSection />
        <TeamMember />
        <Faq />
      </div>
      <Testimonial />
      <BlogSection />
    </HomePageStyleCss>
  );
}

export default HomePage;
