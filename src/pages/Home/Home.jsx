import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MainHeader from '../../components/header/mainheader/MainHeader';
import ForumCarousel from '../../components/carousels/forum/ForumCarousel';
import HomeIcons from '../../components/carousels/homeIcons/HomeIcons';
function Home(props) {
    return (
        <div className='HomePage'>
            <Navbar />
            <MainHeader />
            <HomeIcons />
        </div>
    );
}

export default Home;