import './App.css';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
import AboutUs from './pages/AboutUs';
import FAQs from './pages/FAQs';
import Men from './pages/Men';
import MensProduct from './pages/MensProduct'
import Women from './pages/Women';
import WomensProduct from './pages/WomensProduct'
import ContactUs from './pages/ContactUs'


function App() {
  return (
    <div className="App">
      <Navbar />

      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/Cart' element={<Cart />}/>
        <Route path='/AboutUs' element={<AboutUs />}/>
        <Route path='/FAQs' element={<FAQs />}/>
        <Route path='/Men' element={<Men />}/>
        <Route path='/Men/:id' element={<MensProduct />}/>
        <Route path='/Women' element={<Women />}/>
        <Route path='/Women/:id' element={<WomensProduct />}/>
        <Route path='/CantactUs' element={<ContactUs />}/>
      </Routes>
    </div>
  );
}

export default App;
