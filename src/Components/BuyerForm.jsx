const BuyerForm = () => {
  return (
    <div className="form-container">
      <h3>Personal Information</h3>
      <form>
        {/* Surname Input */}
        <div className="form-group">
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" />
        </div>

        {/* Other Names Input */}
        <div className="form-group">
          <label htmlFor="otherNames">Other Names:</label>
          <input type="text" id="otherNames" name="otherNames" />
        </div>

        {/* Sex Input */}
        <div className="form-group">
          <label htmlFor="sex">Sex:</label>
          <input type="text" id="sex" name="sex" />
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

        {/* Residential Address Input */}
        <div className="form-group">
          <label htmlFor="residentialAddress">Residential Address:</label>
          <input type="text" id="residentialAddress" name="residentialAddress" />
        </div>

        {/* Occupation Input */}
        <div className="form-group">
          <label htmlFor="occupation">Occupation:</label>
          <input type="text" id="occupation" name="occupation" />
        </div>

        {/* Employer’s Name/Address Input */}
        <div className="form-group">
          <label htmlFor="employerAddress">Employer’s Name/Address:</label>
          <input type="text" id="employerAddress" name="employerAddress" />
        </div>

        <h3>Other Information</h3>

        {/* Next of Kin Input */}
        <div className="form-group">
          <label htmlFor="nextOfKin">Next of Kin:</label>
          <input type="text" id="nextOfKin" name="nextOfKin" />
        </div>

        {/* Next of Kin’s Address Input */}
        <div className="form-group">
          <label htmlFor="kinAddress">Next of Kin’s Address:</label>
          <input type="text" id="kinAddress" name="kinAddress" />
        </div>

        {/* Purpose of Purchase Input */}
        <div className="form-group">
          <label htmlFor="purchasePurpose">Purpose of Purchase:</label>
          <input type="text" id="purchasePurpose" name="purchasePurpose" />
        </div>

        {/* Residential Checkbox */}
        <div className="form-group">
          <label htmlFor="residential">Residential:</label>
          <input type="checkbox" id="residential" name="residential" />
        </div>

        {/* Number of Plots Input */}
        <div className="form-group">
          <label htmlFor="noOfPlots">Number of Plots:</label>
          <input type="number" id="noOfPlots" name="noOfPlots" />
        </div>

        {/* Land Size Selection */}
        <div className="form-group">
          <label>Land Size You Are Subscribing To:</label>
          <div className="land-size-options">
            <label>
              <input type="radio" name="landSize" value="300 SQM" />
              300 SQM
            </label>
            <label>
              <input type="radio" name="landSize" value="500 SQM" />
              500 SQM
            </label>
            <label>
              <input type="radio" name="landSize" value="1 ACRE" />
              1 ACRE
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuyerForm;
