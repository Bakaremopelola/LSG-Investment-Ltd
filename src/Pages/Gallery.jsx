import "./Gallery.css";
import aaa from "../assets/lsg1.jpg";
import land5 from "../assets/land5.jpg";
import land4 from "../assets/land4.jpg";
import image from "../assets/image.png";
import land1 from "../assets/land1.jpg";
import et from "../assets/ET.jpg";

const Gallery = () => {
  const images = [
    { src: aaa, alt: "Image 1" },
    { src: land5, alt: "Image 2" },
    { src: land4, alt: "Image 3" },
    { src: image, alt: "Image 4" },
    { src: land1, alt: "Image 5" },
    { src: et, alt: "Image 6" },
    // Add more images here as needed
  ];

  return (
    <div className="gallery-container">
      <h2 className="gallery-title">Our Gallery</h2>
      <div className="gallery-grid">
        {images.map((image, index) => (
          <div key={index} className="gallery-item">
            <img src={image.src} alt={image.alt} className="gallery-image" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
