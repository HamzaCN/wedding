import React from 'react';
import Card from 'react-bootstrap/Card';
import './weddingcards.css';

const WeddingCards = () => {
    return (
           <div className='marriageMain'>
           <Card  className='marriage'>
      <Card.Img variant="top" src="https://img.freepik.com/free-photo/beautiful-bride-groom-having-beach-wedding_23-2149043969.jpg?w=740&t=st=1665649660~exp=1665650260~hmac=a3d792e269ca6457dfb4c2b151049aaaa4208e9e3a4cf54f14101e1566a5d316" />
      <div className='bottomImages '>
        <div className='marriageImage'>
            <img  src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='wedding' className='fluid-img' />
        </div>
        <div className='marriageImage'>
        <img src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='wedding' className='fluid-img' />
        </div>
        <div className='marriageImgEnd'>
        <img  src='https://images.pexels.com/photos/2253870/pexels-photo-2253870.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1' alt='wedding' className='fluid-img' />
        </div>
      </div>
      <Card.Body className='bodyOfCard'>
        <Card.Title>Anna Roussos Photography.</Card.Title>
        <Card.Text className='weddingCardText'>
        15 photos · Islamabad, Punjab
        
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
}

export default WeddingCards;