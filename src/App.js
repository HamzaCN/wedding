import VendorCards from './components/cards/vendors/VendorCards';
import './App.css';
import WeddingCards from './components/cards/wedding/WeddingCards';
import IconsCards from './components/cards/icons/IconsCards';
import Ideas from './components/cards/ideas/Ideas';
import BlogCards from './components/cards/blog/BlogCards';

function App() {
  return (
    <div className="App">
    <VendorCards />
     <WeddingCards />
     <IconsCards />
     <Ideas />
     <BlogCards />


    </div>
  );
}

export default App;
