import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"; 
import HeroBg from "../assets/bg.jpg";

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const fullText = "I'm a Software Engineer";
  const navigate = useNavigate();

  useEffect(() => {
    setIsVisible(true);

    // Typing animation
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.substring(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <section
      id="home"
      className="h-screen flex items-center justify-center bg-cover bg-center bg-no-repeat relative overflow-hidden"
      style={{
        backgroundImage: `url(${HeroBg})`,
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Content */}
      <div
        className={`relative z-10 text-white text-center px-6 transition-all duration-700 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}
      >
        {/* Name */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-slide-up">
          Bharanikumar R
        </h1>

        {/* Typing Animation */}
        <p
          className="text-2xl md:text-3xl text-blue-300 font-light mb-6 animate-slide-up inline-block"
          style={{ animationDelay: "0.2s" }}
        >
          {displayedText}
          <span className="border-r-2 border-blue-400 ml-1 animate-blink"></span>
        </p>

        {/* Short Description */}
        <p
          className="max-w-2xl mx-auto text-gray-200 text-lg md:text-xl mb-10 leading-relaxed animate-slide-up"
          style={{ animationDelay: "0.4s" }}
        >
          I build modern and efficient web apps using the latest technologies. I
          care about clean code, performance, and creating smooth user
          experiences.
        </p>

        {/* Buttons */}
        <div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-slide-up"
          style={{ animationDelay: "0.6s" }}
        >
          <button
            onClick={() => navigate("/projects")} // ✅ navigate to Projects page
            className="px-8 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-500 transition-all shadow-lg"
          >
            View My Work
          </button>
          <button
            onClick={() => navigate("/contact")} // ✅ navigate to Contact page
            className="px-8 py-3 border border-gray-300 text-gray-100 rounded-lg hover:bg-white/10 transition-all"
          >
            Get In Touch
          </button>
        </div>

        {/* Scroll Indicator */}
        <div className="mt-20 animate-bounce-slow">
          <div className="w-6 h-10 border-2 border-white/60 rounded-full mx-auto flex justify-center">
            <div className="w-1 h-3 bg-white mt-2 rounded-full"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
