// import { useState } from 'react';

// const BuyerForm = () => {
//   const [surname, setSurname] = useState('');
//   const [otherNames, setOtherNames] = useState('');
//   const [sex, setSex] = useState('');
//   const [phone, setPhone] = useState('');
//   const [email, setEmail] = useState('');
//   const [residentialAddress, setResidentialAddress] = useState('');
//   const [occupation, setOccupation] = useState('');
//   const [employerAddress, setEmployerAddress] = useState('');
//   const [nextOfKin, setNextOfKin] = useState('');
//   const [kinAddress, setKinAddress] = useState('');
//   const [purchasePurpose, setPurchasePurpose] = useState('');
//   const [residential, setResidential] = useState(false);
//   const [noOfPlots, setNoOfPlots] = useState('');
//   const [landSize, setLandSize] = useState('');

//   const [realtorId, setRealtorId] = useState('');

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     // Additional logic for handling form submission
//     console.log({
//       surname,
//       otherNames,
//       sex,
//       phone,
//       email,
//       residentialAddress,
//       occupation,
//       employerAddress,
//       nextOfKin,
//       kinAddress,
//       purchasePurpose,
//       residential,
//       noOfPlots,
//       landSize,
//       realtorId,
//     });
//     // Reset form fields after submission if needed
//   };

//   return (
//     <div className="form-container">
//       <h3>Personal Information</h3>
//       <form onSubmit={handleSubmit}>
//         {/* Surname Input */}
//         <div className="form-group">
//           <label htmlFor="surname">Surname:</label>
//           <input
//             type="text"
//             id="surname"
//             name="surname"
//             value={surname}
//             onChange={(e) => setSurname(e.target.value)}
//             required
//           />
//         </div>

//         {/* Other Names Input */}
//         <div className="form-group">
//           <label htmlFor="otherNames">Other Names:</label>
//           <input
//             type="text"
//             id="otherNames"
//             name="otherNames"
//             value={otherNames}
//             onChange={(e) => setOtherNames(e.target.value)}
//             required
//           />
//         </div>

//         {/* Sex Input */}
//         <div className="form-group">
//           <label htmlFor="sex">Sex:</label>
//           <input
//             type="text"
//             id="sex"
//             name="sex"
//             value={sex}
//             onChange={(e) => setSex(e.target.value)}
//             required
//           />
//         </div>

//         {/* Phone Input */}
//         <div className="form-group">
//           <label htmlFor="phone">Phone:</label>
//           <input
//             type="tel"
//             id="phone"
//             name="phone"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             required
//           />
//         </div>

//         {/* Email Input */}
//         <div className="form-group">
//           <label htmlFor="email">Email:</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         {/* Residential Address Input */}
//         <div className="form-group">
//           <label htmlFor="residentialAddress">Residential Address:</label>
//           <input
//             type="text"
//             id="residentialAddress"
//             name="residentialAddress"
//             value={residentialAddress}
//             onChange={(e) => setResidentialAddress(e.target.value)}
//             required
//           />
//         </div>

//         {/* Occupation Input */}
//         <div className="form-group">
//           <label htmlFor="occupation">Occupation:</label>
//           <input
//             type="text"
//             id="occupation"
//             name="occupation"
//             value={occupation}
//             onChange={(e) => setOccupation(e.target.value)}
//             required
//           />
//         </div>

//         {/* Employer’s Name/Address Input */}
//         <div className="form-group">
//           <label htmlFor="employerAddress">Employer’s Name/Address:</label>
//           <input
//             type="text"
//             id="employerAddress"
//             name="employerAddress"
//             value={employerAddress}
//             onChange={(e) => setEmployerAddress(e.target.value)}
//             required
//           />
//         </div>

//         <h3>Other Information</h3>

//         {/* Next of Kin Input */}
//         <div className="form-group">
//           <label htmlFor="nextOfKin">Next of Kin:</label>
//           <input
//             type="text"
//             id="nextOfKin"
//             name="nextOfKin"
//             value={nextOfKin}
//             onChange={(e) => setNextOfKin(e.target.value)}
//             required
//           />
//         </div>

//         {/* Next of Kin’s Address Input */}
//         <div className="form-group">
//           <label htmlFor="kinAddress">Next of Kin’s Address:</label>
//           <input
//             type="text"
//             id="kinAddress"
//             name="kinAddress"
//             value={kinAddress}
//             onChange={(e) => setKinAddress(e.target.value)}
//             required
//           />
//         </div>

//         {/* Purpose of Purchase Input */}
//         <div className="form-group">
//           <label htmlFor="purchasePurpose">Purpose of Purchase:</label>
//           <input
//             type="text"
//             id="purchasePurpose"
//             name="purchasePurpose"
//             value={purchasePurpose}
//             onChange={(e) => setPurchasePurpose(e.target.value)}
//             required
//           />
//         </div>

//         {/* Residential Checkbox */}
//         <div className="form-group">
//           <label htmlFor="residential">Residential:</label>
//           <input
//             type="checkbox"
//             id="residential"
//             name="residential"
//             checked={residential}
//             onChange={(e) => setResidential(e.target.checked)}
//           />
//         </div>

//         {/* Number of Plots Input */}
//         <div className="form-group">
//           <label htmlFor="noOfPlots">Number of Plots:</label>
//           <input
//             type="number"
//             id="noOfPlots"
//             name="noOfPlots"
//             value={noOfPlots}
//             onChange={(e) => setNoOfPlots(e.target.value)}
//             required
//           />
//         </div>

