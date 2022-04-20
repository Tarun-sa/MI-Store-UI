
import './App.css';
import data from './data/data.json'
import PreNavbar from './components/PreNavbar';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Slider from './components/Slider';
import Offers from './components/Offers';
import Heading from './components/Heading';
import StarProduct from './components/StarProduct';
import HotAccessoriesMenu from './components/HotAccessoriesMenu';
import HotAccessories from './components/HotAccessories';
import ProductReview from './components/ProductReview';
import Videos from './components/Videos';
import Banner from './components/Banner';
import Footer from './components/Footer';
import NavOption from './components/NavOption';

const start = data.banner.start

function App() {
  return (
    <div className="App">
      <Router >
        <PreNavbar />
        <Navbar />
        <NavOption miPhones={data.miPhones} redmiPhones={data.redmiPhones} tv={data.tv} laptop={data.laptop} fitnessAndLifeStyle={data.fitnessAndLifeStyle} home={data.home} audio={data.audio} accessories={data.accessories} />
        <Slider start={start} />
        <Offers offers={data.offer} />
        <Heading text="STAR PRODUCTS" />
        <StarProduct starProduct={data.starProduct} />
        <Heading text="HOT ACCESSORIES" />
        <HotAccessoriesMenu />
        <Routes >
          <Route exact path='/music'
            element={<HotAccessories music={data.hotAccessories.music} musicCover={data.hotAccessoriesCover.music} />} >
          </Route>
          <Route exact path='/devices'
            element={<HotAccessories smartDevice={data.hotAccessories.smartDevice} smartDeviceCover={data.hotAccessoriesCover.smartDevice} />} >
          </Route>
          <Route exact path='/home'
            element={<HotAccessories home={data.hotAccessories.home} homeCover={data.hotAccessoriesCover.home} />} >
          </Route>
          <Route exact path='/lifestyle'
            element={<HotAccessories lifeStyle={data.hotAccessories.lifeStyle} lifeStyleCover={data.hotAccessoriesCover.lifeStyle} />} >
          </Route>
          <Route exact path='/mobileaccessories'
            element={<HotAccessories mobileAccessories={data.hotAccessories.mobileAccessories} mobileAccessoriesCover={data.hotAccessoriesCover.mobileAccessories} />} >
          </Route>
        </Routes>
        <Heading text="PRODUCT REVIEWS" />
        <ProductReview productReview={data.productReviews} />
        <Heading text="VIDEOS" />
        <Videos videos={data.videos} />
        <Heading text="IN THE PRESS" />
        <Banner banner={data.banner.end} />
        <Footer footer={data.footer} />
      </Router>

    </div>
  );
}

export default App;
