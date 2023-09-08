import React from "react";
import {
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

export default function Footer() {
  return (
    <>
      <div
        className="flex justify-around text-4xl p-10 mt-12 text-sky-900 dark:text-yellow-100 "
        id="footer"
      >
        <a
          className="hover:text-lime-500"
          href="https://github.com/Myk-benot"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillGithub />
        </a>
        <a
          className="hover:text-lime-500"
          href="https://www.linkedin.com/in/michael-reutzel-0b5642261/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillLinkedin />
        </a>
        <a
          className="hover:text-lime-500"
          href="https://twitter.com/i/flow/login"
          target="_blank"
          rel="noopener noreferrer"
        >
          <AiFillTwitterSquare />
        </a>
      </div>
    </>
  );
}
