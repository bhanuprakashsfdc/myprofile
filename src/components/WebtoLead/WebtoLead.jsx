import React from 'react';
import './WebtoLead.css'; // Import the CSS

const WebtoLead = () => {
  return (
    <form
      action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8"
      method="POST"
      className="salesforce-form"
    >
      <input type="hidden" name="oid" value="00D2x000004uBnW" />
      <input type="hidden" name="retURL" value="https://bhanuprakashsfdc.com/" />
      <input type="hidden" id="lead_source" name="lead_source" value="Bhanu Website" />

      <div className="row php-email-form mt-4">
        <div className="col-md-6 form-group">
          <input
            className="form-control"
            id="first_name"
            maxLength="40"
            name="first_name"
            size="75"
            type="text"
            placeholder="Your First Name"
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            className="form-control"
            id="last_name"
            maxLength="80"
            name="last_name"
            size="75"
            type="text"
            placeholder="Your Last Name"
            required
          />
        </div>
        <div className="col-md-6 form-group">
          <input
            className="form-control"
            id="email"
            maxLength="80"
            name="email"
            size="75"
            type="email"
            placeholder="Your Email"
            required
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            className="form-control"
            id="phone"
            maxLength="40"
            name="phone"
            size="75"
            type="text"
            placeholder="Your Phone Number"
          />
        </div>
        <div className="col-md-6 form-group">
          <input
            className="form-control"
            id="company"
            maxLength="40"
            name="company"
            size="75"
            type="text"
            placeholder="Your Company Name"
          />
        </div>
        <div className="col-md-6 form-group mt-3 mt-md-0">
          <input
            className="form-control"
            id="city"
            maxLength="40"
            name="city"
            size="75"
            type="text"
            placeholder="Your City Name"
          />
        </div>
        <div className="col-md-12 form-group mt-3 mt-md-0">
          <textarea
            className="form-control"
            name="description"
            placeholder="Your Message"
          />
        </div>
        <div className="text-center col-md-12 mt-4">
          <button type="submit" className="btn btn-primary">
            Send Message
          </button>
        </div>
      </div>
    </form>
  );
};

export default WebtoLead;
