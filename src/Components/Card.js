import React from 'react';
import './Cards.css';
import Cards from './Cards';

const Card = ({ items, onDelete }) => {
  return (
    <div className='container1'>
      {items
        .filter(itemData => itemData.item && itemData.type && itemData.expiryDate)
        .map((itemData, index) => (
          <Cards 
            key={index}
            item={itemData.item} 
            type={itemData.type} 
            expiryDate={itemData.expiryDate} 
            onDelete={() => onDelete(index)}
          />
        ))
      }
    </div>
  );
};

export default Card;
