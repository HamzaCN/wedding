import React from 'react';
import './forumcards.css';
import { useState, useEffect } from 'react';

const ForumCards = (props) => {

    return (
        <div className='forumCards'>
            <div className='forumCardsData'>
                <h2>{props.title}</h2>
                <p>{props.forumpostdesc}</p>
            </div>
            <div className='forumPostAuthor'>
                <div className='forumPostAuthorImg'> <img src={props.src} alt='coder' /></div>
                <div className='forumPostAuthorName'>{props.name}</div>
                <div className='forumPostAuthorDate'> {props.date}</div>
            </div>
        </div>
    );
}


export default ForumCards;