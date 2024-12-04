import React, { useState, useEffect } from 'react';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import WbSunnyIcon from '@mui/icons-material/WbSunny';

const DateTimeDisplay = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [quote, setQuote] = useState('Unlock your potential, one task at a time.');

  useEffect(() => {
    const timer = setInterval(() => setCurrentDate(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  const formattedDate = currentDate.toLocaleDateString('en-US', {
    weekday: 'long',
    month: 'long',
    day: 'numeric',
  });

  const formattedTime = currentDate.toLocaleTimeString('en-US', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return (
    <div className="bg-[#F4F5FA] text-gray-900 p-6 rounded-lg shadow-md mb-6">
      {/* Time Section */}
      <div className="flex items-center justify-between">
        <div className="text-left">
          <h2 className="text-4xl font-bold">{formattedTime}</h2>
          <p className="text-md text-gray-500 flex items-center">
            <WbSunnyIcon className="mr-1" /> Now is almost Sunny
          </p>
        </div>
        <AccessTimeIcon className="text-purple-500 text-6xl" />
      </div>

      {/* Quote Section */}
      <div className="mt-6 bg-[#BCB9D8] text-white p-4 rounded-lg flex items-center justify-between shadow-md">
        <div>
          <h3 className="font-bold text-lg">Unleash your potential!</h3>
          <p className="text-sm mt-1">{quote}</p>
        </div>
        <button className="bg-purple-300 text-white rounded-full px-4 py-2 font-bold text-sm">
          Explore
        </button>
      </div>
    </div>
  );
};

export default DateTimeDisplay;
