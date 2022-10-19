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

  const App = () => {
    return (
      <>
        <div className="App">
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
