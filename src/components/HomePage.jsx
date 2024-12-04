import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const HomePage = () => {
  return (
    <div className="min-h-screen bg-[#F3F0FA] flex flex-col justify-center items-center">
      {/* Header Section */}
      <header className="w-full bg-[#F3F0FA] text-center py-8 shadow-">
        <h1 className="text-4xl font-bold text-[#3B185F] drop-shadow-sm">
          Welcome to Taskly!
        </h1>
        <p className="text-lg text-[#3B185F] mt-2">
          Your personal task manager to stay productive every day.
        </p>
      </header>

      {/* Main Content */}
      <div className="w-11/12 md:w-2/3 lg:w-1/2 mt-8 p-6 bg-purple
       rounded-lg shadow-lg text-center">
        {/* Animated Greeting */}
        <motion.h2
          className="text-3xl font-semibold text-[#4F3E72] mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          Stay Organized with Ease
        </motion.h2>
        <motion.p
          className="text-[#6C567B] mb-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 1 }}
        >
          Manage your tasks, events, and schedule with a simple and elegant
          dashboard.
        </motion.p>

        {/* Action Button */}
        <motion.div
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.4, duration: 0.5 }}
        >
          <Link
            to="/tasks"
            className="bg-[#9E87BD] hover:bg-[#A987A8] text-white font-medium py-3 px-6 rounded-full transition duration-300 shadow-md"
          >
            Get Started
          </Link>
        </motion.div>
      </div>

      {/* Decorative Elements */}
      <motion.div
        className="absolute top-10 left-20 w-16 h-16 bg-[#ECD4EA] rounded-full blur-xl"
        animate={{ y: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-24 h-24 bg-[#A987A8] rounded-full blur-lg"
        animate={{ x: [0, 20, -20, 0] }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>
  );
};

export default HomePage;
