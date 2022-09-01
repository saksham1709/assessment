import React from 'react'

function Footer() {
    return (
        <div className="footer-container">
            <div className="footer-logo"><h1>LOGO</h1></div>
            <div className="footer-link-container">
                <div className="footer-link-row">
                    <ul className="footer-link-list">
                        <li className="footer-links"><h4>COMPANY</h4></li>
                        <li className="footer-links"><a href="">Services</a></li>
                        <li className="footer-links"><a href="">About Us</a></li>
                        <li className="footer-links"><a href="">Career</a></li>
                        <li className="footer-links"><a href="">Get In Touch</a></li>
                    </ul>
                </div>
                <div className="footer-link-row">
                    <ul className="footer-link-list">
                        <li className="footer-links"><h4>WEB DEVELOPMENT</h4></li>
                        <li className="footer-links"><a href="">Asp.net & Mvc</a></li>
                        <li className="footer-links"><a href="">PHP / Wordpress</a></li>
                        <li className="footer-links"><a href="">Java</a></li>
                        <li className="footer-links"><a href="">Drupal</a></li>
                        <li className="footer-links"><a href="">Magneto</a></li>
                    </ul>
                </div>
                <div className="footer-link-row">
                    <ul className="footer-link-list">
                        <li className="footer-links"><h4>OTHER SERVICES</h4></li>
                        <li className="footer-links"><a href="">Web App</a></li>
                        <li className="footer-links"><a href="">Mobile App</a></li>
                        <li className="footer-links"><a href="">Quality Assurance</a></li>
                    </ul>
                </div>
                <div className="footer-link-row">
                <ul className="footer-link-list">
                        <li className="footer-links"><h4>FOLLOW US</h4></li>
                        <li className="footer-links"><a href="">Facebook</a></li>
                        <li className="footer-links"><a href="">LinkedIn</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Footer