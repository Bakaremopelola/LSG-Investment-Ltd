const RealtorForm = () => {
  return (
    <div className="form-container">
      <h3>Realtor Registration</h3>
      <form>
        {/* Realtor License Number Input */}
        <div className="form-group">
          <label htmlFor="licenseNumber">Realtor License Number:</label>
          <input type="text" id="licenseNumber" name="licenseNumber" />
        </div>

        {/* Agency Name Input */}
        <div className="form-group">
          <label htmlFor="agencyName">Agency Name:</label>
          <input type="text" id="agencyName" name="agencyName" />
        </div>

        {/* Phone Input */}
        <div className="form-group">
          <label htmlFor="phone">Phone:</label>
          <input type="tel" id="phone" name="phone" />
        </div>

        {/* Email Input */}
        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" />
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RealtorForm;
