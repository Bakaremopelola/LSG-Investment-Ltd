

const BuyerForm = () => {
  return (
    <div className="form-container">
      <h3>Personal Information</h3>
      <form>
        <div className="form-group">
          <label>Surname:</label>
          <input type="text" name="surname" />
        </div>

        <div className="form-group">
          <label>Other names:</label>
          <input type="text" name="otherNames" />
        </div>

        <div className="form-group">
          <label>Sex:</label>
          <input type="text" name="sex" />
        </div>

        <div className="form-group">
          <label>Phone:</label>
          <input type="tel" name="phone" />
        </div>

        <div className="form-group">
          <label>Email:</label>
          <input type="email" name="email" />
        </div>

        <div className="form-group">
          <label>Residential Address:</label>
          <input type="text" name="residentialAddress" />
        </div>

        <div className="form-group">
          <label>Occupation:</label>
          <input type="text" name="occupation" />
        </div>

        <div className="form-group">
          <label>Employer’s name/address:</label>
          <input type="text" name="employerAddress" />
        </div>

        <h3>Other Information</h3>

        <div className="form-group">
          <label>Next of kin:</label>
          <input type="text" name="nextOfKin" />
        </div>

        <div className="form-group">
          <label>Next of kin’s Address:</label>
          <input type="text" name="kinAddress" />
        </div>

        <div className="form-group">
          <label>Purpose of Purchase:</label>
          <input type="text" name="purchasePurpose" />
        </div>

        <div className="form-group">
          <label>Residential:</label>
          <input type="checkbox" name="residential" />
        </div>

        <div className="form-group">
          <label>No of plots:</label>
          <input type="number" name="noOfPlots" />
        </div>

        <div className="form-group">
          <label>Land size you are subscribing to:</label>
          <div className="land-size-options">
            <input type="radio" name="landSize" value="300 SQM" /> 300 SQM
            <input type="radio" name="landSize" value="500 SQM" /> 500 SQM
            <input type="radio" name="landSize" value="1 ACRE" /> 1 ACRE
          </div>
        </div>

        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default BuyerForm;
