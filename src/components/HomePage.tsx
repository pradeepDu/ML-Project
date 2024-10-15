import React from 'react';
import { useNavigate } from 'react-router-dom';

const HomePage: React.FC = () => {
  const navigate = useNavigate();

  const onNavigateToInputForm = () => {
    navigate('/input');
  };

  return (
    <div className="min-h-screen flex flex-col justify-between bg-base-200">
      {/* Header or Navbar Section */}
      <header className="bg-gray-1000 text-white p-6 text-center">
        <h1 className="text-4xl font-bold">Welcome to the Health Tracker</h1>
        <p className="mt-2 text-lg">Track your workout metrics and predict calories burned</p>
        <button 
          onClick={onNavigateToInputForm} 
          className="mt-4 btn btn-primary"
        >
          Go to Input Form
        </button>
      </header>

      {/* Content Section */}
      <main className="flex-grow flex items-center justify-center">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-4">Track Your Health</h2>
          <p className="text-lg mb-6">Enter your workout details and get accurate predictions on calories burned.</p>
          <button 
            onClick={onNavigateToInputForm} 
            className="btn btn-primary"
          >
            Get Started
          </button>
        </section>
      </main>

      {/* Footer Section */}
      <footer className="bg-gray-800 text-white p-4 text-center">
        <p>&copy; 2024 Health Tracker. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default HomePage;
