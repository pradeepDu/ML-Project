// src/components/Input.tsx
import React, { useState } from 'react';

// Define the props that InputForm will accept
interface InputFormProps {
  onResponse: (formData: {
    age: string;
    weight: string;
    height: string;
    duration: string;
    bodyTemp: string;
    heartRate: string;
    gender: string;
  }) => void;
}

const InputForm: React.FC<InputFormProps> = ({ onResponse }) => {
  const [formData, setFormData] = useState({
    age: '',
    weight: '',
    height: '',
    duration: '',
    bodyTemp: '',
    heartRate: '',
    gender: '', // Start with an empty string for gender
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onResponse(formData); // Call the onResponse with the collected data
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col space-y-4 bg-gray-900 p-6 rounded-lg shadow-lg transition duration-300 ease-in-out hover:shadow-xl">
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

      <div>
        <label className="label text-gray-300">Gender</label>
        <select
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          className="input input-bordered w-full bg-gray-800 border-gray-600 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500 transition duration-300 ease-in-out"
        >
          <option value="">Select Gender</option> {/* Default empty option */}
          <option value="male">Male</option>
          <option value="female">Female</option>
        </select>
      </div>

      <button type="submit" className="btn btn-primary w-full mt-4">Submit</button>
    </form>
  );
};

export default InputForm;
