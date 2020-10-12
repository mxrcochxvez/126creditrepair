import React from 'react';
import './style.css';

import Hero from '../components/Hero/Hero';

export default function Homepage() {
    return (
        <div>
            <Hero
                title="Putting you in the right financial setting!"
                description="Your credit score where you want it to be"
            >
                <button className="call-to-action">Let's work together</button>
            </Hero>
        </div>
    )
}
