// src/components/Input.tsx
import React from 'react';

// Define the props that InputForm will accept
interface InputFormProps {
  formData: {
    age: string;
    weight: string;
    height: string;
    duration: string;
    bodyTemp: string;
    heartRate: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const InputForm: React.FC<InputFormProps> = ({ formData, handleChange }) => {
  return (
    <form className="flex flex-col space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
      <h2 className="text-2xl font-bold mb-4 text-center text-white">Enter Your Details</h2>

      <div>
        <label className="label text-gray-300">Age</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
          placeholder="Enter Age"
          className="input input-bordered w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      <div>
        <label className="label text-gray-300">Weight</label>
        <input
          type="number"
          name="weight"
          value={formData.weight}
          onChange={handleChange}
          placeholder="Enter Weight"
          className="input input-bordered w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      <div>
        <label className="label text-gray-300">Height</label>
        <input
          type="number"
          name="height"
          value={formData.height}
          onChange={handleChange}
          placeholder="Enter Height"
          className="input input-bordered w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      <div>
        <label className="label text-gray-300">Duration (minutes)</label>
        <input
          type="number"
          name="duration"
          value={formData.duration}
          onChange={handleChange}
          placeholder="Enter Duration"
          className="input input-bordered w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      <div>
        <label className="label text-gray-300">Body Temperature (°C)</label>
        <input
          type="number"
          name="bodyTemp"
          value={formData.bodyTemp}
          onChange={handleChange}
          placeholder="Enter Body Temperature"
          className="input input-bordered w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>

      <div>
        <label className="label text-gray-300">Heart Rate (BPM)</label>
        <input
          type="number"
          name="heartRate"
          value={formData.heartRate}
          onChange={handleChange}
          placeholder="Enter Heart Rate"
          className="input input-bordered w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        />
      </div>
    </form>
  );
};

export default InputForm;
