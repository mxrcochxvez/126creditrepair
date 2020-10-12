import React from 'react';
import styled from 'styled-components';

const styledNav = styled.nav`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-height: 8vh;
    background-color: #5d4954;

    .logo {
        color: rgb(226, 226, 226);
        text-transform: uppercase;
        letter-spacing: 5px;
        font-size: 1.5rem;
    }
`

export default function Navigation() {
    return (
        <styledNav>
            <div class="logo">
                <h4>The Nav</h4>
            </div>
            <ul class="nav-links">
                <li>
                    <a href="#">Home</a>
                </li>
                <li>
                    <a href="#">About</a>
                </li>
                <li>
                    <a href="#">Work</a>
                </li>
                <li>
                    <a href="#">Projects</a>
                </li>
            </ul>
            <div class="burger">
                <div class="line1"></div>
                <div class="line2"></div>
                <div class="line3"></div>
            </div>
        </styledNav>
    )
}
