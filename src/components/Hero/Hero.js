import React from 'react';
import './Hero.css';

export default function Hero(props) {
    return (
        <div className="hero-container">
            {props.title ? <h1>{props.title}</h1> : <h1>Please add a title prop.</h1>}
            {props.description ? <p>{props.description}</p> : <p>Please add a description.</p>}
            
            {props.children}
        </div>
    )
}
