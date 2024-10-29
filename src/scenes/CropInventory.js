import React from 'react';
import './CropInventory.css';
import TomatoImage from '../Images/tomato.jpg'; 
import AppleImage from '../Images/apple.jpg'; 
import CarrotImage from '../Images/carrot.jpg'; 
import PotatoImage from '../Images/potato.jpg'; 
import BananaImage from '../Images/banana.jpg'; 
import LettuceImage from '../Images/lettuce.jpg';     
import GrapesImage from '../Images/Grapes.jpg';
import CucumberImage from '../Images/cucumber.jpg';
import OrangeImage from '../Images/orange.jpg';
import SpinachImage from '../Images/spinach.jpg';
import MangoImage from '../Images/mango.jpg';
import RiceImage from '../Images/rice.jpg';
import JowarImage from '../Images/jowar.avif';
import BajraImage from '../Images/bajra.jpg';
import TurImage from '../Images/tur.jpg';
import MoongImage from '../Images/moong.jpg';
import UradImage from '../Images/urad.avif';
import CottonImage from '../Images/cotton.jpg';
import JuteImage from '../Images/jute.png';
import GroundnutImage from '../Images/groundnut.jpeg';
import SoybeanImage from '../Images/soyabean.jpg';
import WheatImage from '../Images/wheat.jpg';
import BarleyImage from '../Images/barley.jpg';
import MaizeImage from '../Images/maize.jpg';
import RubberImage from '../Images/rubber.jpg';
import GramImage from '../Images/gram.webp';
import MustardImage from '../Images/mustard.jpg';
import SesameImage from '../Images/sesame.jpg';
import RapeseedImage from '../Images/rapeseed.jpg';
import SugarcaneImage from '../Images/sugarcane.avif';
import CastorImage from '../Images/castor.webp';

const imageMap = {
  TomatoImage,
  AppleImage,
  CarrotImage,
  PotatoImage,
  BananaImage,
  LettuceImage,
  GrapesImage,
  CucumberImage,
  OrangeImage,
  SpinachImage,
  MangoImage,
  RiceImage,
  JowarImage,
  BajraImage,
  TurImage,
  MoongImage,
  UradImage,
  CottonImage,
  JuteImage,
  GroundnutImage,
  SoybeanImage,
  WheatImage,
  BarleyImage,
  MaizeImage,
  RubberImage,
  GramImage,
  MustardImage,
  SesameImage,
  RapeseedImage,
  SugarcaneImage,
  CastorImage,
};

