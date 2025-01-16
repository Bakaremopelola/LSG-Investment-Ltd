import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import HomePage from './Pages/HomePage';
import FAQSection from './Pages/FAQ';
import RegistrationComponent from './Pages/Registration';
import AboutUs from './Pages/AboutUs';
import Services from './Pages/Services';
import PropertyListing from './Pages/PropertyListings';
import Gallery from './Pages/Gallery';
import Testimonial from './Pages/Testimonials';
import ContactUs from './Pages/ContactUs';
import Login from './Pages/Login';
import NotFound from './Pages/NotFound';
import Dashboard from './Pages/admin/Dashboard';
import Analytics from './Pages/admin/Analytics';
import Properties from './Pages/admin/Properties';
import Users from './Pages/admin/Users';
import Settings from './Pages/admin/Settings';
import AdminLayout from './Layout/adminLayout.jsx/AdminLayout';

function App() {
  return (
    <Router>
      <Routes>
        {/* Public routes with MainLayout */}
        <Route path="/" element={<MainLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/services" element={<Services />} />
          <Route path="/propertylistings" element={<PropertyListing />} />
          <Route path="/faq" element={<FAQSection />} />
          <Route path="/registration" element={<RegistrationComponent />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/testimonials" element={<Testimonial />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/login" element={<Login />} />
        </Route>

        {/* Admin routes with AdminLayout */}
        <Route path="/admin/*" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="analytics" element={<Analytics />} />
          <Route path="properties" element={<Properties />} />
          <Route path="users" element={<Users />} />
          <Route path="settings" element={<Settings />} />
        </Route>

        {/* Catch-all route for 404 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Router>
  );
}

export default App;
