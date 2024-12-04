import React from 'react';
import AddIcon from '@mui/icons-material/Add';
import { motion } from 'framer-motion';
import Avatar from '@mui/material/Avatar';
import { Link } from "react-router-dom";

const Header = () => (
  <motion.header
    className="flex flex-col md:flex-row items-center justify-between bg-[#BCB9D8] p-5 rounded-2xl shadow-xl space-y-4 md:space-y-0"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6}}
    >
  
<div className="flex items-center space-x-3">
  <div className="bg-[#DEDEEA] p-3 rounded-full">
    <span className="text-lg font-bold text-[#7c78c3]">Taskly</span>
  </div>
  
</div>

{/* Center Section: Title and Date */}
<div className="text-center md:text-left">
  <h2 className="text-black text-2xl sm:text-4xl md:text-5xl font-extrabold">
    Today's Schedule
  </h2>
  <p className="text-[#191a1a] font-semibold text-sm sm:text-lg md:text-xl leading-6 sm:leading-8">
    {new Date().toDateString()}
  </p>
</div>

{/* Right Section: Add Button and Profile */}
<div className="flex flex-col md:flex-row items-center space-y-3 md:space-y-0 md:space-x-5">
  <motion.button
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    className="cursor-pointer text-purple-500 hover:text-purple-700 transition p-3 rounded-full shadow-md"
    aria-label="Add Task"
  >
    <AddIcon />
  </motion.button>
  <div className="flex items-center space-x-3">
  
  <Link 
    to="/" 
    className=" text-[#7c78c3] hover:text-blue-700 transition font-semibold text-sm sm:text-base p-2 bg-[#DEDEEA] rounded-full shadow hover:shadow-lg"
  >
    Back to Home
  </Link>
</div>

</div>
</motion.header>
);

export default Header;

