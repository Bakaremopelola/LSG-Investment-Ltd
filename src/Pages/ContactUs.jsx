
import "./Contact.css";

const ContactUs = () => {
  return (
    <div className="contact-us-page">
      {/* Locations Section */}
      <section className="locations">
        <h2>Our Locations</h2>
        <ul>
          <li><strong>[City Name]:</strong> Address, Phone Number, Email</li>
          <li><strong>[City Name]:</strong> Address, Phone Number, Email</li>
        </ul>
      </section>

      <div className="get-in-touch">
        <strong>Get in Touch with Us Today</strong><br />
        <p>
          If you’re looking for a reliable, experienced property management
          company, look no further than LSG INVESTMENT LIMITED. Contact us today
          to learn more about our comprehensive property management services and
          discover how we can help you achieve your real estate goals. With LSG,
          you gain a partner dedicated to managing your property as if it were
          our own.
        </p>
      </div>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> [Phone Number]</p>
        <p><strong>Email:</strong> [Email Address]</p>
        <p><strong>Office Hours:</strong> [Operating Hours]</p>
      </section>
    </div>
  );
};

export default ContactUs;
