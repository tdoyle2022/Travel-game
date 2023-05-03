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

  if (scores.length > 0) {
    let user_scores_data = scores[scores.length-1].fields

    const handleDelete = async (scoreId) => {
      try {
        console.log("connected")
        await axios.delete(`/api/delete_score/${scoreId}/`);
        setScores(scores.filter((score) => score.pk !== scoreId));
      } catch (error) {
        console.error("Failed to delete score:", error);
      }
    };

    const handleUpdate = async (scoreId) => {
      const updatedScore = 10;
    
      try {
        await axios.put(`/api/update_score/${scoreId}/`, { score: updatedScore });
        setScores(
          scores.map((score) =>
            score.pk === scoreId ? { ...score, fields: { ...score.fields, score: updatedScore } } : score
          )
        );
      } catch (error) {
        console.error("Failed to update score:", error);
      }
    };


//     return (
//       <div>
//         <Link to="/">Home</Link>
//         <h2>Score Results</h2>
//         <img src="https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo="/>
//         <div style={{ display: 'flex', flexDirection: 'column' }}>
//           <div>
//             <strong>Date</strong>
//             <div style={{color: 'green'}}>{user_scores_data.created_at}</div>
//           </div>
//           <div>
//             <strong>Most Recent Score</strong>
//             <div style={{color: 'green'}}>{user_scores_data.score}</div>
//           </div>
//           <div>
//           <strong>User Selections</strong>
//           <div>
//             <ul style={{ listStyleType: 'none' }}>
//               {user_scores_data.user_selections.map((userSelection, index) => {
//                 const correctAnswer = user_scores_data.correct_answers[index];
//                 const isCorrect = userSelection === correctAnswer;
//                 return (
//                   <li key={index} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '5px' }}>
//                     <span style={{ color: 'black' }}>{correctAnswer}:</span>
//                     <span style={{ color: isCorrect ? 'green' : 'red' }}>{userSelection}</span>
//                   </li>
//                 );
//               })}
//             </ul>
//           </div>
//         </div>
//           </div>
//           <div>
//             <strong>All Scores</strong>
//             <div>
//               <ul style={{ listStyleType: 'none' }}>
//                 {scores.map((score) => (
//                   <li key={score.pk}>
//                     <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'lightblue', border: 'solid'}}>
//                       <button onClick={() => handleUpdate(score.pk)} style={{ marginRight: '10px' }}>Edit</button>
//                       <button onClick={() => handleDelete(score.pk)} style={{ marginRight: '10px' }}>Delete</button>
//                       {score.fields.created_at} - {score.fields.score}
//                     </div>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           </div>
//         </div>
//     );
//   }
// };

return (
  <div>
    <Link to="/">Home</Link>
    <h2>Score Results</h2>
    {/* <img src="https://media.istockphoto.com/id/1288385045/photo/snowcapped-k2-peak.jpg?s=612x612&w=0&k=20&c=sfA4jU8kXKZZqQiy0pHlQ4CeDR0DxCxXhtuTDEW81oo=" /> */}
    < img src="https://img.freepik.com/free-vector/couple-ready-travel-with-airplane_1308-89372.jpg?w=1800&t=st=1682771846~exp=1682772446~hmac=c951771446250fc686a72e35cf6264a82d31ab6fbba07c2237a0b0c6c507bae8" width='200px' height='200px'/>
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <div>
        <strong>Date</strong>
        <div style={{ color: 'green' }}>{user_scores_data.created_at}</div>
      </div>
      <div>
        <strong>Most Recent Score</strong>
        <div style={{ color: 'green' }}>{user_scores_data.score}</div>
      </div>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ alignItems: 'flex-start' }}>
          <div style={{ textAlign: 'left' }}>
            <strong>Correct Answers</strong>
          </div>
          <ul style={{ listStyleType: 'none' }}>
            {user_scores_data.correct_answers.map((correctAnswer, index) => (
              <li key={index} style={{ marginBottom: '5px' }}>
                <span style={{ color: 'black' }}>{correctAnswer}</span>
              </li>
            ))}
          </ul>
        </div>
        <div style={{ alignItems: 'flex-end' }}>
          <div style={{ textAlign: 'center' }}>
            <strong>User Selections</strong>
          </div>
          <ul style={{ listStyleType: 'none' }}>
            {user_scores_data.user_selections.map((userSelection, index) => {
              const correctAnswer = user_scores_data.correct_answers[index];
              const isCorrect = userSelection === correctAnswer;
              return (
                <li key={index} style={{ marginBottom: '5px' }}>
                  <span style={{ color: isCorrect ? 'green' : 'red' }}>{userSelection}</span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
    <div>
      <strong>All Scores</strong>
      <div>
        <ul style={{ listStyleType: 'none' }}>
          {scores.map((score) => (
            <li key={score.pk}>
              <div style={{ display: 'flex', alignItems: 'center', backgroundColor: 'lightblue', border: 'solid' }}>
                <button onClick={() => handleUpdate(score.pk)} style={{ marginRight: '10px' }}>Edit</button>
                <button onClick={() => handleDelete(score.pk)} style={{ marginRight: '10px' }}>Delete</button>
                {score.fields.created_at} - {score.fields.score}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </div>
);
}
}