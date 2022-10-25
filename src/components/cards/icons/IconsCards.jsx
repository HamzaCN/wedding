import React from 'react';
import './iconscards.css';


const IconsCards =(props) =>{
    return (
        <div className='iconsCards'>
            <div className='iconsCardsImg'>
            <img src={props.src} alt='icons' className='fluid-img' />
            </div>
            <div className='iconsCardsText'>
                <h3>{props.title}</h3>
            </div>
        </div>
       
    );
}

export default IconsCards;