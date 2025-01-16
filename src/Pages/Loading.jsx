
import PropTypes from 'prop-types'; // Import PropTypes
import { FaSpinner } from 'react-icons/fa'; // Example spinner icon from React Icons
import './Loading.css'; // Import CSS for styling

const Loading = ({ text }) => {
  return (
    <div className="loading-container">
      <FaSpinner className="spinner-icon" />
      <p className="loading-text">{text}</p>
    </div>
  );
};

// Define PropTypes for the component
Loading.propTypes = {
  text: PropTypes.string, // Validate 'text' prop as a string
};

// Provide a default value if 'text' prop is not passed
Loading.defaultProps = {
  text: 'Loading...', // Default text if 'text' prop is not provided
};

export default Loading;
