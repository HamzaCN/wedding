import React from "react";
import './mainheader.css';

function MainHeader(props) {
    return (
        <section className='heromain'>
                <div className="hero-left">
                <div className="copy">
                    <div className="text-label">
                    Changes your webiste more better
                    </div>
                    <div className="text-hero-bold">
                    Grew Up your mind in the...
                    </div>
                    <div className="text-hero-regular">
                    Lorwemm dolor sit amet, consectetur adipiscing elit.
                    </div>
                    <div className="cta">
                    <button className="btn btn-primary shadow-none">Get Started</button>
                    <button className="btn btn-secondary shadow-none ms-3">Get Started</button>
                    </div>
                </div>
                </div>
                <div className="hero-right">
                <img src="https://wedbook.in/wp-content/uploads/2022/07/4.-Romantic-Wedding-Couple-Poses-1024x684.jpg" alt="wedding couple" />
                </div>


        </section>
    );
}

export default MainHeader;