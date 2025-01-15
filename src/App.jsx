import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import FAQSection from './Pages/FAQ';
import RegistrationComponent from './Pages/Registration';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import PropertyListing from './Pages/PropertyListings';
import Gallery from './Pages/Gallery';  
import Testimonial from './Pages/Testimonials'; 
import ContactUs from './Pages/ContactUs';  

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route path='/' element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/services' element={<Services />} />
            <Route path='/propertylistings' element={<PropertyListing />} />
            <Route path='/faq' element={<FAQSection />} />
            <Route path='/registration' element={<RegistrationComponent />} />
            <Route path='/gallery' element={<Gallery />} />  
            <Route path='/testimonials' element={<Testimonial />} />  
            <Route path='/contact' element={<ContactUs />} />   
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
