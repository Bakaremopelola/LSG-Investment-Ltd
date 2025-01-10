// const RealtorForm = () => {
//   return (
//     <div className="form-container">
//       <h3>Realtor Registration</h3>
//       <form>
//         {/* Realtor License Number Input */}
//         <div className="form-group">
//           <label htmlFor="licenseNumber">Realtor License Number:</label>
//           <input type="text" id="licenseNumber" name="licenseNumber" />
//         </div>

//         {/* Agency Name Input */}
//         <div className="form-group">
//           <label htmlFor="agencyName">Agency Name:</label>
//           <input type="text" id="agencyName" name="agencyName" />
//         </div>

//         {/* Phone Input */}
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input type="tel" id="phone" name="phone" />
//         </div>

//         {/* Email Input */}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input type="email" id="email" name="email" />
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default RealtorForm;


import { useState } from 'react';

const RealtorForm = () => {
  const [formData, setFormData] = useState({
    licenseNumber: '',
    agencyName: '',
    phone: '',
    email: '',
    residentialAddress: '',
    yearsOfExperience: '',
    specialization: '',
    professionalReferences: '',
  });
  const [generatedLink, setGeneratedLink] = useState('');

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a unique referral link
    const uniqueReferralCode = `${formData.licenseNumber}-${Date.now()}`;
    setGeneratedLink(`${window.location.origin}/register?referralCode=${uniqueReferralCode}`);

    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h3>Realtor Registration</h3>
      <form onSubmit={handleSubmit}>
        {/* Realtor License Number */}
        <div className="form-group">
          <label htmlFor="licenseNumber">Realtor License Number:</label>
          <input
            type="text"
            id="licenseNumber"
            name="licenseNumber"
            value={formData.licenseNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Agency Name */}
        <div className="form-group">
          <label htmlFor="agencyName">Agency Name:</label>
          <input
            type="text"
            id="agencyName"
            name="agencyName"
            value={formData.agencyName}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Phone */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Email */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Residential Address */}
        <div className="form-group">
          <label htmlFor="residentialAddress">Residential Address:</label>
          <input
            type="text"
            id="residentialAddress"
            name="residentialAddress"
            value={formData.residentialAddress}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Years of Experience */}
        <div className="form-group">
          <label htmlFor="yearsOfExperience">Years of Experience:</label>
          <input
            type="number"
            id="yearsOfExperience"
            name="yearsOfExperience"
            value={formData.yearsOfExperience}
            onChange={handleInputChange}
            required
            min="0"
          />
        </div>

        {/* Areas of Specialization */}
        <div className="form-group">
          <label htmlFor="specialization">Areas of Specialization:</label>
          <textarea
            id="specialization"
            name="specialization"
            value={formData.specialization}
            onChange={handleInputChange}
            placeholder="E.g., Residential Properties, Commercial Properties, Land Sales"
            required
          />
        </div>

        {/* Professional References */}
        <div className="form-group">
          <label htmlFor="professionalReferences">Professional References:</label>
          <textarea
            id="professionalReferences"
            name="professionalReferences"
            value={formData.professionalReferences}
            onChange={handleInputChange}
            placeholder="Provide names and contact details of references"
            required
          />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>

      {/* Generated Referral Link */}
      {generatedLink && (
        <div className="generated-link">
          <h4>Your Referral Link:</h4>
          <p>
            <a href={generatedLink} target="_blank" rel="noopener noreferrer">
              {generatedLink}
            </a>
          </p>
        </div>
      )}
    </div>
  );
};

export default RealtorForm;
