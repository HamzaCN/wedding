import React from 'react';
import './dresscatalog.css';

function DressCatalog(props) {
    return (
        <div className='dressCatalogCatalog'>
            <div className='dressCatalogCards'>
            <img className='dressCatalogCardsImg' src="https://images.pexels.com/photos/157757/wedding-dresses-fashion-character-bride-157757.jpeg?cs=srgb&dl=pexels-pixabay-157757.jpg&fm=jpg" alt='destination' />
            <div className='dressCatalogCardText'>
            Wedding Dresses
            </div>
        </div>
        </div>
    );
}

export default DressCatalog;