//         {/* Land Size Selection */}
//         <div className="form-group">
//           <label>Land Size You Are Subscribing To:</label>
//           <div className="land-size-options">
//             <label>
//               <input
//                 type="radio"
//                 name="landSize"
//                 value="300 SQM"
//                 onChange={(e) => setLandSize(e.target.value)}
//               />
//               300 SQM
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="landSize"
//                 value="500 SQM"
//                 onChange={(e) => setLandSize(e.target.value)}
//               />
//               500 SQM
//             </label>
//             <label>
//               <input
//                 type="radio"
//                 name="landSize"
//                 value="1 ACRE"
//                 onChange={(e) => setLandSize(e.target.value)}
//               />
//               1 ACRE
//             </label>
//           </div>
//         </div>

//         {/* Realtor's ID Input */}
//         <div className="form-group">
//           <label htmlFor="realtorId">Realtor&apos;s ID:</label>
//           <input
//             type="text"
//             id="realtorId"
//             name="realtorId"
//             value={realtorId}
//             onChange={(e) => setRealtorId(e.target.value)}
//           />
//         </div>

//         {/* Submit Button */}
//         <button type="submit">Submit</button>
//       </form>
//     </div>
//   );
// };

// export default BuyerForm;



import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const BuyerForm = () => {
  const [formData, setFormData] = useState({
    surname: '',
    otherNames: '',
    sex: '',
    phone: '',
    email: '',
    residentialAddress: '',
    occupation: '',
    employerAddress: '',
    nextOfKin: '',
    kinAddress: '',
    purchasePurpose: '',
    residential: false,
    noOfPlots: '',
    landSize: '',
    referralCode: '',
  });

  const [generatedLink, setGeneratedLink] = useState('');
  const location = useLocation();

  // Extract referral code from URL if present
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const referralCode = params.get('referralCode');
    if (referralCode) {
      setFormData((prev) => ({ ...prev, referralCode }));
    }
  }, [location]);

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Simulate form submission and generate referral link
    const uniqueReferralCode = `${formData.surname}-${Date.now()}`; // Example unique code generation
    setGeneratedLink(`${window.location.origin}/registration?referralCode=${uniqueReferralCode}`);

    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h3>Personal Information</h3>
      <form onSubmit={handleSubmit}>
        {/* Surname Input */}
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input
            type="text"
            id="surname"
            name="surname"
            value={formData.surname}
            onChange={handleInputChange}
          />
        </div>

        {/* Other Names Input */}
        <div className="form-group">
          <label htmlFor="otherNames">Other Names:</label>
          <input
            type="text"
            id="otherNames"
            name="otherNames"
            value={formData.otherNames}
            onChange={handleInputChange}
          />
        </div>

        {/* Sex Input */}
        <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <input
            type="text"
            id="sex"
            name="sex"
            value={formData.sex}
            onChange={handleInputChange}
          />
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
          />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
          />
        </div>

        {/* Residential Address Input */}
        <div className="form-group">
          <label htmlFor="residentialAddress">Residential Address:</label>
          <input
            type="text"
            id="residentialAddress"
            name="residentialAddress"
            value={formData.residentialAddress}
            onChange={handleInputChange}
          />
        </div>

        {/* Occupation Input */}
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input
            type="text"
            id="occupation"
            name="occupation"
            value={formData.occupation}
            onChange={handleInputChange}
          />
        </div>

        {/* Employer’s Name/Address Input */}
        <div className="form-group">
          <label htmlFor="employerAddress">Employer’s Name/Address:</label>
          <input
            type="text"
            id="employerAddress"
            name="employerAddress"
            value={formData.employerAddress}
            onChange={handleInputChange}
          />
        </div>

        <h3>Other Information</h3>

        {/* Next of Kin Input */}
        <div className="form-group">
          <label htmlFor="nextOfKin">Next of Kin:</label>
          <input
            type="text"
            id="nextOfKin"
            name="nextOfKin"
            value={formData.nextOfKin}
            onChange={handleInputChange}
          />
        </div>

        {/* Next of Kin’s Address Input */}
        <div className="form-group">
          <label htmlFor="kinAddress">Next of Kin’s Address:</label>
          <input
            type="text"
            id="kinAddress"
            name="kinAddress"
            value={formData.kinAddress}
            onChange={handleInputChange}
          />
        </div>

        {/* Purpose of Purchase Input */}
        <div className="form-group">
          <label htmlFor="purchasePurpose">Purpose of Purchase:</label>
          <input
            type="text"
            id="purchasePurpose"
            name="purchasePurpose"
            value={formData.purchasePurpose}
            onChange={handleInputChange}
          />
        </div>

        {/* Residential Checkbox */}
        <div className="form-group">
          <label htmlFor="residential">Residential:</label>
          <input
            type="checkbox"
            id="residential"
            name="residential"
            checked={formData.residential}
            onChange={handleInputChange}
          />
        </div>

        {/* Number of Plots Input */}
        <div className="form-group">
          <label htmlFor="noOfPlots">Number of Plots:</label>
          <input
            type="number"
            id="noOfPlots"
            name="noOfPlots"
            value={formData.noOfPlots}
            onChange={handleInputChange}
          />
        </div>

        {/* Land Size Selection */}
        <div className="form-group">
          <label>Land Size You Are Subscribing To:</label>
          <div className="land-size-options">
            {['300 SQM', '500 SQM', '1 ACRE'].map((size) => (
              <label key={size}>
                <input
                  type="radio"
                  name="landSize"
                  value={size}
                  checked={formData.landSize === size}
                  onChange={handleInputChange}
                />
                {size}
              </label>
            ))}
          </div>
        </div>

        {/* Referral Code (Optional) */}
        {formData.referralCode && (
          <div className="form-group">
            <p>Referred by Code: {formData.referralCode}</p>
          </div>
        )}

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

export default BuyerForm;
