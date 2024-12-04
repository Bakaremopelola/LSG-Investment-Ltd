import './Testimonials.css'; // Ensure you have a separate CSS file for styling

// Sample testimonial data (can be fetched dynamically or passed as props)
const testimonials = [
  {
    id: 1,
    text: "[Real Estate Company Name] helped me find my dream home with ease.",
    client: "[Client Name]",
  },
  {
    id: 2,
    text: "The team’s deep understanding of the real estate market yielded great returns.",
    client: "[Client Name]",
  },
  {
    id: 3,
    text: "Excellent customer service, every step of the way. Highly recommended!",
    client: "[Client Name]",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonials">
      <h2>Client Testimonials</h2>
      <div className="testimonial-list">
        {testimonials.map((testimonial) => (
          <div key={testimonial.id} className="testimonial-item" data-aos="fade-up">
            <blockquote className="testimonial-text">&quot;{testimonial.text}&quot;</blockquote>
            <cite className="testimonial-client">- {testimonial.client}</cite>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
