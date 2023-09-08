import React from "react";
import { BsFillMoonStarsFill } from "react-icons/bs";

export default function Nav({ toggleDarkMode }) {
  return (
    <nav className="p-10 mb-12 flex flex-col items-center  sm:flex-row sm:justify-between sm:items-center ">
      <BsFillMoonStarsFill
        className="cursor-pointer text-2xl dark:text-yellow-100 mb-3"
        onClick={() => toggleDarkMode()}
      />
      <h1 className="text-2xl  dark:text-lime-500 font-custom mb-3">
        Myk.Benot
      </h1>

      <ul className="flex center">
        <li>
          <a
            className="bg-sky-900 text-white px-4 py-2 rounded-md ml-8 cursor-pointer dark:text-yellow-100 dark:border border-yellow-100 hover:border-lime-500 hover:text-lime-500 mb-3"
            href="#skills"
          >
            Skills
          </a>
        </li>
        <li>
          <a
            className="bg-sky-900 text-white px-4 py-2 rounded-md ml-4 cursor-pointer dark:text-yellow-100 dark:border border-yellow-100 hover:border-lime-500 hover:text-lime-500 mb-3"
            href="#footer"
          >
            Socials
          </a>
        </li>
        <li>
          <a
            className="bg-sky-900 text-white px-4 py-2 rounded-md ml-4 cursor-pointer dark:text-yellow-100 dark:border border-yellow-100 hover:border-lime-500 hover:text-lime-500 mb-3"
            href="mailto:sirbenot76@gmail.com"
          >
            Email
          </a>
        </li>
      </ul>
    </nav>
  );
}
