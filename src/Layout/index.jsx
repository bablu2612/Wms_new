import React from 'react'
import HeaderLayout from './Header';
import FooterLayout from './Footer';

const Layout = ({ children }) => {
    return (
        <div className='main_layout_section'>
            <HeaderLayout />
            {children}
            <FooterLayout />
        </div>
    )
}

export default Layout;