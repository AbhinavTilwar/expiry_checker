import React from 'react';
import './Cards.css';
import fruit from '../Images/fruit.gif';
import veg from '../Images/vegetables.gif';
import indian from '../Images/indian.gif';
import milk from '../Images/milk.gif';
import drink from '../Images/drinks.gif';
import meat from '../Images/meat.gif';
const Cards = ({ item, type, expiryDate, onDelete }) => {
  const calculateDaysLeft = (expiryDate) => {
    const today = new Date();
    const expiry = new Date(expiryDate);
    const timeDiff = expiry - today;
    const daysLeft = Math.ceil(timeDiff / (1000 * 60 * 60 * 24)); 
    return daysLeft >= 0 ? `${daysLeft} days left` : 'Expired'; 
  };

  const getImage = (type) => {
    switch (type.toLowerCase()) {
      case 'fruit':
        return fruit;
      case 'vegetable':
        return veg;
      case 'indian food':
        return indian;
      case 'milk product':
        return milk;
      case 'drink':
        return drink;
      case 'meat':
        return meat;
      default:
        return null;
    }
  };

  return (
    <div className='card-container'>
      <div className="days-left">
        <div 
          className="days" 
          style={{ 
            backgroundColor: calculateDaysLeft(expiryDate) === 'Expired' ? 'red' : 'transparent',
            border: calculateDaysLeft(expiryDate) === 'Expired' ? '1px transparent' : "1px solid green"
          }}>
          {calculateDaysLeft(expiryDate)}
        </div>
      </div>
      <div>
        <img src={getImage(type)} alt={item} className='display' />
      </div>
      <div className="item">
        Item: {item}
      </div>
      <div className="item">
        Type: {type}
      </div>
      <div className="item">
        Expiry Date: {expiryDate}
      </div>
      <div className="delete">
        <button 
          type='button' 
          className="delete-btn" 
          onClick={onDelete}>  {/* Attach onDelete prop here */}
          Delete
        </button>
      </div>
    </div>
  );
};

export default Cards;
