import React, { useState } from 'react';
import './Hero.css';
import Card from './Card';

const Hero = () => {
  const [item, setItem] = useState('');
  const [type, setType] = useState('');
  const [expiryDate, setExpiryDate] = useState('');
  const [items, setItems] = useState([]);
  const [filter, setFilter] = useState('All');

  const handleOnChangeItem = (event) => {
    setItem(event.target.value);
  };

  const handleOnChangeType = (event) => {
    setType(event.target.value);
  };

  const handleOnChangeDate = (event) => {
    setExpiryDate(event.target.value);
  };

  const handleFilterChange = (event) => {
    setFilter(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (item && type && expiryDate) {
      setItems([...items, { item, type, expiryDate }]);
      setItem('');
      setType('');
      setExpiryDate('');
    } else {
      alert("Please fill in all the fields.");
    }
  };

  const handleDelete = (indexToDelete) => {
    const updatedItems = items.filter((_, index) => index !== indexToDelete);
    setItems(updatedItems);
  };

  const filterItems = () => {
    const today = new Date();

    switch (filter) {
      case '1 Day':
        return items.filter(({ expiryDate }) => {
          const daysLeft = Math.ceil((new Date(expiryDate) - today) / (1000 * 60 * 60 * 24));
          return daysLeft === 1;
        });
      case '10 Days':
        return items.filter(({ expiryDate }) => {
          const daysLeft = Math.ceil((new Date(expiryDate) - today) / (1000 * 60 * 60 * 24));
          return daysLeft <= 10 && daysLeft > 0;
        });
      case 'Expired':
        return items.filter(({ expiryDate }) => {
          const daysLeft = Math.ceil((new Date(expiryDate) - today) / (1000 * 60 * 60 * 24));
          return daysLeft < 0;
        });
      default:
        return items;
    }
  };

  return (
    <div className="cont">
      
      <div className='container'>
        <div className='input'>
          <div className="form">
            <label htmlFor="name" style={{ padding: "1rem" }}>Enter the item name</label>
            <input
              type="text"
              id="name"
              name="name"
              className="form-control"
              placeholder='e.g. Orange'
              value={item}
              onChange={handleOnChangeItem}
              style={{
                width: "22rem",
                height: "3rem",
                color: "black",
                fontSize: "1rem",
                borderRadius: "1rem",
                textAlign: "center",
                padding: "0.3rem"
              }}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="expiryDate" style={{ padding: "1rem" }}>Enter the item expiry date</label>
            <input
              type="date"
              id="expiryDate"
              name="expiryDate"
              className="form-control"
              value={expiryDate}
              onChange={handleOnChangeDate}
              style={{
                width: "22rem",
                height: "3rem",
                color: "black",
                fontSize: "1rem",
                borderRadius: "1rem",
                textAlign: "center",
                padding: "0.3rem"
              }}
              required
            />
          </div>
          <div className="form">
            <label htmlFor="type" style={{ padding: "1rem" }}>Select the item type</label>
            <select
              id="type"
              name="type"
              className="form-control"
              value={type}
              onChange={handleOnChangeType}
              style={{
                width: "22rem",
                height: "3rem",
                color: "black",
                fontSize: "1rem",
                borderRadius: "1rem",
                textAlign: "center",
                padding: "0.3rem"
              }}
              required
            >
              <option value=""  className='option' disabled>Select Type</option>
              <option value="Fruit" className='option'>Fruit</option>
              <option value="Vegetable" className='option'>Vegetable</option>
              <option value="Milk Product" className='option'>Milk Product</option>
              <option value="Meat" className='option'>Meat</option>
              <option value="Indian Food" className='option'>Indian Food</option>
              <option value="drink" className='option'>Drinks</option>

            </select>
          </div>
        </div>

        <div className="form">
          <button
            type='submit'
            onClick={handleSubmit}
            style={{
              backgroundColor: "#ffb703",
              width: "10rem",
              height: "3rem",
              color: "black",
              fontSize: "1rem",
              borderRadius: "1rem",
              textAlign: "center",
              padding: "0.3rem"
            }}
          >
            Submit
          </button>
        </div>
        
        <div className="filter">
        <div className="form">
          <label htmlFor="filter" style={{ padding: "1rem" }}>Filter items by expiry</label>
          <select
            id="filter"
            name="filter"
            className="form-control"
            value={filter}
            onChange={handleFilterChange}
            style={{
              width: "22rem",
              height: "3rem",
              color: "black",
              fontSize: "1rem",
              borderRadius: "1rem",
              textAlign: "center",
              padding: "0.3rem"
            }}
          >
            <option value="All">All</option>
            <option value="1 Day">Expiring in 1 Day</option>
            <option value="10 Days">Expiring in 10 Days</option>
            <option value="30 Days">Expiring in 30 Days</option>
            <option value="Expired">Expired</option>
          </select>
        </div>
        </div>
        <div className="display">
          <Card items={filterItems()} onDelete={handleDelete} />
        </div>
      </div>
    </div>
  );
};

export default Hero;
