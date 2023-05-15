import React from 'react';
import FooterStyleCss from './components/Footer.style';
import MainFooter from './components/MainFooter';

function FooterLayout() {
    return (
        <FooterStyleCss className='main_footer_section'>
            <MainFooter />
        </FooterStyleCss>
    )
}

export default FooterLayout;