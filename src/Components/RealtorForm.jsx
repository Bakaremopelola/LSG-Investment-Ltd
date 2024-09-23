

const RealtorForm = () => {
  return (
    <div className="form-container">
      <h3>Realtor Registration</h3>
      <form>
        <div className="form-group">
          <label>Realtor License Number:</label>
          <input type="text" name="licenseNumber" />
        </div>

        <div className="form-group">
          <label>Agency Name:</label>
          <input type="text" name="agencyName" />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default RealtorForm;
