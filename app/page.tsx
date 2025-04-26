'use client'; // Required for interactivity like scroll and useState

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Head from 'next/head';

export default function Portfolio() {
  const [activeSection, setActiveSection] = useState('home');
  const [darkMode, setDarkMode] = useState(false);

  // Handle scroll to update active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'projects', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Scroll to section
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      window.scrollTo({
        top: element.offsetTop - 80,
        behavior: 'smooth'
      });
    }
  };

  // Toggle dark mode
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <div className={`min-h-screen ${darkMode ? 'dark' : ''}`}>
      <Head>
        <title>My Portfolio</title>
        <meta name="description" content="Professional portfolio website" />
      </Head>

      {/* Navigation */}
      <nav className={`fixed w-full z-10 ${darkMode ? 'bg-gray-900' : 'bg-blue-600'}`}>
        <div className="container mx-auto px-4 py-3 flex justify-between items-center">
          <div className="text-xl font-bold text-white">My Portfolio</div>
          
          <div className="flex items-center space-x-4">
            <div className="hidden md:flex space-x-6">
              {['home', 'about', 'projects', 'contact'].map((item) => (
                <button
                  key={item}
                  onClick={() => scrollToSection(item)}
                  className={`capitalize px-3 py-2 rounded transition ${activeSection === item ? 'bg-white text-blue-600 dark:bg-gray-700 dark:text-white' : 'text-white hover:bg-blue-700 dark:hover:bg-gray-700'}`}
                >
                  {item}
                </button>
              ))}
            </div>
            
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-white dark:bg-gray-700 text-blue-600 dark:text-white"
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation (hamburger menu) */}
      <div className="md:hidden fixed bottom-4 right-4 z-10">
        <div className="dropdown dropdown-top dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-circle bg-blue-600 dark:bg-gray-700 text-white">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </div>
          <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-white dark:bg-gray-800 rounded-box w-52 mb-4">
            {['home', 'about', 'projects', 'contact'].map((item) => (
              <li key={item}>
                <button
                  onClick={() => scrollToSection(item)}
                  className={`capitalize ${activeSection === item ? 'active bg-blue-100 dark:bg-gray-700' : ''}`}
                >
                  {item}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Main Content */}
      <main>
        {/* Home Section */}
        <section 
          id="home" 
          className="min-h-screen flex items-center justify-center bg-gradient-to-b from-blue-50 to-white dark:from-gray-800 dark:to-gray-900 pt-20"
        >
          <div className="container mx-auto px-4 py-16 flex flex-col md:flex-row items-center gap-12">
            {/* Profile Picture */}
            <div className="w-64 h-64 md:w-80 md:h-80 relative rounded-full overflow-hidden border-4 border-blue-500 dark:border-blue-700 shadow-xl">
              <Image
                src="/merci slain.JPG" // Replace with your image
                alt="Profile Picture"
                fill
                className="object-cover"
                priority
              />
            </div>

            {/* Introduction */}
            <div className="text-center md:text-left max-w-2xl">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-600 dark:text-blue-400">
                Hi, I'm <span className="text-blue-800 dark:text-blue-300">IBYISHAKA U. Syvetha</span>
              </h1>
              <h2 className="text-2xl md:text-3xl font-semibold mb-6 text-gray-700 dark:text-gray-300">
                Web Developer & Designer
              </h2>
              <p className="text-lg mb-8 text-gray-600 dark:text-gray-400">
                I create beautiful, functional websites with modern technologies like Next.js, React, and Tailwind CSS.
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <button 
                  onClick={() => scrollToSection('projects')}
                  className="px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg font-medium transition"
                >
                  View My Work
                </button>
                <button 
                  onClick={() => scrollToSection('contact')}
                  className="px-6 py-3 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded-lg font-medium transition"
                >
                  Contact Me
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* About Section */}
        <section 
          id="about" 
          className="min-h-screen py-20 bg-white dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
              About Me
            </h2>

            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Story</h3>
                  <p className="text-gray-600 dark:text-gray-400 mb-6">
                    I'm a passionate web developer with 5+ years of experience creating modern web applications. 
                    My journey began when I built my first website in high school, and I've been hooked ever since.
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    I specialize in responsive design, performance optimization, and creating intuitive user experiences.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-gray-200">My Skills</h3>
                  <div className="flex flex-wrap gap-3">
                    {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Node.js', 'MongoDB', 'Git', 'Figma'].map((skill) => (
                      <span 
                        key={skill}
                        className="px-4 py-2 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Experience</h3>
                <div className="space-y-6">
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">Senior Web Developer</h4>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">Tech Company Inc. • 2020 - Present</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Lead developer for company website and web applications. Implemented new features and improved performance.
                    </p>
                  </div>
                  <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                    <h4 className="text-xl font-medium text-gray-800 dark:text-gray-200">Web Developer</h4>
                    <p className="text-blue-600 dark:text-blue-400 mb-2">Digital Agency • 2018 - 2020</p>
                    <p className="text-gray-600 dark:text-gray-400">
                      Developed websites for various clients across different industries.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section 
          id="projects" 
          className="min-h-screen py-20 bg-gray-50 dark:bg-gray-900"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
              My Projects
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  id: 1,
                  title: "E-commerce Platform",
                  description: "Full-featured online store with product management, cart, and checkout system.",
                  technologies: ["Next.js", "React", "Node.js", "MongoDB"],
                  image: "/project1.jpg"
                },
                {
                  id: 2,
                  title: "Portfolio Website",
                  description: "Responsive portfolio website built with modern web technologies.",
                  technologies: ["Next.js", "Tailwind CSS", "TypeScript"],
                  image: "/project2.jpg"
                },
                {
                  id: 3,
                  title: "Task Management App",
                  description: "Application to manage personal or team tasks with drag-and-drop interface.",
                  technologies: ["React", "Firebase", "Material UI"],
                  image: "/project3.jpg"
                },
                {
                  id: 4,
                  title: "Weather Dashboard",
                  description: "Real-time weather information with forecast and location search.",
                  technologies: ["React", "OpenWeather API", "Chart.js"],
                  image: "/project4.jpg"
                },
                {
                  id: 5,
                  title: "Blog Platform",
                  description: "Content management system for publishing articles with markdown support.",
                  technologies: ["Next.js", "Sanity CMS", "Tailwind CSS"],
                  image: "/project5.jpg"
                },
                {
                  id: 6,
                  title: "Fitness Tracker",
                  description: "Application to track workouts and nutrition with progress charts.",
                  technologies: ["React Native", "Firebase", "Redux"],
                  image: "/project6.jpg"
                }
              ].map((project) => (
                <div 
                  key={project.id}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300"
                >
                  <div className="h-48 relative">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold mb-2 text-gray-800 dark:text-gray-200">{project.title}</h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.technologies.map((tech) => (
                        <span 
                          key={tech}
                          className="text-xs px-3 py-1 bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex space-x-3">
                      <button className="text-sm px-4 py-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded transition">
                        View Demo
                      </button>
                      <button className="text-sm px-4 py-2 bg-gray-200 hover:bg-gray-300 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 rounded transition">
                        Source Code
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section 
          id="contact" 
          className="min-h-screen py-20 bg-white dark:bg-gray-800"
        >
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-blue-600 dark:text-blue-400">
              Get In Touch
            </h2>

            <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Form</h3>
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-gray-700 dark:text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-gray-700 dark:text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-gray-700 dark:text-gray-300 mb-2">Message</label>
                    <textarea
                      id="message"
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-300 dark:border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
                      placeholder="Your message"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full px-6 py-3 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-800 text-white rounded-lg font-medium transition"
                  >
                    Send Message
                  </button>
                </form>
              </div>

              <div>
                <h3 className="text-2xl font-semibold mb-6 text-gray-800 dark:text-gray-200">Contact Info</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                      📧
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Email</h4>
                      <p className="text-gray-600 dark:text-gray-400">syvethauwabambyeyi@gmail.com</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                      📱
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Phone</h4>
                      <p className="text-gray-600 dark:text-gray-400">+250788906362/+250791412666</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="p-3 bg-blue-100 dark:bg-blue-900 rounded-full text-blue-600 dark:text-blue-300">
                      🏢
                    </div>
                    <div>
                      <h4 className="text-lg font-medium text-gray-800 dark:text-gray-200">Location</h4>
                      <p className="text-gray-600 dark:text-gray-400">RWANDAN</p>
                    </div>
                  </div>
                </div>

                <div className="mt-12">
                  <h4 className="text-xl font-medium mb-4 text-gray-800 dark:text-gray-200">Connect With Me</h4>
                  <div className="flex space-x-4">
                    {['LinkedIn', 'GitHub', 'Twitter', 'Instagram'].map((social) => (
                      <a
                        key={social}
                        href="#"
                        className="p-3 bg-gray-100 dark:bg-gray-700 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition"
                      >
                        {social}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-blue-600 dark:bg-gray-900 text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p>© {new Date().getFullYear()} My Portfolio. All rights reserved.</p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="hover:text-blue-300 transition">Privacy Policy</a>
            <a href="#" className="hover:text-blue-300 transition">Terms of Service</a>
          </div>
        </div>
      </footer>
    </div>
  );
}