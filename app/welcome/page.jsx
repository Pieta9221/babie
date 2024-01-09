
"use client"
import React, { useState, useEffect } from 'react';
import Confetti from 'react-confetti';

export default function Home() {
  const [inputValue, setInputValue] = useState('');
  const [showConfetti, setShowConfetti] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const startConfetti = () => {
    setShowConfetti(true);
  };

  const stopConfetti = () => {
    setShowConfetti(false);
  };

  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (inputValue.trim() !== '') {
      setShowPopup(true);

      // Start confetti immediately
      startConfetti();

      // Show confetti in a loop every 3 seconds
      const confettiInterval = setInterval(() => {
        startConfetti();
      }, 3000);

      // Stop confetti and clear the interval after 15 seconds
      setTimeout(() => {
        stopConfetti();
        clearInterval(confettiInterval);
      }, 50000); // Adjust the total duration as needed
    }
  };

  // useEffect to reset showConfetti after popup is closed
  useEffect(() => {
    if (!showPopup) {
      stopConfetti();
    }
  }, [showPopup]);

  return (
    <main className='m-auto justify-center align-middle py-20 px-10 flex-col'>
      <h2 className='text-center mx-auto font-bold text-[#0FC3D8] text-4xl mb-8'>Thanks for taking this chance!</h2>

      <div className="text-center mx-auto">
        <p className='mb-3 text-2xl'>Kindly enter your name to proceed</p>

        <form className="flex items-center mx-auto mt-8 p-6 w-full md:w-1/3 relative" onSubmit={handleFormSubmit}>
          <input
            type="text"
            required
            placeholder="Enter Name..."
            className="w-full py-3 px-4 rounded-3xl border border-gray-300 focus:outline-none focus:border-[#0FC3D8]"
            value={inputValue}
            onChange={handleInputChange}
          />
          <button
            type="submit"
            className="bg-[#0FC3D8] hover:bg-[#EF577C] cursor-pointer text-white py-3.5 px-4 rounded-3xl absolute left-[79%]"
          >
            Submit
          </button>
        </form>

        {showConfetti && (
          <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={40}
            recycle={false}
            run={showConfetti}
          />
        )}
      </div>
      {showPopup && (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
          <div className="bg-white p-8 rounded-md shadow-md text-center">
            <h2 className="text-3xl font-bold mb-4 text-[#EF577C]">Congratulations!</h2>
            <p>You are a grandma for the second time!</p>
            <button
              className="bg-[#EF577C] hover:bg-[#0FC3D8] text-white py-2 px-4 mt-4 rounded-md"
              onClick={() => {
                setShowPopup(false);
              }}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </main>
  );
}
