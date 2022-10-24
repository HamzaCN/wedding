import React from 'react';
import axios from 'axios';
import {useState, useEffect} from 'react';
import ForumCards from '../../cards/forum/forumCards';
// import './forumcarousel.css';

function ForumCarousel(props) {
    const [myData, setMyData] = useState([]);
    const [isError, setIsError] = useState("");

    const getMyPostData = async () => {
      try {
        const res = await axios.get("https://api.atifsaeed.a2hosted.com/api/getData");
        setMyData(res.data.data);
      } catch (error) {
        setIsError(error.message);
      }
    };
  
    // NOTE:  calling the function
    useEffect(() => {
      getMyPostData();
    }, []);
  


    return (
        <div className='forumcarousel'>
              <div className='forumCardsContainer'>
            {myData.map (forumPostsData => {
             const { id, title, foumpostdesc, src, name, date } = forumPostsData;
              return(
                <ForumCards key={forumPostsData.id} title={forumPostsData.title} postdesc={forumPostsData.foumpostdesc} src={forumPostsData.src} name={forumPostsData.name} date={forumPostsData.date} />
              )
            }
              )
            }
            </div>
        </div>
    );
}

export default ForumCarousel;