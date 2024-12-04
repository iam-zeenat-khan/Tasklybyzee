import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { AddCircle } from '@mui/icons-material';

const WeeklyPinned = () => {
  const [pinnedItems, setPinnedItems] = useState([
    { title: 'Call doctor for tests', date: '15 Mar 2020 - 9:00 AM' },
    { title: 'Beatrice’s Birthday', date: '22 Mar 2020' },
  ]);
  const [newTitle, setNewTitle] = useState('');
  const [newDate, setNewDate] = useState('');

  const addPinnedItem = () => {
    if (newTitle && newDate) {
      const newItem = { title: newTitle, date: newDate };
      setPinnedItems([...pinnedItems, newItem]);
      setNewTitle('');
      setNewDate('');
    } else {
      alert('Please enter both a title and a date.');
    }
  };

  return (
    <motion.div
      className="bg-[#DEDEEA] p-4 rounded-md shadow-md space-y-4 md:max-w-lg sm:max-w-full"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-[#61678B] font-semibold text-lg sm:text-base">Weekly Pinned</h2>
        <button className="text-[#78ACC1] text-sm sm:text-xs">View all</button>
      </div>

      {/* Pinned Items */}
      <div className="space-y-4">
        {pinnedItems.map((item, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-md shadow-sm flex items-start space-x-4"
          >
            <div className="bg-[#F5D78B] p-2 rounded-full flex-shrink-0">
              <AddCircle fontSize="small" />
            </div>
            <div>
              <p className="text-[#61678B] font-medium text-sm sm:text-xs">{item.title}</p>
              <span className="text-sm sm:text-xs text-[#98BFD0]">{item.date}</span>
            </div>
          </div>
        ))}
      </div>

      {/* Add New Pinned Item Form */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Task Title"
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Date"
          value={newDate}
          onChange={(e) => setNewDate(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button
          onClick={addPinnedItem}
          className="flex items-center justify-center space-x-2 bg-[#78ACC1] text-white px-4 py-2 rounded-md shadow-sm w-full sm:w-auto"
        >
          <AddCircle fontSize="small" />
          <span className="text-sm sm:text-xs">Add new weekly pin</span>
        </button>
      </div>
    </motion.div>
  );
};

export default WeeklyPinned;
