import { useState } from "react";
import "./Contact.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We will get back to you shortly.");
    setFormData({ name: "", email: "", message: "" }); // Reset form
  };

  return (
    <div className="contact-us-page">
      {/* Locations Section */}
      <section className="locations">
        <h2>Our Locations</h2>
        <ul>
          <li><strong>Lagos:</strong> 123 Example St, Lagos, +2348000000000, contact@lsg.com</li>
          <li><strong>Abuja:</strong> 45 Abuja Way, Abuja, +2348111111111, info@lsg.com</li>
        </ul>
      </section>

      {/* Get in Touch Section */}
      <div className="get-in-touch">
        <strong>Get in Touch with Us Today</strong>
        <p>
          If you’re looking for a reliable, experienced property management company, look no further than **LSG INVESTMENT LIMITED**. Contact us today to learn more about our comprehensive property management services and discover how we can help you achieve your real estate goals.
        </p>
      </div>

      {/* Contact Us Section */}
      <section className="contact-us">
        <h2>Contact Us</h2>
        <p><strong>Phone:</strong> +2348000000000</p>
        <p><strong>Email:</strong> support@lsg.com</p>
        <p><strong>Office Hours:</strong> Mon-Fri: 9 AM - 5 PM</p>
      </section>

      {/* Form Section */}
      <section className="contact-form">
        <h2>Send Us a Message</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Your Message</label>
            <textarea
              id="message"
              name="message"
              rows="4"
              placeholder="Write your message here"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="submit-btn">Send Message</button>
        </form>
      </section>
    </div>
  );
};

export default ContactUs;
