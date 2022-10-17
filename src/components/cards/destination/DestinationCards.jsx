import React from 'react';
import './destinationcards.css';
function DestinationCards(props) {
    return (
        <div className='destinationCards'>
            <img className='destinationCardsImg' src="https://media.istockphoto.com/photos/bottom-bay-barbados-paradise-beach-on-the-caribbean-island-of-coast-picture-id856812942?k=20&m=856812942&s=612x612&w=0&h=ViT3sRegRmW45INiTnOe8ne4vATwdm8TA2UrU29EnpA=" alt='destination' />
            <div className='destinationCardText'>
                barbados beach
            </div>
        </div>
    );
}

export default DestinationCards;