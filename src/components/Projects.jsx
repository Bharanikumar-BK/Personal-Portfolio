import { useEffect, useState } from "react";
import Blog from "../assets/blog.jpg";
import Ecommerce from "../assets/ecommerce.jpg";
import Task from "../assets/task.jpg";
import Weather from "../assets/Weather.png";
import Movie from "../assets/movie.png";

const Projects = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const projects = [
    {
      id: 1,
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with React, Node.js, and MongoDB. Features include user authentication, payment processing, and admin dashboard.",
      image: Ecommerce,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      liveLink: "https://example-ecommerce.com",
      githubLink: "https://github.com/username/ecommerce-platform",
      featured: true,
      category: "fullstack",
    },
    {
      id: 2,
      title: "Task Management App",
      description:
        "A collaborative task management application with real-time updates, drag-and-drop functionality, and team collaboration features.",
      image: Task,
      technologies: ["React JS", "Tailwind CSS"],
      liveLink: "https://task-management-app-snowy.vercel.app/",
      githubLink: "https://github.com/Bharanikumar-BK/Task-Management-App.git",
      featured: false,
      category: "frontend",
    },
    {
      id: 3,
      title: "Weather Dashboard",
      description:
        "A responsive weather application with location-based forecasts, interactive maps, and detailed weather analytics.",
      image: Weather,
      technologies: ["React JS", "API Integration", "Tailwind CSS"],
      liveLink: "https://weather-app-using-react-gilt.vercel.app/",
      githubLink:
        "https://github.com/Bharanikumar-BK/Weather-App-Using-React.git",
      featured: false,
      category: "frontend",
    },
    {
      id: 4,
      title: "MindScribe Web Application",
      description:
        "A modern, responsive Mindscribe web app using React JS, Node JS and Express JS with Axios API, featuring smooth animations and optimized performance.",
      image: Blog,
      technologies: [
        "React",
        "Tailwind CSS",
        "Node JS",
        "Express JS",
        "Axios API",
      ],
      liveLink: "https://mindscribe-web-app-frontend.onrender.com/",
      githubLink: "https://github.com/Bharanikumar-BK/Mindscribe-Web-App.git",
      featured: false,
      category: "fullstack",
    },
    {
      id: 5,
      title: "Movie Web Application",
      description:
        "I built a Movie App using React.js and Tailwind CSS, fetching real-time movie data from the TMDB API. The app includes a search feature, genre-based filtering, and a Watchlist where users can save their favorite movies. It's fully responsive and styled with a clean, modern UI.",
      image: Movie,
      technologies: ["React", "Tailwind CSS", "Fetch API"],
      liveLink: "https://movie-application-using-react-js-jh.vercel.app/",
      githubLink:
        "https://github.com/Bharanikumar-BK/Movie-Application-Using-React-JS",
      featured: false,
      category: "frontend",
    },
  ];

  return (
    <section
      className="min-h-screen py-16 md:py-24 px-4 md:px-8 md:ml-64 bg-gray-100"
      id="projects"
    >
      <div className="container mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-4 tracking-tight">
              My <span className="text-gray-600">Projects</span>
            </h1>
            <div className="w-24 h-1 bg-gray-400 mx-auto rounded-full mb-6"></div>
            <p className="text-gray-500 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed">
              A collection of projects that showcase my skills and passion for
              web development
            </p>
          </div>

          {/* Projects Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`group bg-gray-50 rounded-3xl shadow-md border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-500 hover:-translate-y-1 ${
                  project.featured ? "lg:col-span-2 lg:row-span-1" : ""
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Image Container */}
                <div
                  className={`relative overflow-hidden ${
                    project.featured ? "h-72 md:h-96" : "h-56 md:h-64"
                  }`}
                >
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  {project.featured && (
                    <div className="absolute top-6 left-6 z-20">
                      <span className="bg-gray-700 text-white px-4 py-2 rounded-full text-sm font-bold shadow-lg flex items-center">
                        Featured
                      </span>
                    </div>
                  )}

                  {/* Hover Overlay with Links */}
                  <div className="absolute inset-0 z-20 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500">
                    <div className="flex space-x-4">
                      <a
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-4 rounded-full hover:bg-gray-600 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                          />
                        </svg>
                      </a>
                      <a
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-white text-gray-800 p-4 rounded-full hover:bg-gray-800 hover:text-white transition-all duration-300 shadow-lg transform hover:scale-110"
                      >
                        <svg
                          className="w-6 h-6"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                        </svg>
                      </a>
                    </div>
                  </div>
                </div>

                {/* Content Container */}
                <div className="p-6 md:p-8">
                  <h3 className="text-2xl font-bold text-gray-800 mb-3 group-hover:text-gray-600 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-500 mb-5 leading-relaxed line-clamp-3">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-4 py-2 bg-gray-200 text-gray-700 rounded-full text-sm font-semibold hover:bg-gray-300 transition-all duration-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex space-x-4 pt-4 border-t border-gray-200">
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-700 hover:text-gray-900 font-semibold transition-colors group/link"
                    >
                      <span>Live Demo</span>
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center space-x-2 text-gray-500 hover:text-gray-700 font-semibold transition-colors group/link"
                    >
                      <span>Code</span>
                      <svg
                        className="w-4 h-4 group-hover/link:translate-x-1 transition-transform"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center bg-gray-800 rounded-3xl p-12 shadow-lg">
            <h3 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Interested in seeing more?
            </h3>
            <p className="text-gray-300 text-lg mb-8 max-w-2xl mx-auto">
              Check out my GitHub profile for more projects and open-source
              contributions
            </p>
            <a
              href="https://github.com/Bharanikumar-BK"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-3 px-8 py-4 bg-gray-50 text-gray-800 rounded-full hover:bg-gray-200 transition-all duration-300 shadow font-bold text-lg group"
            >
              <span>View All Projects</span>
              <svg
                className="w-6 h-6 group-hover:translate-x-1 transition-transform"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
