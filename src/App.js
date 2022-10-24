import VendorCards from './components/cards/vendors/VendorCards';
import './App.css';
import WeddingCards from './components/cards/wedding/WeddingCards';
import IconsCards from './components/cards/icons/IconsCards';
import Ideas from './components/cards/ideas/Ideas';
import BlogCards from './components/cards/blog/BlogCards';
import DressCatalog from './components/cards/dresscatalog/DressCatalog';
import ForumCards from './components/cards/forum/forumCards';
import forumCardsData from './components/cards/forum/forumCardsData.json'
import DestinationMain from './components/carousels/destination/DestinationMain';
import MainHeader from './components/header/mainheader/MainHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import Home from './pages/Home/Home';
  const App = () => {

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
      <>
        <div className="App">
        <Home />
            {/* <div className='forumCardsContainer'>
            {myData.slice(0,4).map (forumPostsData => {
             const { id, title, foumpostdesc, src, name, date } = forumPostsData;
              return(
                <ForumCards key={forumCardsData.id} title={forumPostsData.title} postdesc={forumPostsData.foumpostdesc} src={forumPostsData.src} name={forumPostsData.name} date={forumPostsData.date} />
              )
            }
              )
            }
            </div> */}
        </div>
        </>
  );

}

export default App;
