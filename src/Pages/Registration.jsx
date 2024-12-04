import { useState } from 'react';
import BuyerForm from '../Components/BuyerForm';
import RealtorForm from '../Components/RealtorForm';
import './Registration.css';

const RegistrationComponent = () => {
  const [role, setRole] = useState('');

  const handleRoleSelection = (role) => {
    setRole(role);
  };

  return (
    <div className="registration-container">
      <h2>Register as:</h2>
      <div className="role-selection">
        <button onClick={() => handleRoleSelection('buyer')}>Potential Buyer</button>
        <button onClick={() => handleRoleSelection('realtor')}>Realtor</button>
      </div>

      {/* Conditional Rendering based on selection */}
      {role === 'buyer' && <BuyerForm />}
      {role === 'realtor' && <RealtorForm />}
    </div>
  );
};

export default RegistrationComponent;
