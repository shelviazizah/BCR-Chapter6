import { useState } from 'react';
import '../assets/css/style.css';
import imgMenu from '../assets/images/menu.svg';

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    function toggleMenu() {
        setShowMenu(!showMenu);
    }

    return (
        <nav className="container-global bg-grey">
            <div id="logo"></div>
            <ul className="flex-row gap-32 no-mp nav-list">
                <li>
                    <a className="link-no-decoration" href="#our-services">
                        Our Services
                    </a>
                </li>
                <li>
                    <a className="link-no-decoration" href="#why-us">
                        Why Us
                    </a>
                </li>
                <li>
                    <a className="link-no-decoration" href="#testimonial">
                        Testimonial
                    </a>
                </li>
                <li>
                    <a className="link-no-decoration" href="#faq">
                        FAQ
                    </a>
                </li>
                <li>
                    <button className="btn btn-success">Register</button>
                </li>
            </ul>
            <button
                id="sidebar-menu"
                className="btn-burger-menu"
                onClick={toggleMenu}
                aria-controls="offcanvasRight"
            >
                <img src={imgMenu} alt="Burger Menu" width="24px" height="24px" />
            </button>
            {showMenu && (
                <div
                    className="offcanvas offcanvas-end"
                    tabIndex="-1"
                    id="offcanvasRight"
                    aria-labelledby="offcanvasRightLabel"
                >
                    <div className="offcanvas-header">
                        <h5 id="offcanvasRightLabel">BCR</h5>
                        <button
                            type="button"
                            className="btn-close text-reset"
                            onClick={toggleMenu}
                            aria-label="Close"
                        ></button>
                    </div>
                    <div className="offcanvas-body">
                        <ul className="flex-column gap-16 no-mp">
                            <li>
                                <a className="link-no-decoration" href="#our-services">
                                    Our Services
                                </a>
                            </li>
                            <li>
                                <a className="link-no-decoration" href="#why-us">
                                    Why Us
                                </a>
                            </li>
                            <li>
                                <a className="link-no-decoration" href="#testimonial">
                                    Testimonial
                                </a>
                            </li>
                            <li>
                                <a className="link-no-decoration" href="#faq">
                                    FAQ
                                </a>
                            </li>
                            <li>
                                <button className="btn btn-success">Register</button>
                            </li>
                        </ul>
                    </div>
                </div>
            )}
        </nav>
    );
}

export default Navbar;