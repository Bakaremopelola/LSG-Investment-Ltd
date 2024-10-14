import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import MainLayout from './Layout/MainLayout';
import FAQSection from './Pages/FAQ';
import RegistrationComponent from './Pages/Registration';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import PropertyListing from './Pages/PropertyListings';

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
            <Route path='/faq' element ={<FAQSection/> }/>
            <Route path='/registration' element ={<RegistrationComponent/>}/>
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
