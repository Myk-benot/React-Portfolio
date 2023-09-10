import React, { useState } from "react";
import Nav from "./Nav.jsx";
import Info from "./Info.jsx";
import Footer from "./Footer.jsx";
import { motion } from "framer-motion";

export default function App() {
  const [darkMode, showdarkMode] = useState(false);
  function toggleDarkMode() {
    showdarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 2 }}
        className="bg-white md:px-20 lg:px-40 dark:bg-sky-900 "
      >
        <Nav toggleDarkMode={toggleDarkMode} />
        <Info />
        <Footer />
      </motion.div>
    </div>
  );
}
