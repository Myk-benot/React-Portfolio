import React, { useState } from "react";
import Nav from "./Nav.jsx";
import Info from "./Info.jsx";
import Footer from "./Footer.jsx";

export default function App() {
  const [darkMode, showdarkMode] = useState(false);
  function toggleDarkMode() {
    showdarkMode(!darkMode);
  }
  return (
    <div className={darkMode ? "dark" : ""}>
      <div className="bg-white md:px-20 lg:px-40 dark:bg-sky-900">
        <Nav toggleDarkMode={toggleDarkMode} />
        <Info />
        <Footer />
      </div>
    </div>
  );
}
