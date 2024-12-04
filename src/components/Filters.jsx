import React from "react";

const Filters = ({ filter, setFilter, searchTerm, setSearchTerm }) => {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center mb-6 gap-4">
      {/* Search */}
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/3"
      />

      {/* Filter Dropdown */}
      <select
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
        className="p-3 border border-gray-300 rounded-lg w-full sm:w-1/4"
      >
        <option value="all">All Tasks</option>
        <option value="completed">Completed Tasks</option>
        <option value="pending">Pending Tasks</option>
        <option value="overdue">Overdue Tasks</option>
      </select>
    </div>
  );
};

export default Filters;
