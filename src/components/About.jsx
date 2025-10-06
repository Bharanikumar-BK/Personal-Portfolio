import { useEffect, useState } from "react";

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Express JS", level: 75 },
    { name: "Java", level: 70 },
    { name: "Python", level: 65 },
  ];

  const education = [
    {
      degree: "Master of Science in Computer Science",
      school: "PSG College of arts and science",
      year: "2023-2025",
      description: "Coimbatore",
    },
    {
      degree: "Full Stack Web Development Bootcamp",
      school: "Error Makes Clever Academy",
      year: "2025",
      description:
        "Intensive 3-month program covering modern web development technologies.",
    },
    {
      degree: "Bachelor of Science in Mathematics",
      school: "Gobi arts and science college",
      year: "2022",
      description: "Gobichettipalayam",
    },
  ];

  const experience = [
    {
      role: "Full Stack Developer",
      company: "Skylink Fibernet Private Limited",
      period: "April 2025 - Present",
      description:
        "Developing responsive web applications using React, Tailwind, and modern CSS frameworks.",
    },
  ];

  return (
    <section className="min-h-screen py-16 md:py-24 px-4 md:px-8 md:ml-64 bg-gray-100">
      <div className="container mx-auto max-w-7xl">
        <div
          className={`transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          {/* Header Section */}
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-4 tracking-tight">
              About <span className="text-gray-700">Me</span>
            </h1>
            <div className="w-24 h-1 bg-gradient-to-r from-gray-700 to-gray-900 mx-auto rounded-full"></div>
          </div>

          {/* Biography Section with Image Placeholder */}
          <div className="bg-gray-200 rounded-3xl shadow-2xl p-8 md:p-12 mb-12 border border-gray-300 hover:shadow-3xl transition-shadow duration-500 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-gradient-to-br from-gray-300 to-gray-400 rounded-full blur-3xl opacity-30 -mr-32 -mt-32"></div>
            <div className="relative z-10">
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Personal Biography
                </h2>
              </div>
              <div className="space-y-5 text-gray-800 leading-relaxed text-lg">
                <p className="first-letter:text-5xl first-letter:font-bold first-letter:text-gray-900 first-letter:mr-2 first-letter:float-left">
                  I'm{" "}
                  <span className="text-gray-900 font-semibold">
                    Bharanikumar (BK)
                  </span>
                  , a passionate and motivated Computer Science student with
                  strong foundations in Core Java, Web Development (MERN Stack),
                  and MySQL. Completed my M.Sc. Computer Science at PSG College
                  of Arts and Science (CGPA: 8.1), I combine academic knowledge
                  with hands-on project experience.
                </p>
                <p>
                  I believe in writing clean, maintainable code and creating
                  intuitive user experiences. When I'm not coding, you can find
                  me exploring new technologies, contributing to open-source
                  projects, or sharing knowledge with the developer community.
                </p>
                <p>
                  I'm constantly exploring new technologies, recently diving
                  into cloud, automation, and full-stack development, while
                  aiming to craft solutions that are clean, scalable, and
                  user-friendly.
                </p>
              </div>
            </div>
          </div>

          {/* Skills and Education Grid */}
          <div className="grid lg:grid-cols-2 gap-8 mb-12">
            {/* Skills Section */}
            <div className="bg-gray-200 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-300 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  Skills & Expertise
                </h2>
              </div>
              <div className="space-y-6">
                {skills.map((skill, index) => (
                  <div
                    key={skill.name}
                    className="group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-800 font-semibold text-lg">
                        {skill.name}
                      </span>
                      <span className="text-gray-900 font-bold text-lg">
                        {skill.level}%
                      </span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-3 overflow-hidden shadow-inner">
                      <div
                        className="bg-gray-700 h-3 rounded-full transition-all duration-1500 ease-out shadow-lg"
                        style={{ width: `${skill.level}%` }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Education Section */}
            <div className="bg-gray-200 rounded-3xl shadow-2xl p-8 md:p-10 border border-gray-300 hover:shadow-3xl transition-all duration-500 hover:-translate-y-1">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-4">
                  <svg
                    className="w-6 h-6 text-white"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-gray-900">Education</h2>
              </div>
              <div className="space-y-8">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-4 border-gray-700 hover:border-gray-900 transition-colors"
                    style={{ animationDelay: `${index * 0.2}s` }}
                  >
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gray-700 rounded-full border-4 border-white shadow-lg"></div>
                    <h3 className="font-bold text-gray-900 text-lg mb-1">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 font-medium">{edu.school}</p>
                    <p className="text-gray-900 font-semibold text-sm mt-1">
                      {edu.year}
                    </p>
                    <p className="text-gray-600 text-sm mt-2 leading-relaxed">
                      {edu.description}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Experience Section */}
          <div className="bg-gray-200 rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-300 hover:shadow-3xl transition-all duration-500">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-gray-700 rounded-xl flex items-center justify-center mr-4">
                <svg
                  className="w-6 h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </div>
              <h2 className="text-3xl font-bold text-gray-900">
                Professional Experience
              </h2>
            </div>
            <div className="space-y-8">
              {experience.map((exp, index) => (
                <div
                  key={index}
                  className="relative p-6 bg-gray-100 rounded-2xl border-l-4 border-gray-700 hover:shadow-lg transition-all duration-300"
                  style={{ animationDelay: `${index * 0.2}s` }}
                >
                  <div className="flex flex-col lg:flex-row lg:justify-between lg:items-start mb-3">
                    <h3 className="font-bold text-gray-900 text-2xl">
                      {exp.role}
                    </h3>
                    <span className="text-sm font-semibold bg-gray-700 text-white px-4 py-2 rounded-full mt-2 lg:mt-0 inline-block">
                      {exp.period}
                    </span>
                  </div>
                  <p className="text-gray-900 font-semibold text-lg mb-3">
                    {exp.company}
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    {exp.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
