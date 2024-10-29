import React, { useState } from 'react';
import fertilizerData from './data.json'; // Assuming you have the fertilizer data in a JSON file
import './Fertilizer.css'; // Import your CSS file

const FertilizerComponent = () => {
  const [userInput, setUserInput] = useState({
    temperature: 20,
    humidity: 83,
    moisture: 26,
    soilType: 'Clayey',
    cropType: 'rice',
    nitrogen: 90,
    phosphorus: 36,
    potassium: 49,
  });
  const [recommendedFertilizer, setRecommendedFertilizer] = useState('');

  // Function to recommend fertilizer based on user inputs
  const recommendFertilizer = () => {
    const {
      temperature,
      humidity,
      moisture,
      soilType,
      cropType,
      nitrogen,
      phosphorus,
      potassium
    } = userInput;

    // Look for the first fertilizer that matches all criteria within a flexible range
    const matchingFertilizer = fertilizerData.find(entry => {
      console.log("Checking Entry:", entry); // Log each entry for debugging
      return (
        Math.abs(entry.Temperature - temperature) <= 5 &&         // Allowing ±5 range for temperature
        Math.abs(entry.Humidity - humidity) <= 10 &&              // Allowing ±10 range for humidity
        Math.abs(entry.Moisture - moisture) <= 10 &&              // Allowing ±10 range for moisture
        entry.Soil_Type.toLowerCase() === soilType.toLowerCase() &&
        entry.Crop_Type.toLowerCase() === cropType.toLowerCase() &&
        nitrogen >= entry.Nitrogen &&                             // User input N should be at least as much as required
        phosphorus >= entry.Phosphorous &&
        potassium >= entry.Potassium
      );
    });
    
    
    if (matchingFertilizer) {
      setRecommendedFertilizer(matchingFertilizer.Fertilizer);
    } else {
      setRecommendedFertilizer('Ureaa');
    }
  };

  const handleInputChange = e => {
    const { name, value } = e.target;
    setUserInput(prevState => ({
      ...prevState,
      [name]: isNaN(value) ? value : parseFloat(value),
    }));
  };

  return (
    <div className="fertilizer-container w-80 ml-0">
      <h2 className="fertilizer-title">Fertilizer Recommendations</h2>
      <form className="fertilizer-form" onSubmit={e => { e.preventDefault(); recommendFertilizer(); }}>
        <label>
          Temperature:
          <input type="number" name="temperature" value={userInput.temperature} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Humidity:
          <input type="number" name="humidity" value={userInput.humidity} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Moisture:
          <input type="number" name="moisture" value={userInput.moisture} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Soil Type:
          <select name="soilType" value={userInput.soilType} onChange={handleInputChange}>
            <option value="Loamy">Loamy</option>
            <option value="Clayey">Clayey</option>
            <option value="Sandy">Sandy</option>
            {/* Add other soil types as necessary */}
          </select>
        </label>
        <br />
        <label>
          Crop Type:
          <select name="cropType" value={userInput.cropType} onChange={handleInputChange}>
            <option value="rice">Rice</option>
            <option value="wheat">Wheat</option>
            {/* Add other crop types as necessary */}
          </select>
        </label>
        <br />
        <label>
          Nitrogen (N):
          <input type="number" name="nitrogen" value={userInput.nitrogen} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Phosphorus (P):
          <input type="number" name="phosphorus" value={userInput.phosphorus} onChange={handleInputChange} />
        </label>
        <br />
        <label>
          Potassium (K):
          <input type="number" name="potassium" value={userInput.potassium} onChange={handleInputChange} />
        </label>
        <br />
        <button type="submit" className="recommend-button">Recommend</button>
      </form>
      <div className="recommended-fertilizer">
        Recommended Fertilizer: {recommendedFertilizer}
      </div>
    </div>
  );
};

export default FertilizerComponent;
