import React from 'react';
import Card from 'react-bootstrap/Card';
import './vendorcards.css';
import StarRoundedIcon from '@mui/icons-material/StarRounded';
import LocalOfferOutlinedIcon from '@mui/icons-material/LocalOfferOutlined';
import AddCardOutlinedIcon from '@mui/icons-material/AddCardOutlined';


const VendorCards= (props) => {
    return (
        <div>
           <Card  className='vendorCards' style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://cdn0.weddingwire.com/vendor/811385/3_2/320/jpg/marina-wedding-in-athens-riviera-greece45_51_583118-157539341410414.webp" />
      <Card.Body className='cardbody'>
        <Card.Title>Anna Roussos Photography</Card.Title>
        <Card.Text>
        <StarRoundedIcon className='icon-rating'/>
        <span className='ratings'>{5.0}</span>
        <span className='ratingNumber'>(30)</span>
        <span className='city'>Lahore, Punjab</span>
        <br />
        <div className='discountDeals'>
        <LocalOfferOutlinedIcon className='v-icon' />
        <span className='vendorDeals'>1 deal</span>
        <span className='vendorDiscount'> -10%</span>
        <br />
        <span><AddCardOutlinedIcon className='v-icon' /></span>
        <span className='vendorDeals'>PKR 25,000</span>
        </div>
        </Card.Text>
      </Card.Body>
    </Card>
        </div>
    );
}

export default VendorCards;