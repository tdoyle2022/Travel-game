import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

export const ScoreList = () => {
  const [scores, setScores] = useState([]);

  useEffect(() => {
    const fetchScores = async () => {
      const response = await axios.get(`/api/get_user_scores/`);
      setScores(response.data.results);
    };
    fetchScores();
  }, []);
console.log(scores)
if (scores.length > 0) {
  let user_scores_data = scores[scores.length-1].fields

  return (
    <div>
      <Link to="/">Home</Link>
      <h2>Score Results</h2>
      <h2></h2>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div>
          <strong>Date</strong>
          <div>{user_scores_data.created_at}</div>
        </div>
        <div>
          <strong>Score</strong>
          <div>{user_scores_data.score}</div>
        </div>
        <div>
          <strong>User Selections</strong>
          <div>{JSON.stringify(user_scores_data.user_selections)}</div>
        </div>
        <div>
          <strong>All Scores</strong>
          <div>
            {/* 
            <button onClick={() => handleEdit(lastScore)}>Edit</button>
            <button onClick={() => handleDelete(lastScore)}>Delete</button>
            */}
            <ul>
              {scores.map((score) => (
              <li key={score.pk}>
                {score.fields.created_at} - {score.fields.score}
              </li>
               ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
};
