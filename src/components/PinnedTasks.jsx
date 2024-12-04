// PinnedTasks.jsx
import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PinnedTasks = () => {
  const [pinnedItems, setPinnedItems] = useState([
    { title: 'Call doctor for tests', date: '15 Mar 2020 - 9:00 AM' },
    { title: 'Beatrice’s Birthday', date: '22 Mar 2020' }
  ]);
  
  const addPinnedItem = () => {
    const newItem = { title: 'New Weekly Task', date: 'Date TBD' };
    setPinnedItems([...pinnedItems, newItem]);
  };

  return (
    <motion.div
      className="pinned-tasks space-y-4 bg-[#BCB9D8] p-4 rounded-md shadow-md"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.2 }}
    >
      <h2 className="font-semibold text-lg">Weekly Pinned</h2>
      {pinnedItems.map((item, index) => (
        <div key={index} className="bg-gray-100 p-3 rounded-md shadow-sm">
          <p>{item.title}</p>
          <span className="text-sm text-gray-400">{item.date}</span>
        </div>
      ))}
      <button onClick={addPinnedItem} className="text-[#61678B] font-semibold mt-4">
        + Add new weekly pin
      </button>
    </motion.div>
  );
};

export default PinnedTasks;
