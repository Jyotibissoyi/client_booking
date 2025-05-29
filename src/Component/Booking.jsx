import React from 'react';

const VehicleBookingForm = () => {
  return (
    <form style={formStyle}>
      <h2>Vehicle Booking</h2>
      <div>
        <h3>1. What is your name?</h3>
        <input
          type="text"
          placeholder="First Name"
          style={inputStyle}
        />
        <input
          type="text"
          placeholder="Last Name"
          style={inputStyle}
        />
      </div>
    </form>
  );
};

// ---------- Styles ----------
const formStyle = {
  maxWidth: 600,
  margin: '30px auto',
  padding: 20,
  backgroundColor: '#222',
  color: '#eee',
  borderRadius: 8,
  fontFamily: 'Arial, sans-serif',
  textAlign: 'center',
};

const inputStyle = {
  padding: 10,
  margin: 10,
  borderRadius: 4,
  border: '1px solid #555',
  backgroundColor: '#333',
  color: '#eee',
  width: 200,
};

export default VehicleBookingForm;
