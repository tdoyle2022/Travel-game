import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom'

export const CountriesList = () => {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get('https://api.sampleapis.com/countries/countries');
        const countryNames = response.data.map(country => country.name);
        setCountries(countryNames);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }

    fetchCountries();
  }, []);

return (
  <div>
    <Link to='/'>Home</Link>
    <h1>Countries List</h1>
    <ul style={{ listStyleType: 'none' }}>
      {countries.map((country, index) => (
        <li key={index}>
          <Link to={`/countries/${country}`}>{country}</Link>
        </li>
      ))}
    </ul>
    <Link to='/'>Home</Link>
  </div>
);
}


