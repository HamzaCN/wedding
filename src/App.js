import VendorCards from './components/cards/vendors/VendorCards';
import './App.css';
import WeddingCards from './components/cards/wedding/WeddingCards';
import IconsCards from './components/cards/icons/IconsCards';
import Ideas from './components/cards/ideas/Ideas';
import BlogCards from './components/cards/blog/BlogCards';
import DestinationCards from './components/cards/destination/DestinationCards';
import DressCatalog from './components/cards/dresscatalog/DressCatalog';
import ForumCards from './components/cards/forum/forumCards';
import forumCardsData from './components/cards/forum/forumCardsData.json'

  const App = () => {
    return (
      <>
        <div className="App">
            <VendorCards />
            <WeddingCards />
            <IconsCards />
            <Ideas />
            <BlogCards />
            <DestinationCards />
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
