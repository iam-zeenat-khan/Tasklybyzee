// DashboardSidebar.js
import { FaTasks, FaCalendar, FaChartBar } from 'react-icons/fa';

const DashboardSidebar = () => {
  return (
    <div className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col gap-4">
      <button className="flex items-center gap-2">
        <FaTasks /> Tasks
      </button>
      <button className="flex items-center gap-2">
        <FaCalendar /> Calendar
      </button>
      <button className="flex items-center gap-2">
        <FaChartBar /> Analytics
      </button>
    </div>
  );
};

export default DashboardSidebar;
