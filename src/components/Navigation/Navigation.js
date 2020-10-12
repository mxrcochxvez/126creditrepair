import React from 'react';
import './Navigation.css';

export default function Navigation() {

    const handleNav = () => {
        const burger = document.querySelector(".burger");
        const nav = document.querySelector(".nav-links");
        const navLinks = document.querySelectorAll(".nav-links li");
        nav.classList.toggle('nav-active')

        navLinks.forEach((link, index) => {
            if (link.style.animation) {
                link.style.animation = ""
            } else {
                link.style.animation = `navLinkFade 0.5s ease forwards ${index / 7 + .4}s`;
            }
        });

        burger.classList.toggle('toggle');
    }

    return (
        <nav>
            <div className="logo">
                <h4>126 Credit Repair</h4>
            </div>
            <ul className="nav-links">
                <li>
                    <a href="/home">Home</a>
                </li>
                <li>
                    <a href="/about">About</a>
                </li>
            </ul>
            <div className="burger" onClick={() => handleNav()}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>
            </div>
        </nav>
    )
}
