import VendorCards from './components/cards/vendors/VendorCards';
import './App.css';
import WeddingCards from './components/cards/wedding/WeddingCards';
import IconsCards from './components/cards/icons/IconsCards';
import Ideas from './components/cards/ideas/Ideas';
import BlogCards from './components/cards/blog/BlogCards';
import DressCatalog from './components/cards/dresscatalog/DressCatalog';
import ForumCards from './components/cards/forum/forumCards';
import forumCardsData from './components/cards/forum/forumCardsData.json'
import DestinationMain from './components/carousels/DestinationMain';
import MainHeader from './components/header/mainheader/MainHeader';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from './components/navbar/Navbar';
import { useState, useEffect } from 'react';


  const App = () => {
        const [data, setData] = useState(null);
 const [loading, setLoading] = useState(true);
 const [error, setError] = useState(null);

//  const fetchData = async () => { 
//     try {
//       const response = await fetch('https://api.atifsaeed.a2hosted.com/api/getData');
//       const json = await response.json();
//       setData(json);
//     } catch (error) {
//       setError(error);
//     } finally {
//       setLoading(false);
//     }
//   };


//  useEffect(() => {
//     fetchData();
//    }, []);
//    console.log(data.data[0].title);
  
    return (
      <>
        <div className="App">
            <Navbar />
            <MainHeader />
            <VendorCards />
            <WeddingCards />
            <IconsCards />
            <Ideas />
            <DestinationMain />
            <BlogCards />
            <DressCatalog />
            <div className='forumCardsContainer'>
            {
              forumCardsData.map(forumCardsData => {
              return(
                <ForumCards title={forumCardsData.title} forumPostDesc={forumCardsData.forumPostDesc} src={forumCardsData.src} name={forumCardsData.name} date={forumCardsData.date} />
              )
            }
              )
            }
            </div>
        </div>
        </>
  );

}

export default App;
