import React, { useState, useEffect } from 'react';
import Hamburger from 'hamburger-react';
import './Navbar.css';


function Navbar() {
    const [toggleMenu, setToggleMenu] = useState(false)

    return (
        <header id="header">
            <div className="container container-medium-width">
                <div className="header bg-white">

                    <div className="logo">
                        <a href="#">
                            <img src="images/aloha-header.svg" alt="Aloha" className="img-fluid" />
                        </a>
                    </div>
                    <div className="hamburger-menu" >
                        <Hamburger direction="right" />
                    </div>
                    <div className="bg-layer"></div>
                    <div className="menu_button_block">
                        <div className="custom_menu">
                            <ul>
                                <li>
                                    <a href="/home">
                                        Home
                                    </a>
                                </li>
                                <li><a href="/">surfing</a></li>
                                <li><a href="/">Hula</a></li>
                                <li><a href="/">Vulcano</a></li>
                            </ul>
                        </div>
                        <div className="button_block">
                            <button className="button">Book a trip</button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

// openModal = (event) => {
//     document.body.classList.add('modal-open');
//     this.setState({ showModal: true });
// }
// hideModal = (event) => {
//     document.body.classList.remove('modal-open');
//     this.setState({ showModal: false });
// }

export default Navbar