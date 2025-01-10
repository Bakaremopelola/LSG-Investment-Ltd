import './Footer.css';
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaTiktok, FaWhatsapp, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope } from 'react-icons/fa'; // Import additional icons

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Website Links */}
        <div className="footer-links">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#services">Services</a></li>
            <li><a href="#contact">Contact Us</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>

        {/* Address Section */}
        <div className="footer-address">
          <h3>Contact Information</h3>
          <p><FaMapMarkerAlt /> Jendol superstore, Km1 opposite Akosoleri estate, <br/> Itoikin road, Ikorodu</p>
          <p><FaMapMarkerAlt /> Block F3, 212 HFP Shopping Complex, opposite <br/>
            Abraham Adesanya Estate, Lekki Ajah, Lagos</p>
          <p><FaEnvelope /> Email: <a href="mailto:https://lsginvestmentlimited@gmail.com">lsginvestmentlimited@gmail.com</a></p>
          <p><FaPhoneAlt /> Phone: <a href="tel:+2347072268735">+234 7072268735</a></p>
        </div>

        {/* Social Media Icons */}
        <div className="footer-social">
          <h3>Follow Us</h3>
          <div className="social-icons">
          <a href="https://www.facebook.com/lsginvestmentltd" target="_blank" rel="noreferrer" aria-label="Facebook">
  <FaFacebook /> Facebook: @lsginvestmentltd
</a>
<a href="https://www.twitter.com/lsginvestmentltd" target="_blank" rel="noreferrer" aria-label="Twitter">
  <FaTwitter /> Twitter: @lsginvestmentltd
</a>
<a href="https://www.instagram.com/lsginvestmentlimited" target="_blank" rel="noreferrer" aria-label="Instagram">
  <FaInstagram /> Instagram: @lsginvestmentltd
</a>
<a href="https://www.linkedin.com/company/lsginvestmentltd" target="_blank" rel="noreferrer" aria-label="LinkedIn">
  <FaLinkedin /> LinkedIn: @lsginvestmentltd
</a>
<a href="https://www.tiktok.com/@lsginvestmentltd" target="_blank" rel="noreferrer" aria-label="TikTok">
  <FaTiktok /> TikTok: @lsginvestmentltd
</a>
<a href="https://wa.me/2347072268735" target="_blank" rel="noreferrer" aria-label="WhatsApp">
  <FaWhatsapp /> WhatsApp: +2347072268735
</a>

          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} LSG Investment Limited. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
