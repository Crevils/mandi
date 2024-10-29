import React, { useState, useEffect } from 'react';
import './Box.css';

const Box = () => {
  // Dummy data to replace backend fetch
  const dummyData = [
    { id: 1, title: 'Government Scheme A', description: 'Description for Government Scheme A' },
    { id: 2, title: 'Government Scheme B', description: 'Description for Government Scheme B' },
    { id: 3, title: 'Farming Tips: Soil Health', description: 'Keep soil balanced with nutrients for optimal crop growth.' },
    { id: 4, title: 'Government Scheme C', description: 'Description for Government Scheme C' },
    { id: 5, title: 'Farming Tips: Crop Rotation', description: 'Rotate crops annually to maintain soil fertility.' },
    { id: 6, title: 'Tricks for Efficient Water Use', description: 'Use drip irrigation to save water and improve crop yields.' },
    { id: 7, title: 'Government Scheme D', description: 'Description for Government Scheme D' },
    { id: 8, title: 'Farming Tricks: Pest Control', description: 'Use organic methods for pest control to maintain soil health.' },
    { id: 9, title: 'Sustainability Tips: Composting', description: 'Compost organic waste to add natural nutrients to the soil.' },
    { id: 10, title: 'Government Scheme E', description: 'Description for Government Scheme E' },
  ];

  const [sustainabilityData, setsustainabilityData] = useState([]);

  // Load dummy data on component mount
  useEffect(() => {
    setsustainabilityData(dummyData);
  }, []);

  const governmentSchemes = sustainabilityData.filter(item =>
    item.title.startsWith('Government Scheme')
  );

  const otherInfo = sustainabilityData.filter(item =>
    !item.title.startsWith('Government Scheme')
  );

  return (
    <div className='box-boxco'>
      <h2 className='titred'>Government Schemes</h2>
      {governmentSchemes.map(item => (
        <div key={item.id} className="info-box government-scheme">
          <h2 className='courseh2'>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}

      <h2 className='titred'>Farming Tips & Tricks</h2>
      {otherInfo.map(item => (
        <div key={item.id} className="info-box other-info">
          <h2 className='courseh2'>{item.title}</h2>
          <p>{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default Box;
