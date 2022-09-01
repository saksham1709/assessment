import React, { useState } from 'react'

function Navbar() {
    const [click, setclick] = useState(false);
    const [navbar, setNavbar] = useState(false);
    const handleclick = () => {
        setclick(!click);
    }
    return (
        <div className="navbar">
            <div className="logo">
                <h1>LOGO</h1>
            </div>
            {/* <div className={navbar ? 'nav-toggle active' : 'nav-toggle'} onClick={handleclick}> */}
            <div className="nav-toggle" onClick={handleclick}>
                <div className={click ? 'line1' : 'line'}></div>
                <div className={click ? 'line2' : 'line'}></div>
                <div className={click ? 'line3' : 'line'}></div>
            </div>
            <div className="nav-links">
                <ul className={click ? 'link-list-mobile' : 'link-list'}>
                    <li className="links"><a href="">Home</a></li>
                    <li className="links"><a href="">Services</a></li>
                    <li className="links"><a href="">About Us</a></li>
                    <li className="links"><a href="">Careers</a></li>
                    <li className="link-button"><a href="">Contact Us</a></li>
                </ul>
            </div>
        </div>
    )
}

export default Navbar