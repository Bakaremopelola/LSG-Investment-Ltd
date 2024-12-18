import "./Gallery.css";
import et from "../assets/ET.jpg";
import aa from "../assets/IMG_7410.jpg";
import ab from "../assets/IMG_7420.jpg";
import ac from "../assets/IMG_7423.jpg";
import ad from "../assets/IMG_7425.jpg";
import ae from "../assets/IMG_7428.jpg";
import af from "../assets/IMG_7430.jpg";
import ag from "../assets/IMG_7432.jpg";
import ah from "../assets/IMG_7434.jpg";
import aj from "../assets/IMG_7438.jpg";
import ak from "../assets/IMG_7440.jpg";
import al from "../assets/IMG_7442.jpg";
import am from "../assets/IMG_7444.jpg";
import an from "../assets/IMG_7446.jpg";
import ao from "../assets/IMG_7448.jpg";
import ap from "../assets/IMG_7450.jpg";
import aq from "../assets/IMG_7452.jpg";
import as from "../assets/IMG_7456.jpg";
import au from "../assets/IMG_7460.jpg";
import ax from "../assets/IMG_7466.jpg";
import az from "../assets/IMG_7470.jpg";

const Gallery = () => {
  const images = [
    { src: et, alt: "ET Image" },
    { src: aa, alt: "Image 1" },
    { src: ab, alt: "Image 2" },
    { src: ac, alt: "Image 3" },
    { src: ad, alt: "Image 4" },
    { src: ae, alt: "Image 5" },
    { src: af, alt: "Image 6" },
    { src: ag, alt: "Image 7" },
    { src: ah, alt: "Image 8" },
    { src: aj, alt: "Image 9" },
    { src: ak, alt: "Image 10" },
    { src: al, alt: "Image 11" },
    { src: am, alt: "Image 12" },
    { src: an, alt: "Image 13" },
    { src: ao, alt: "Image 14" },
    { src: ap, alt: "Image 15" },
    { src: aq, alt: "Image 16" },
    { src: as, alt: "Image 17" },
    { src: au, alt: "Image 18" },
    { src: ax, alt: "Image 19" },
    { src: az, alt: "Image 20" },
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
