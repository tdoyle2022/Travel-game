import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

export function CountryDetails() {
  const [country, setCountry] = useState(null);
  const params = useParams();

  useEffect(() => {
    async function fetchCountries() {
      try {
        const response = await axios.get('https://api.sampleapis.com/countries/countries');
        const countryData = response.data.find(c => c.name.toLowerCase() === params.name.toLowerCase());
        setCountry(countryData);
      } catch (error) {
        console.error('Error fetching countries:', error);
      }
    }

    fetchCountries();
  }, [params.name]);

  return country ? (
    <div>
      <h1>{country.name}</h1>
      <img src={country.media.flag} alt={`${country.name} flag`} style={{width: '150px'}}/>
      <p>Capital: {country.capital}</p>
      <p>Currency: {country.currency}</p>
      <p>Population: {country.population}</p>
      {country.media.emblem && (
      <img src={country.media.emblem} alt={`${country.name} emblem`} style={{width: '150px'}} />
      )}
      <p>Emblem</p>
      <div>
      <Link to='/countrieslist'>Back to Countries List</Link>
      </div>
    </div>
  ) : (
    <p>Loading...</p>
  );
}