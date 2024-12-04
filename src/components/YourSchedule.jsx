import React, { useState } from 'react';
import { motion } from 'framer-motion';

const YourSchedule = () => {
  const [events, setEvents] = useState([
    { title: 'Meeting with client', time: '2:00 PM' },
    { title: 'Project Review', time: '4:00 PM' },
    { title: 'Team Brainstorming', time: '6:00 PM' },
  ]);
  const [newEvent, setNewEvent] = useState('');
  const [newTime, setNewTime] = useState('');

  const addEvent = () => {
    if (newEvent && newTime) {
      setEvents([...events, { title: newEvent, time: newTime }]);
      setNewEvent('');
      setNewTime('');
    } else {
      alert('Please enter both an event and a time.');
    }
  };

  return (
    <motion.div
      className="bg-[#BCB9D8] p-6 rounded-lg shadow-md mx-auto space-y-4"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.3 }}
    >
      <h3 className="text-lg sm:text-xl font-semibold text-white text-center sm:text-left">
        Your Schedule
      </h3>
      <p className="text-gray-300 mt-2 text-center sm:text-left">Upcoming Events</p>
      <ul className="mt-4 space-y-2">
        {events.map((event, index) => (
          <li key={index} className="flex items-center justify-between text-sm sm:text-base">
            <span>{event.title}</span>
            <span className="text-xs sm:text-sm text-gray-400">{event.time}</span>
          </li>
        ))}
      </ul>

      {/* Add New Event Form */}
      <div className="space-y-2">
        <input
          type="text"
          placeholder="Event Title"
          value={newEvent}
          onChange={(e) => setNewEvent(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <input
          type="text"
          placeholder="Time"
          value={newTime}
          onChange={(e) => setNewTime(e.target.value)}
          className="w-full p-2 rounded-md border border-gray-300 focus:outline-none"
        />
        <button
          onClick={addEvent}
          className="bg-[#61678B]text-white px-4 py-2 rounded-md shadow-md w-full sm:w-auto"
        >
          Add Event
        </button>
      </div>
    </motion.div>
  );
};

export default YourSchedule;
