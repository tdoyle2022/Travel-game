import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const CapitalsList = () => {
  const [capitals, setCapitals] = useState([]);

  useEffect(() => {
    async function fetchCapitals() {
      try {
        const response = await axios.get('https://api.sampleapis.com/countries/countries');
        const capitalNames = response.data.map(country => country.capital);
        setCapitals(capitalNames);
      } catch (error) {
        console.error('Error fetching capitals:', error);
      }
    }

    fetchCapitals();
  }, []);

  return (
    <div>
      <h1>Capitals List</h1>
      <ul>
        {capitals.map((capital, index) => (
          <li key={index}>{capital}</li>
        ))}
      </ul>
      <Link to='/'>Home</Link>
    </div>
  );
}
