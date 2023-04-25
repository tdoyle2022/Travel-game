import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
// import dotenv from 'dotenv';
// dotenv.config();

// const apiKey = process.env.UNSPLASH_ACCESS_KEY;

const unsplash = createApi({
  accessKey: ''
});

const cities = ['chicago', 'miami', 'orlando', 'dallas', 'columbus', 'seattle', 'denver', 'boise', 'phoenix', 'jackson'];
const countries = ['usa', 'canada', 'mexico', 'spain', 'france', 'italy', 'germany', 'japan', 'australia', 'new zealand'];

export const Body = () => {
  const [photos, setPhotos] = useState([]);
    const [locationType, setLocationType] = useState('cities'); // Default to cities
  
    useEffect(() => {
      const locations = locationType === 'cities' ? cities : countries;
      const promises = [];
  
      for (let i = 0; i < locations.length; i++) {
        const location = locations[i];
        promises.push(
          unsplash.photos.getRandom({
            query: location,
            orientation: 'landscape',
          }).then(result => ({ ...result, location }))
        );
      }
  
      Promise.all(promises).then(async results => {
        const newPhotos = results.map(result => {
          if (result.errors || !result.response) {
            console.log('error occurred: ', result.errors[0]);
            return null;
          } else {
            return { photo: result.response, location: result.location };
          }
        });
  
        setPhotos(newPhotos);
      });
    }, [locationType]);
  
    const handleLocationTypeChange = e => {
      setLocationType(e.target.value);
    };
  

  const generateOptions = (correctLocation) => {
    const locations = locationType === 'cities' ? cities : countries;
    const shuffledLocations = locations.sort(() => Math.random() - 0.5);
    const options = shuffledLocations.filter((location) => location !== correctLocation).slice(0, 3);
    const correctIndex = Math.floor(Math.random() * 4);
    options.splice(correctIndex, 0, correctLocation);
    return options;
  };

  return (
      <div>
      <div>
        <label>
          <input type="radio" name="locationType" value="cities" checked={locationType === 'cities'} onChange={handleLocationTypeChange} />
          Cities
        </label>
        <label>
          <input type="radio" name="locationType" value="countries" checked={locationType === 'countries'} onChange={handleLocationTypeChange} />
          Countries
        </label>
      </div>
      <div className="photo-grid">
        {photos.map((photoObj, index) => (
          <div key={index} className="photo-container">
            {photoObj && photoObj.photo ? (
              <>
                <img src={photoObj.photo.urls.regular} alt={photoObj.photo.alt_description} />
                <p>Photo by {photoObj.photo.user.name} on Unsplash</p>
                {/* <p>{locationType === 'cities' ? 'City' : 'Country'}: {photoObj.location}</p> */}
                <div className="buttons-container">
                  {generateOptions(photoObj.location).map((option, i) => (
                    <button key={i} className={option === photoObj.location ? 'correct-option' : 'incorrect-option'}>
                      {option}
                    </button>
                  ))}
                </div>
              </>
            ) : (
              <div className="error-message">Error loading photo</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};
