import React, { useState, useEffect } from 'react';
import './Box.css';

const Box = () => {
  const dummyData = [
    { 
      id: 1, 
      title: 'Complete e-KYC for Pradhan Mantri Kisan Samman Nidhi PM-Kisan', 
      description: 'The e-KYC service is essential for verifying the identity of beneficiaries under the PM-Kisan scheme. Farmers can complete their Know Your Customer (KYC) process online, ensuring that they meet the eligibility criteria and receive timely disbursements of the financial aid.',
      image: 'https://i.timesnowhindi.com/stories/pm_kisan_kyc.jpg',
      url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx'
    },
    { 
      id: 2, 
      title: 'Check the Status of Your Pradhan Mantri Kisan Samman Nidhi PM-Kisan Application', 
      description: 'This service enables farmers to check the status of their applications for the PM-Kisan scheme. By entering their registration details, applicants can track the progress of their submissions and verify if they have been approved to receive the financial benefits.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTUKd3F7OPYWCdhoLVMEX3MAXvLtHgxXxgWFg&s',
      url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx'
    },
    { 
      id: 3, 
      title: 'Register as a New Farmer for Pradhan Mantri Kisan Samman Nidhi PM-Kisan', 
      description: 'Farmers may register for the PM-Kisan Samman Nidhi scheme. By providing necessary details, farmers can apply to receive financial support from the government, aimed at ensuring their economic stability and encouraging agricultural productivity.',
      image: 'https://i.ytimg.com/vi/sn2Ii7Tnzz8/maxresdefault.jpg',
      url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx'
    },
    { 
      id: 4, 
      title: 'Pradhan Mantri Kisan Samman Nidhi PM-Kisan Services', 
      description: 'The PM-KISAN scheme aims to supplement the financial needs of the Small and Marginal farmers (SMFs) in procuring various inputs to ensure proper crop health and appropriate yields.',
      image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRj5Uc4it2ObbTzeAtNrj21Ed4zFfIp82h3byUgiYZ8xOxoP01F92YVm9O3AP0H_wC2CSg&usqp=CAU',
      url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx'
    },
    { 
      id: 5, 
      title: 'Extension Reforms Monitoring System, Department of Agriculture, and Farmers Welfare', 
      description: 'The EMS is a web-enabled online monitoring system for Monthly Progress Report (MPR) under the ATMA Programme.',
      image: 'https://www.tractorjunction.com/blog/wp-content/uploads/2021/05/Pradhan-Mantri-Kisan-Maan-Dhan-Yojana-PM-KMY.jpg',
      url: 'https://pmkisan.gov.in/BeneficiaryStatus_New.aspx'
    }
  ];

  const [sustainabilityData, setSustainabilityData] = useState([]);

  // Load dummy data on component mount
  useEffect(() => {
    setSustainabilityData(dummyData);
  }, []);

  const governmentSchemes = sustainabilityData.filter(item =>
    item.title.startsWith('Complete') || item.title.startsWith('Check') || item.title.startsWith('Register') || item.title.startsWith('Pradhan') || item.title.startsWith('Extension')
  );

  return (
    <div className='box-container'>
      <h2 className='section-title'>Government Schemes</h2>
      <div className='cards-container'>
        {governmentSchemes.map(item => (
          <div key={item.id} className="info-card">
            <img src={item.image} alt={item.title} className="info-image" />
            <h3 className='info-title'>{item.title}</h3>
            <p className='info-description'>{item.description}</p>
            <a href={item.url} target="_blank" rel="noopener noreferrer" className='info-link'>Learn More</a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Box;
