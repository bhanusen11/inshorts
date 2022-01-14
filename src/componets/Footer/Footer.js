import React from 'react'
import './Footer.css';

export const Footer = () => {
    return (<div className="footer">
        <span className="name">
            Inshorts clone made by -{" "}
            <a href="https://www.linkedin.com/in/bhanu-prakash-sen-18a8a9142/" target="__blank">
                Bhanu Sen
            </a>
        </span>
        <hr style={{ width: "90%" }} />
        <div className="iconContainer">
            <a href="https://www.instagram.com/bhanu/" target="__blank">
                <i className="fab fa-instagram-square fa-2x"></i>
            </a>
            <a href="https://www.linkedin.com/in/bhanu-prakash-sen-18a8a9142/" target="__blank">
                <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="https://piyushjsx.netlify.app/" target="__blank">
                <i className="fas fa-link fa-2x"></i>
            </a>
        </div>
    </div>
    )
}
