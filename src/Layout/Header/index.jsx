import React from 'react';
import HeaderStyleCss from './components/Header.style';
import MainHeader from './components/MainHeader';
import HomeBanner from './components/HomeBanner';

function HeaderLayout() {
    return (
        <HeaderStyleCss>
            <MainHeader />
            <HomeBanner />
        </HeaderStyleCss>
    )
}

export default HeaderLayout;