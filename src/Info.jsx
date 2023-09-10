import React from "react";
import image2 from "./images/image2.jpg";
import projectsData from "./Data.jsx";
import {
  SiCss3,
  SiGit,
  SiHtml5,
  SiJavascript,
  SiReact,
  SiTailwindcss,
} from "react-icons/si";

export default function Info() {
  return (
    <>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center md:flex items-center">
        <div className="mr-6">
          <h2 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl py-2 text-slate-900 font-medium dark:text-yellow-100">
            Mike Reutzel
          </h2>
          <h3 className="text-2xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-5xl py-2 text-slate-800 dark:text-lime-500 font-custom">
            Front End Dev
          </h3>
          <p className="text-md sm:text-lg md:text-lg lg:text-xl xl:text-2xl leading-6 sm:leading-8 text-slate-600 mb-12 dark:text-yellow-100">
            I'm a frontend developer located in Poland.
          </p>
        </div>
        <img
          className="rounded-full mb-12 w-80 h-80 object-cover overflow-hidden mx-auto"
          src={image2}
          alt="Mike Reutzel"
        />
      </div>
      <div className="p-4 sm:p-6 md:p-8 lg:p-10 xl:p-12 text-center  items-center">
        <h3
          className="
          text-center
          text-2xl
          text-slate-800
          font-medium
          dark:text-yellow-100"
        >
          About Me
        </h3>
        <p className="mt-12 mb-24  text-md sm:text-lg md:text-lg lg:text-xl leading-6 sm:leading-8 text-slate-800 text-left dark:text-yellow-100 font-custom">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Labore earum
          assumenda neque quam sit, odit iusto. Id libero eligendi explicabo
          exercitationem velit a, non reprehenderit nesciunt suscipit,
          voluptatum aspernatur culpa?
        </p>
      </div>

      <h3 className="text-center text-2xl text-slate-800 font-medium dark:text-yellow-100 ">
        Skills:
      </h3>
      <div
        className="mb-24 text-6xl flex justify-center flex-wrap gap-12 py-3 text-sky-900  mt-12 md:text-8xl dark:text-yellow-100"
        id="skills"
      >
        <SiHtml5 />
        <SiCss3 />
        <SiJavascript />
        <SiReact />
        <SiTailwindcss />
        <SiGit />
      </div>

      <h3 className="text-center text-2xl text-slate-800 font-medium dark:text-yellow-100">
        Projects:
      </h3>
      <div className=" my-12 mx-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 place-items-center ">
        {projectsData.map((project) => (
          <div
            className=" text-center flex flex-col items-center  shadow-lg p-2 rounded-xl min-w-full dark:bg-yellow-50"
            key={project.title}
          >
            <img
              className="rounded-md mb-4 h-48 w-48 object-fit"
              src={project.imageSrc}
              alt={project.title}
            />
            <div className="text-center m-2">
              <h3 className="text-2xl text-slate-800 font-medium dark:text-sky-900">
                {project.title}
              </h3>
              <p className=" text-base leading-6 text-slate-600 dark:text-sky-900 break-words">
                {project.description}
              </p>
              <div className="flex flex-col">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-slate-800 dark:text-sky-900"
                >
                  View Project
                </a>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-md text-slate-800 dark:text-sky-900"
                >
                  View Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
