import { FaExclamationCircle } from 'react-icons/fa'; // Example icon from React Icons
import './NotFound.css'; // Import the CSS file for styling

const NotFound = () => {
  return (
    <div className="not-found">
      <FaExclamationCircle className="not-found-icon" />
      <h1>404 <br/>
       Page Not Found</h1>
      <p>The page you are looking for does not exist.</p>
      {/* Add additional content like an image or animation here if needed */}
      {/* Example: <img src="not-found-image.jpg" alt="Page Not Found" className="not-found-image" /> */}
    </div>
  );
};

export default NotFound;
