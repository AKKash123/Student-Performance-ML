import React, { useState } from 'react';
import axios from 'axios';
import { Bar } from 'react-chartjs-2';
import './component/chartSetup'; 
import './App.css';

function App() {
  const [inputs, setInputs] = useState({
    study_hours: '',
    attendance_percent: '',
    previous_exam_score: '',
  });
  const [prediction, setPrediction] = useState(null);

  const handleChange = (e) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const handleSubmit = async () => {
    try {
      const res = await axios.post('http://localhost:8000/api/predict/', {
        study_hours: parseFloat(inputs.study_hours),
        attendance_percent: parseFloat(inputs.attendance_percent),
        previous_exam_score: parseFloat(inputs.previous_exam_score),
      });
      setPrediction(res.data.predicted_score);
    } catch (error) {
      console.error('Prediction error:', error);
    }
  };

  const chartData = {
    labels: ['Previous Score', 'Predicted Final Score'],
    datasets: [
      {
        label: 'Scores',
        data: [
          parseFloat(inputs.previous_exam_score || 0),
          prediction || 0,
        ],
        backgroundColor: ['#4287f5', '#4caf50'],
        borderRadius: 10,
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: 'top' },
      title: { display: true, text: 'Score Prediction Chart' },
    },
  };

  return (
    <div className="App" style={{ padding: '2rem' }}>
      <h1>Student Score Predictor</h1>
      <br/><h2>Prediction with Akash</h2>
      <input name="study_hours" placeholder="Study Hours" onChange={handleChange} />
      <input name="attendance_percent" placeholder="Attendance %" onChange={handleChange} />
      <input name="previous_exam_score" placeholder="Previous Score" onChange={handleChange} />
      <br />
      <button onClick={handleSubmit} style={{ margin: '10px' }}>Predict</button>

      {prediction && (
        <>
          <h3>Predicted Final Score: {prediction}</h3>
          <Bar data={chartData} options={chartOptions} />
        </>
      )}
    </div>
  );
}

export default App;
