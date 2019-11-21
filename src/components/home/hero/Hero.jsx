import React from 'react';
import './Hero.css'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Hero = () => (
    <div className="hero-container">
        <div className="hero-background" />

        <div className="hero-layer">
            <h1>Khallil Bailey</h1>
            <p>
                “Art and love are the same thing: It’s the process of seeing yourself in things that are not you.”
            </p>
            <p>
                <span>- Chuck Klosterman</span>
            </p>

            <AnchorLink href="#about"><i class="fa fa-chevron-down" aria-hidden="true"></i></AnchorLink>
        </div>
    </div>
)

export default Hero;