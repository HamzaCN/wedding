import React from 'react';
import './destinationcards.css';
function DestinationCards(props) {
    return (
        <div className='destinationCards'>
            <img className='destinationCardsImg' src={props.src} alt='destination' />
            <h2 className='destinationCardText'>{props.title}</h2>
        </div>
    );
}

export default DestinationCards;