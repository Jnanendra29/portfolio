import projects from "./projectData";
import React from "react";

export default function Projects() {
  console.log(projects);
  return (
    <section id="projects" className="text-gray-400 bg-gray-900 body-font">
      <div className="container px-5 py-10 mx-auto text-center lg:px-40">
        <div className="flex flex-col w-full mb-20">
          <img
            src="/assets/code.png"
            alt="code-Icon"
            className="mx-auto inline-block w-10 mb-4"
          />
          <h1 className="sm:text-4xl text-3xl font-medium title-font mb-4 text-white">
            Apps I've Built
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-justify">
            As a fresher in web development, I've engaged in diverse projects
            aimed at cultivating foundational skills. Using HTML, CSS, and
            JavaScript, I've crafted responsive interfaces and experimented with
            React.js for dynamic components. Additionally, I've delved into
            backend development with Node.js and MongoDB, gaining insights into
            server-side programming and database management. 
            <br />
            <br /> While my projects may not boast extensive complexity or
            industry accolades, they represent my dedication to learning and my
            eagerness to grow as a web developer. I'm eager to leverage these
            experiences to contribute effectively to collaborative projects and
            continue expanding my knowledge in the field.
          </p>
        </div>
        <div className="flex flex-wrap -m-4">
          {projects.map((project) => (
            <a
              href={project.link}
              key={project.title}
              className="sm:w-1/2 w-100 p-4"
            >
              <div className="flex relative">
                <img
                  src={project.image}
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-center object-fit: contain;"
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-800 bg-gray-900 opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-green-400 mb-1">
                    {project.subtitle}
                  </h2>
                  <h1 className="title-font text-lg font-medium text-white mb-3">
                    {project.title}
                  </h1>
                  <p className="leading-relaxed">{project.description}</p>
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
