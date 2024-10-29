import React, { useState } from 'react';
import './Market.css'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import Cart from './Cart';
import tractor from '../Pictures/1.webp';
import harvester from '../Pictures/2.jpeg';
import plough from '../Pictures/3.jpeg';
import seeder from '../Pictures/4.jpeg';
import spreader from '../Pictures/5.webp';
import rotavator from '../Pictures/6.webp';
import trailer from '../Pictures/7.webp';
import combine from '../Pictures/8.webp';
import sprayer from '../Pictures/9.webp';
import seederFertilizer from '../Pictures/10.webp';
import mower from '../Pictures/11.webp';
import tiller from '../Pictures/12.webp';
import baler from '../Pictures/13.webp';
import cultivator from '../Pictures/14.webp';
import boomSprayer from '../Pictures/15.webp';
import rowSeeder from '../Pictures/16.webp';
import flatbedTrailer from '../Pictures/17.webp';
import manureSpreader from '../Pictures/18.webp';
import heavyDutyRotavator from '../Pictures/19.webp';
import selfPropelledHarvester from '../Pictures/20.webp';

const imageMap = {
  tractor: tractor,
  harvester: harvester,
  plough: plough,
  seeder: seeder,
  spreader: spreader,
  rotavator: rotavator,
  trailer: trailer,
  combine: combine,
  sprayer: sprayer,
  seederFertilizer: seederFertilizer,
  mower: mower,
  tiller: tiller,
  baler: baler,
  cultivator: cultivator,
  boomSprayer: boomSprayer,
  rowSeeder: rowSeeder,
  flatbedTrailer: flatbedTrailer,
  manureSpreader: manureSpreader,
  heavyDutyRotavator: heavyDutyRotavator,
  selfPropelledHarvester: selfPropelledHarvester,
};

const ITEMS_PER_PAGE = 10;

const dummyMarketData = [
  { id: 1, name: 'Tractor', year: 2021, price: 1200000, image: 'tractor' },
  { id: 2, name: 'Harvester', year: 2020, price: 1500000, image: 'harvester' },
  { id: 3, name: 'Plough', year: 2019, price: 30000, image: 'plough' },
  { id: 4, name: 'Seeder', year: 2018, price: 45000, image: 'seeder' },
  { id: 5, name: 'Spreader', year: 2019, price: 70000, image: 'spreader' },
  { id: 6, name: 'Rotavator', year: 2022, price: 50000, image: 'rotavator' },
  { id: 7, name: 'Trailer', year: 2017, price: 40000, image: 'trailer' },
  { id: 8, name: 'Combine', year: 2018, price: 1300000, image: 'combine' },
  { id: 9, name: 'Sprayer', year: 2021, price: 25000, image: 'sprayer' },
  { id: 10, name: 'Seeder & Fertilizer', year: 2018, price: 60000, image: 'seederFertilizer' },
  { id: 11, name: 'Mower', year: 2020, price: 90000, image: 'mower' },
  { id: 12, name: 'Tiller', year: 2019, price: 80000, image: 'tiller' },
  { id: 13, name: 'Baler', year: 2020, price: 75000, image: 'baler' },
  { id: 14, name: 'Cultivator', year: 2017, price: 50000, image: 'cultivator' },
  { id: 15, name: 'Boom Sprayer', year: 2019, price: 20000, image: 'boomSprayer' },
  { id: 16, name: 'Row Seeder', year: 2021, price: 95000, image: 'rowSeeder' },
  { id: 17, name: 'Flatbed Trailer', year: 2020, price: 60000, image: 'flatbedTrailer' },
  { id: 18, name: 'Manure Spreader', year: 2019, price: 55000, image: 'manureSpreader' },
  { id: 19, name: 'Heavy Duty Rotavator', year: 2018, price: 120000, image: 'heavyDutyRotavator' },
  { id: 20, name: 'Self-Propelled Harvester', year: 2021, price: 1800000, image: 'selfPropelledHarvester' },
];

const Market = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState('');
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleAddToCart = (item) => {
    const existingItem = cart.find(cartItem => cartItem.id === item.id);
    if (existingItem) {
      setCart(cart.map(cartItem =>
        cartItem.id === item.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem
      ));
    } else {
      setCart([...cart, { ...item, quantity: 1 }]);
    }
  };

  const handleAddQuantity = (itemId) => {
    setCart(cart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
    ));
  };

  const handleRemoveQuantity = (itemId) => {
    setCart(cart.map(item =>
      item.id === itemId ? { ...item, quantity: item.quantity > 1 ? item.quantity - 1 : 1 } : item
    ));
  };
  
  const handleRemoveFromCart = (itemId) => {
    setCart(cart.filter(item => item.id !== itemId));
  };

  const filteredItems = dummyMarketData.filter(item =>
    item.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const totalPages = Math.ceil(filteredItems.length / ITEMS_PER_PAGE);
  const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
  const currentPageItems = filteredItems.slice(startIndex, startIndex + ITEMS_PER_PAGE);

  return (
    <div className="market-container">
      <div className="search-bar">
        <input
          className='search-input'
          type="text"
          placeholder="Search Your Item"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
        <div style={{marginLeft:'440px',marginTop:'-40px'}}>
        <FontAwesomeIcon icon={faSearch} className="search-icon" />
        </div>
      </div>
 
      <div className="cart-icon" onClick={() => setCartOpen(!cartOpen)}>
          <FontAwesomeIcon icon={faShoppingCart} />
          <span className="cart-count">{cart.length}</span>
      </div>
        
      {cartOpen && cart.length > 0 && (
        <Cart 
          cartItems={cart} 
          handleAddQuantity={handleAddQuantity} 
          handleRemoveQuantity={handleRemoveQuantity} 
          handleRemoveFromCart={handleRemoveFromCart} 
        />
      )}

      <div className="market-item-grid">
        {currentPageItems.map(item => (
          <div key={item.id} className="market-item">
            <img src={imageMap[item.image]} alt={item.name} />
            <div className='item-price-section'>
              <div>
                <h3 className='item-name'>{item.name}</h3>
                <p className='item-year'>Year: {item.year}</p>
              </div>
              <div>
                <button className='item-price'> ₹{item.price.toLocaleString()}</button>
              </div>
            </div>
            <button className="add-to-cart-button " onClick={() => handleAddToCart(item)}>Add to Cart</button>
          </div>
        ))}
      </div>

      <div className="pagination">
        <button className='page-button' onClick={handlePreviousPage} disabled={currentPage === 1}>
          Previous
        </button>
        <span style={{marginTop:'5px',marginLeft:'160px'}}>
          Page {currentPage} of {totalPages}
        </span>
        <button className='page-button' onClick={handleNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Market;
