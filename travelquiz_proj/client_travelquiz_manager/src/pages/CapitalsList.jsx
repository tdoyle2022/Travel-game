import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const CapitalsList = () => {
  const [capitals, setCapitals] = useState([]);

  useEffect(() => {
    async function fetchCapitals() {
      try {
        const response = await axios.get('https://api.sampleapis.com/countries/countries');
        const capitalsData = response.data.map(country => `${country.name}: ${country.capital}`);
        setCapitals(capitalsData);
      } catch (error) {
        console.error('Error fetching capitals:', error);
      }
    }

    fetchCapitals();
  }, []);

  return (
    <div>
      <Link to='/'>Home</Link>
      <h1>Capitals List</h1>
      <ul style={{ listStyleType: 'none' }}>
        {capitals.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
      <Link to='/'>Home</Link>
    </div>
  );
};
