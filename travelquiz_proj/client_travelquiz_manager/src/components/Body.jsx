import React, { useState, useEffect } from 'react';
import { createApi } from 'unsplash-js';
import axios from 'axios';
import { useContext } from 'react';
import { UserContext } from '../App';
import { Link } from 'react-router-dom';

const unsplash = createApi({
  accessKey: 'pjUOdzFAHYEo3oj1dmiPFxOmbN-hTAUGkO1AkxMlXqM'
});

const cities = [
  'chicago', 'miami', 'orlando', 'dallas', 'columbus', 'seattle', 'denver', 'boise', 'phoenix', 'jackson',
  'atlanta', 'boston', 'new york', 'los angeles', 'san francisco', 'austin', 'portland', 'san diego', 'philadelphia', 'indianapolis',
  'houston', 'nashville', 'charlotte', 'baltimore', 'detroit', 'louisville', 'kansas city', 'minneapolis', 'pittsburgh', 'tampa'
];

const countries = [
  'usa', 'canada', 'mexico', 'spain', 'france', 'italy', 'germany', 'japan', 'australia', 'new zealand',
  'brazil', 'argentina', 'india', 'china', 'russia', 'switzerland', 'netherlands', 'uk', 'ireland', 'sweden',
  'norway', 'finland', 'denmark', 'poland', 'south korea', 'thailand', 'vietnam', 'singapore', 'malaysia', 'philippines'
];

export const Body = () => {
  const { user } = useContext(UserContext);
  const [photos, setPhotos] = useState([]);
  const [locationType, setLocationType] = useState('cities'); // Default to cities
  const [optionsList, setOptionsList] = useState([]);
  const [selectedButtons, setSelectedButtons] = useState([]);
  
  const [userSelections, setUserSelections] = useState([]);

  const handleOptionClick = (index, option, buttonIndex) => {
    const newUserSelections = [...userSelections];
    newUserSelections[index] = option;
    setUserSelections(newUserSelections);

    const newSelectedButtons = [...selectedButtons];
    newSelectedButtons[index] = buttonIndex;
    setSelectedButtons(newSelectedButtons);
  };

  const calculateScore = (userSelections, correctAnswers) => {
    let score = 0;
    
    userSelections.forEach((selectedAnswer, index) => {
      if (selectedAnswer === correctAnswers[index]) {
        score += 1;
      }
    });
  
    return score;
  };

  const handleSubmit = async () => {
    const correctAnswers = photos.map(photoObj => photoObj.location);
    const score = calculateScore(userSelections, correctAnswers);
    console.log('User selections:', userSelections);
    setSelectedButtons([]);
    
   
    const userSelectionsData = JSON.stringify({ user_selections: userSelections });
    const parsedUserSelections = JSON.parse(userSelectionsData.replace(/\\/g, ""));

    // const user_scores_data = scores[scores.length - 1].fields;
    // const parsedUserSelections = JSON.parse(user_scores_data.user_selections);
    // const parsedCorrectAnswers = JSON.parse(user_scores_data.correct_answers);
  
    
    try {
      const response = await axios.post('/api/submit_quiz/', {
        user: user,
        user_selections: parsedUserSelections.user_selections,
        score: score,
        correct_answers: correctAnswers,
      });
  
      if (response.status === 200) {
        console.log('User selections saved successfully');
      } else {
        console.error('Error saving user selections:', response);
      }
    } catch (error) {
      console.error('Error saving user selections:', error);
    }
  };

  const getRandomElements = (arr, n) => {
    const shuffled = arr.slice().sort(() => Math.random() - 0.5);
    return shuffled.slice(0, n);
  };
  
    useEffect(() => {
      const locations = locationType === 'cities' ? getRandomElements(cities, 10) : getRandomElements(countries, 10);
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
        const newOptionsList = newPhotos.map(photoObj => {
          return photoObj ? generateOptions(photoObj.location) : [];
        });
      
        setOptionsList(newOptionsList);
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
                <div className="buttons-container">
                {optionsList[index] && optionsList[index].map((option, i) => (
                    <button key={i} className={selectedButtons[index] === i ? "selected-option" : option === photoObj.location ? 'correct-option' : 'incorrect-option'}
                    onClick={() => handleOptionClick(index, option, i)}>
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
      <button className="submit-button" onClick={handleSubmit}>
      <Link to="/scorelist">Submit Score</Link>
      </button>
    </div>
  );
};