// const cropsData = [
//   {
//     cropsName: "Rice",
//     cropsType: "Cereal",
//     cropsThumb: "RiceImage", // Match key in imageMap
//     cropsDistrict: "East Godavari",
//     cropsFoundin: "Kharif",
//     cropsState: "Andhra Pradesh",
//     cropsDescription: "Staple food crop grown extensively in water-rich regions."
//   },
//   {
//     cropsName: "Wheat",
//     cropsType: "Cereal",
//     cropsThumb: "WheatImage",
//     cropsDistrict: "Karnal",
//     cropsFoundin: "Rabi",
//     cropsState: "Haryana",
//     cropsDescription: "Important winter crop requiring moderate temperatures and irrigation."
//   },
//   // Add remaining crop data with respective 'cropsThumb' keys
// ];
const cropsData = [
  {
    "cropsName": "Rice",
    "cropsType": "Cereal",
    "cropsThumb": "RiceImage", 
    "cropsDistrict": "East Godavari",
    "cropsFoundin": "Kharif",
    "cropsState": "Andhra Pradesh",
    "cropsDescription": "Staple food crop grown extensively in water-rich regions."
  },
  {
    "cropsName": "Wheat",
    "cropsType": "Cereal",
    "cropsThumb": "WheatImage", 
    "cropsDistrict": "Karnal",
    "cropsFoundin": "Rabi",
    "cropsState": "Haryana",
    "cropsDescription": "Important winter crop requiring moderate temperatures and irrigation."
  },
  {
    "cropsName": "Maize",
    "cropsType": "Cereal",
    "cropsThumb": "MaizeImage", 
    "cropsDistrict": "Belgaum",
    "cropsFoundin": "Kharif",
    "cropsState": "Karnataka",
    "cropsDescription": "Grown in a variety of regions; used as food and fodder."
  },
  {
    "cropsName": "Barley",
    "cropsType": "Cereal",
    "cropsThumb": "BarleyImage", 
    "cropsDistrict": "Amritsar",
    "cropsFoundin": "Rabi",
    "cropsState": "Punjab",
    "cropsDescription": "Grown mainly for food, fodder, and brewing."
  },
  {
    "cropsName": "Sugarcane",
    "cropsType": "Cash Crop",
    "cropsThumb": "SugarcaneImage", 
    "cropsDistrict": "Muzaffarnagar",
    "cropsFoundin": "Annual",
    "cropsState": "Uttar Pradesh",
    "cropsDescription": "Tropical crop; primary source of sugar and ethanol."
  },
  {
    "cropsName": "Cotton",
    "cropsType": "Cash Crop",
    "cropsThumb": "CottonImage", 
    "cropsDistrict": "Nagpur",
    "cropsFoundin": "Kharif",
    "cropsState": "Maharashtra",
    "cropsDescription": "Fiber crop extensively used in the textile industry."
  },
  {
    "cropsName": "Groundnut",
    "cropsType": "Oilseed",
    "cropsThumb": "GroundnutImage", 
    "cropsDistrict": "Anantapur",
    "cropsFoundin": "Kharif",
    "cropsState": "Andhra Pradesh",
    "cropsDescription": "Oilseed crop grown in light, sandy soils."
  },
  {
    "cropsName": "Soybean",
    "cropsType": "Oilseed",
    "cropsThumb": "SoybeanImage", 
    "cropsDistrict": "Indore",
    "cropsFoundin": "Kharif",
    "cropsState": "Madhya Pradesh",
    "cropsDescription": "Key source of protein and edible oil."
  },
  {
    "cropsName": "Mustard",
    "cropsType": "Oilseed",
    "cropsThumb": "MustardImage", 
    "cropsDistrict": "Bharatpur",
    "cropsFoundin": "Rabi",
    "cropsState": "Rajasthan",
    "cropsDescription": "Winter oilseed crop used for oil extraction and greens."
  },
  {
    "cropsName": "Banana",
    "cropsType": "Fruit",
    "cropsDistrict": "Jalgaon",
    "cropsThumb": "BananaImage", 
    "cropsFoundin": "Annual",
    "cropsState": "Maharashtra",
    "cropsDescription": "Popular tropical fruit crop grown in hot and humid areas."
  },
  {
    "cropsName": "Mango",
    "cropsType": "Fruit",
    "cropsDistrict": "Ratnagiri",
    "cropsThumb": "MangoImage", 
    "cropsFoundin": "Summer",
    "cropsState": "Maharashtra",
    "cropsDescription": "Famous Indian fruit known for its sweetness and flavor."
  },
  {
    "cropsName": "Apple",
    "cropsType": "Fruit",
    "cropsDistrict": "Shimla",
    "cropsThumb": "AppleImage", 
    "cropsFoundin": "Winter",
    "cropsState": "Himachal Pradesh",
    "cropsDescription": "Temperate fruit crop grown in cooler hill areas."
  }
]


const CropInventory = () => {
  return (
    <div className="crpcontainer mt-0 pt-0">
      {cropsData.map((crop, index) => (
        <div key={index} className={`box box-${index + 1}`}>
          <div className="crop-summary">
            <h3 className='crop-name'>{crop.cropsName}</h3>
            {index === 0 && (
              <>
                <p className='cip1'>Type: {crop.cropsType}</p>
                <p className='cip1'>District: {crop.cropsDistrict}</p>
                <p className='cip1'>Found in: {crop.cropsFoundin}</p>
                <p className='cip1'>State: {crop.cropsState}</p>
                <p className='cip2'>Description: {crop.cropsDescription}</p>
              </>
            )}
            {index === 1 && (
              <>
                <p className='cip3'>Type: {crop.cropsType}</p>
                <p className='cip3'>District: {crop.cropsDistrict}</p>
                <p className='cip3'>Found in: {crop.cropsFoundin}</p>
                <p className='cip3'>State: {crop.cropsState}</p>
                <p className='cip4'>Description: {crop.cropsDescription}</p>
              </>
            )}
            {index === 2 && (
              <>
                <p className='cip3'>Type: {crop.cropsType}</p>
                <p className='cip3'>District: {crop.cropsDistrict}</p>
                <p className='cip3'>Found in: {crop.cropsFoundin}</p>
                <p className='cip3'>State: {crop.cropsState}</p>
                <p className='cip4'>Description: {crop.cropsDescription}</p>
              </>
            )}
            {index > 2 && (
              <>
                <p>Type: {crop.cropsType}</p>
                <p>District: {crop.cropsDistrict}</p>
                <p>Found in: {crop.cropsFoundin}</p>
              </>
            )}
          </div>
          <img src={imageMap[crop.cropsThumb]} alt={crop.cropsName} className="crop-thumb" />
        </div>
      ))}
    </div>
  );
}

export default CropInventory;
