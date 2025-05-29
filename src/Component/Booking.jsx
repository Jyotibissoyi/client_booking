import React, { useState, useEffect } from 'react';

const VehicleBookingForm = () => {
  const [step, setStep] = useState(1);

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  const [wheels, setWheels] = useState(null);
  const [vehicleTypes, setVehicleTypes] = useState([]);
  const [selectedType, setSelectedType] = useState('');

  const [models, setModels] = useState([]);
  const [selectedModel, setSelectedModel] = useState('');

  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');

  const [message, setMessage] = useState('');

  useEffect(() => {
    if (wheels) {
      const dummyData = wheels === 2
        ? ['Cruiser', 'Sportbike', 'Scooter']
        : ['SUV', 'Sedan', 'Hatchback'];
      setVehicleTypes(dummyData);
    }
  }, [wheels]);

  useEffect(() => {
    if (selectedType) {
      const dummyModels = {
        Cruiser: ['Royal Enfield', 'Harley Davidson'],
        Sportbike: ['Yamaha R15', 'KTM RC 200'],
        Scooter: ['Honda Activa', 'TVS Jupiter'],
        SUV: ['Toyota Fortuner', 'Mahindra XUV700'],
        Sedan: ['Honda City', 'Hyundai Verna'],
        Hatchback: ['Maruti Swift', 'Hyundai i20']
      };
      setModels(dummyModels[selectedType] || []);
    }
  }, [selectedType]);

  const nextStep = () => setStep(prev => prev + 1);
  const prevStep = () => setStep(prev => prev - 1);

  const handleSubmit = e => {
    e.preventDefault();
    const payload = {
      full_name: `${firstName} ${lastName}`,
      type: wheels === 2 ? 'Bike' : 'Car',
      model: selectedType,
      brand: selectedModel,
      start_date: startDate,
      end_date: endDate
    };
    console.log('Booking Submitted:', payload);
    setMessage('Booking successful!');
  };

  const renderStep = () => {
    switch (step) {
      case 1:
        return (
          <div>
            <h3>1. What is your name?</h3>
            <input
              type="text"
              placeholder="First Name"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
              style={inputStyle}
            />
            <input
              type="text"
              placeholder="Last Name"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
              style={inputStyle}
            />
            <br />
            <button onClick={nextStep} disabled={!firstName || !lastName} style={buttonStyle}>Next</button>
          </div>
        );
      case 2:
        return (
          <div>
            <h3>2. Number of wheels</h3>
            {[2, 4].map(num => (
              <label key={num} style={radioLabelStyle}>
                <input
                  type="radio"
                  value={num}
                  checked={wheels === num}
                  onChange={() => setWheels(num)}
                />{' '}
                {num}
              </label>
            ))}
            <br />
            <button onClick={prevStep} style={buttonStyle}>Back</button>
            <button onClick={nextStep} disabled={!wheels} style={buttonStyle}>Next</button>
          </div>
        );
      case 3:
        return (
          <div>
            <h3>3. Type of vehicle</h3>
            {vehicleTypes.map(type => (
              <label key={type} style={radioLabelStyle}>
                <input
                  type="radio"
                  value={type}
                  checked={selectedType === type}
                  onChange={() => setSelectedType(type)}
                />{' '}
                {type}
              </label>
            ))}
            <br />
            <button onClick={prevStep} style={buttonStyle}>Back</button>
            <button onClick={nextStep} disabled={!selectedType} style={buttonStyle}>Next</button>
          </div>
        );
      case 4:
        return (
          <div>
            <h3>4. Specific Model</h3>
            {models.map(model => (
              <label key={model} style={radioLabelStyle}>
                <input
                  type="radio"
                  value={model}
                  checked={selectedModel === model}
                  onChange={() => setSelectedModel(model)}
                />{' '}
                {model}
              </label>
            ))}
            <br />
            <button onClick={prevStep} style={buttonStyle}>Back</button>
            <button onClick={nextStep} disabled={!selectedModel} style={buttonStyle}>Next</button>
          </div>
        );
      case 5:
        return (
          <div>
            <h3>5. Date Range Picker</h3>
            <input
              type="date"
              value={startDate}
              onChange={e => {
                setStartDate(e.target.value);
                if (endDate && e.target.value > endDate) setEndDate('');
              }}
              style={inputStyle}
            />
            to
            <input
              type="date"
              value={endDate}
              min={startDate}
              onChange={e => setEndDate(e.target.value)}
              style={inputStyle}
            />
            <br />
            <button onClick={prevStep} style={buttonStyle}>Back</button>
            <button
              onClick={handleSubmit}
              disabled={!startDate || !endDate}
              style={buttonStyle}
            >
              Submit
            </button>
          </div>
        );
      default:
        return <h3>Done</h3>;
    }
  };

  return (
    <form onSubmit={handleSubmit} style={formStyle}>
      <h2>Vehicle Booking</h2>
      {renderStep()}
      {message && <p style={{ color: message.includes('success') ? 'lightgreen' : 'tomato' }}>{message}</p>}
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

const buttonStyle = {
  padding: '10px 20px',
  margin: '20px 10px 0',
  borderRadius: 6,
  border: 'none',
  backgroundColor: '#555',
  color: '#fff',
  cursor: 'pointer',
  fontSize: 16,
};

const radioLabelStyle = {
  display: 'block',
  margin: '10px 0',
  textAlign: 'left',
};

export default VehicleBookingForm;
