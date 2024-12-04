import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Calendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [daysInMonth, setDaysInMonth] = useState([]);

  useEffect(() => {
    const month = currentDate.getMonth();
    const year = currentDate.getFullYear();
    const totalDays = new Date(year, month + 1, 0).getDate(); // Get the total number of days in the current month

    const days = Array.from({ length: totalDays }, (_, index) => index + 1);
    setDaysInMonth(days);
  }, [currentDate]);

  const currentDay = currentDate.getDate(); // Get today's day
  const currentMonth = currentDate.getMonth();
  const currentYear = currentDate.getFullYear();

  // Get the first day of the current month (0 = Sunday, 6 = Saturday)
  const firstDayOfMonth = new Date(currentYear, currentMonth, 1).getDay();

  return (
    <motion.div
      className="bg-[#DEDEEA] p-4 sm:p-6 lg:p-8 rounded-md shadow-md mt-6 sm:mt-8 max-w-xl mx-auto"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-[#61678B] font-semibold text-lg sm:text-xl">
          {`${currentDate.toLocaleString('default', { month: 'long' })}, ${currentYear}`}
        </h3>
        <button
          onClick={() => setCurrentDate(new Date())}
          className="text-[#78ACC1] text-sm sm:text-base hover:underline"
        >
          Today
        </button>
      </div>

      {/* Days of the Week */}
      <div className="grid grid-cols-7 gap-2 sm:gap-4 text-center text-sm sm:text-base text-[#61678B] mb-4">
        {['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day, idx) => (
          <span key={idx} className="font-medium">
            {day}
          </span>
        ))}
      </div>

      {/* Days of the Month */}
      <div className="grid grid-cols-7 gap-1 sm:gap-2 md:gap-3 lg:gap-4">
        {/* Add empty days before the first day of the month */}
        {[...Array(firstDayOfMonth)].map((_, index) => (
          <span key={index}></span>
        ))}
        
        {daysInMonth.map((day) => (
          <button
            key={day}
            className={`p-2 sm:p-3 md:p-4 lg:p-2 text-xs sm:text-sm md:text-base lg:text-sm rounded-full transition-all ${
              day === currentDay
                ? 'bg-[#94a3dc] text-white'
                : 'hover:bg-[#98BFD0] hover:text-white'
            }`}
          >
            {day}
          </button>
        ))}
      </div>
    </motion.div>
  );
};

export default Calendar;
