import React from 'react';
import IconsCards from '../../cards/icons/IconsCards';
import HomeIconsData from './IconsCardsData.json'
import './homeicons.css';
function HomeIcons(props) {
    return (
        <div className='HomeIcons'>
            {HomeIconsData.map (HomeIconsData => {
             const { id, src, title} = HomeIconsData;
              return(
                <IconsCards key={HomeIconsData.id} src={HomeIconsData.src} title={HomeIconsData.title} />
              )
            }
              )
            }
        </div>
    );
}

export default HomeIcons;