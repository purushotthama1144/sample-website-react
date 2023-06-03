import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Banner from './Components/Banner/Banner';
import Highlights from './Components/Highlights/Highlights'
import Categories from './Components/Categories/Categories'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
        <Navbar />
        <Banner />
        <Highlights />
        <Categories />
        <Footer />
    </div>
  );
}

export default App;