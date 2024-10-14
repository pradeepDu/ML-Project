// src/App.tsx
import React, { useState } from 'react';
import InputForm from './components/Input'; // Ensure the form is imported correctly

const App: React.FC = () => {
  const [message, setMessage] = useState('');

  // Function to send form data to Flask backend and get prediction
  const getPrediction = async (formData: any) => {
    try {
      const response = await fetch('http://localhost:5000/predict', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          Age: formData.age,
          Height: formData.height,
          Weight: formData.weight,
          Duration: formData.duration,
          Heart_Rate: formData.heartRate,
          Body_Temp: formData.bodyTemp,
          Gender: formData.gender, // Assuming gender is included in formData
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
        
        <InputForm onResponse={getPrediction} /> {/* Pass getPrediction directly */}

        {message && <p className="mt-4 text-center text-lg">{message}</p>}
      </div>
    </div>
  );
};

export default App;
