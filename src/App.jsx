import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import FAQSection from './Pages/FAQ';
import RegistrationComponent from './Pages/Registration';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import PropertyListing from './Pages/PropertyListings';
import Gallery from './Pages/Gallery';  // Import new Gallery component
import Testimonial from './Pages/Testimonials';  // Import new Testimonial component
import ContactUs from './Pages/ContactUs';  // Import new ContactUs component

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* Main Layout Route with Nested Child Routes */}
          <Route path='/' element={<MainLayout />}>
            {/* Child Routes */}
            <Route index element={<HomePage />} />
            <Route path='/about' element={<AboutUs />} />
            <Route path='/services' element={<Services />} />
            <Route path='/propertylistings' element={<PropertyListing />} />
            <Route path='/faq' element={<FAQSection />} />
            <Route path='/registration' element={<RegistrationComponent />} />
            
            {/* New Routes */}
            <Route path='/gallery' element={<Gallery />} />  {/* Gallery Page */}
            <Route path='/testimonials' element={<Testimonial />} />  {/* Testimonials Page */}
            <Route path='/contact' element={<ContactUs />} />  {/* Contact Us Page */}
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
