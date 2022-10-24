import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import MainHeader from '../../components/header/mainheader/MainHeader';
import ForumCarousel from '../../components/carousels/forum/ForumCarousel';
function Home(props) {
    return (
        <div className='HomePage'>
            <Navbar />
            <MainHeader />
            <ForumCarousel />
        </div>
    );
}

export default Home;