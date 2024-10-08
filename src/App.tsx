// src/App.tsx
import React, { useState } from 'react';
import InputForm from './components/Input'; // Ensure the form is imported correctly

const App: React.FC = () => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    duration: '',
    bodyTemp: '',
    heartRate: ''
  });
  const [message, setMessage] = useState('');

  // Function to handle the form data
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Function to send form data to Flask backend and get prediction
  const getPrediction = async () => {
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          age: formData.age,
          height: formData.height,
          weight: formData.weight,
          duration: formData.duration,
          heartRate: formData.heartRate,
          bodyTemp: formData.bodyTemp
        }),
      });
      const data = await response.json();
      if (data.Calories) {
        setMessage(`Predicted Calories: ${data.Calories}`);
      } else if (data.error) {
        setMessage(`Error: ${data.error}`);
      }
    } catch (error) {
      setMessage('Error while fetching prediction.');
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-800 text-white p-6">
      <div className="w-full max-w-md">
        <h1 className="text-3xl font-bold text-center mb-6">Calorie Prediction App</h1>
        
        <InputForm formData={formData} handleChange={handleChange} /> {/* Render the form */}

        <button className="btn btn-primary w-full mt-4" onClick={getPrediction}>
          Get Prediction
        </button>

        {message && <p className="mt-4 text-center text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default App;
