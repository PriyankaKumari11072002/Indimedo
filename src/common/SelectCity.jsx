import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SelectCity = () => {
  const [states, setStates] = useState([]);
  const [cities, setCities] = useState([]);
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  useEffect(() => {
    // Fetch states
    axios.get('https://api.example.com/states')
      .then(response => {
        setStates(response.data);
      })
      .catch(error => {
        console.error('Error fetching states:', error);
      });
  }, []);

  const handleStateChange = (e) => {
    const stateId = e.target.value;
    setSelectedState(stateId);
    // Fetch cities based on selected state
    axios.get(`https://api.example.com/cities?stateId=${stateId}`)
      .then(response => {
        setCities(response.data);
      })
      .catch(error => {
        console.error('Error fetching cities:', error);
      });
  };

  const handleCityChange = (e) => {
    const cityId = e.target.value;
    setSelectedCity(cityId);
  };

  return (
    <div className="card-body">
      <div className="row pb-4">
        <div className="col-sm-6">
          <div className="form-group mb-4">
            <label className="form-label">Full name <span className="text-danger">*</span></label>
            <input className="form-control" type="text" id="bfirstName" name="billing_name" placeholder="Enter Your Full Name" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group mb-4">
            <label className="form-label">Mobile Number<span className="text-danger">*</span></label>
            <input className="form-control" type="text" name="billing_tel" id="phone" placeholder="Enter Your Mobile Number" required="" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group mb-4">
            <label className="form-label">E-mail Address(Optional)</label>
            <input className="form-control" type="email" id="email" name="billing_email" placeholder="Enter Your E-mail Address" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group mb-4">
            <label className="form-label">Address</label>
            <input className="form-control" type="text" name="billing_address" id="aaddress" placeholder="Enter Your Address" />
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group mb-4">
            <label className="form-label">Choose your <span className="text-danger">*</span></label>
            <select className="form-control" id="state" onChange={handleStateChange} value={selectedState} required="">
              <option value="">Select Your State</option>
              {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group mb-4">
            <label className="form-label">Choose your State<span className="text-danger">*</span></label>
            <select className="form-control" id="state" onChange={handleStateChange} value={selectedState} required="">
              <option value="">Select Your State</option>
              {states.map(state => (
                <option key={state.id} value={state.id}>{state.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="form-group mb-4">
            <label className="form-label">Choose Your City<span className="text-danger">*</span></label>
            <select className="form-control" id="city" onChange={handleCityChange} value={selectedCity}>
              <option value="">Select Your City</option>
              {cities.map(city => (
                <option key={city.id} value={city.id}>{city.name}</option>
              ))}
            </select>
          </div>
        </div>
        <div className="col-sm-12">
          <div className="form-group mb-4">
            <label className="form-label">Pin Code</label>
            <input className="form-control" type="text" id="bzip" name="billing_zip" placeholder="Enter Your Pincode" />
          </div>
          <input type="hidden" name="userid" value="0" />
          <button className="btn btn-primary place-order" id="checked">Place Order</button>
        </div>
      </div>
    </div>
  );
};

export default SelectCity;
