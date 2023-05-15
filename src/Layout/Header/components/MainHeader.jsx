import { useState } from "react";
import { NavLink } from "react-router-dom";

const MainHeader = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <header className="Header_section">
            <div className="welcomeOurIt_class ">
                <div className="welcomeText">
                    <p>Welcome to our IT Solution Company</p>
                </div>
                <div className="contect_info">
                    <div className="email">
                        <span>icon</span><span>support@gmail.com</span>
                    </div>
                    <div className="loction">
                        <span>icon</span><span>515 Carriage Court, CA, 92236 USA</span>
                    </div>
                </div>
            </div>
            <div className="header">
                <div className="logo">
                    <NavLink href="/">My Logo</NavLink>
                </div>
                <button className="toggle" onClick={handleMenuClick}>
                    <span className="icon"></span>
                </button>
                <nav className={menuOpen ? "navOpen" : "navClosed"}>
                    <ul>
                        <li>
                            <NavLink href="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink href="/about">About</NavLink>
                        </li>
                        <li>
                            <NavLink href="/services">Services</NavLink>
                        </li>
                        <li>
                            <NavLink href="/blog">Blog</NavLink>
                        </li>
                    </ul>
                </nav>
            </div>

        </header >
    );
}

export default MainHeader;
