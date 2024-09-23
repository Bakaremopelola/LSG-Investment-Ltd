import  { useState } from 'react';
import BuyerForm from '../Components/BuyerForm';
import RealtorForm from '../Components/RealtorForm';
import './Registration.css'

const RegistrationComponent = () => {
  const [role, setRole] = useState(''); 

  return (
    <div className="registration-container">
      <h2>Register as:</h2>
      <div className="role-selection">
        <button onClick={() => setRole('buyer')}>Potential Buyer</button>
        <button onClick={() => setRole('realtor')}>Realtor</button>
      </div>

      {/* Conditional Rendering based on selection */}
      {role === 'buyer' && <BuyerForm />}
      {role === 'realtor' && <RealtorForm />}
    </div>
  );
};

export default RegistrationComponent;
