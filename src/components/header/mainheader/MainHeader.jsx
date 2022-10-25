import React from "react";
import './mainheader.css';

function MainHeader(props) {
    return (
        <section className='heromain'>
                <div className="hero-left">
                <div className="copy">
                    <div className="text-hero-bold">
                    Let's Find your wedding team
                    </div>
                    <div className="text-hero-regular">
                    Search over 250,000 local professionals with reviews, pricing, availability, and more
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