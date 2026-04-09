import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 text-white">

      {/* Navbar */}
      <nav className="flex justify-between items-center p-6 fade-in">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <ul className="flex gap-6">
          <li className="hover:text-yellow-300 cursor-pointer">Home</li>
          <li className="hover:text-yellow-300 cursor-pointer">Projects</li>
          <li className="hover:text-yellow-300 cursor-pointer">Contact</li>
        </ul>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center text-center mt-20 fade-in">
        <h2 className="text-5xl font-extrabold mb-4">
          Hi, I'm Vinayak 👋
        </h2>
        <p className="text-lg max-w-xl">
          A passionate developer creating modern and beautiful web experiences.
        </p>

        <button className="mt-6 px-6 py-3 bg-white text-black rounded-full hover:bg-yellow-300 transition duration-300">
          View My Work
        </button>
      </section>

      {/* Skills Section */}
      <section className="mt-32 px-6 text-center fade-in">
        <h3 className="text-3xl font-bold mb-10">My Skills</h3>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto">

          {[
            "HTML",
            "CSS",
            "JavaScript",
            "React",
            "Next.js",
            "Python",
            "C",
            "Git"
          ].map((skill, index) => (
            <div
              key={index}
              className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-110 hover:bg-yellow-300 transition duration-300 cursor-pointer"
              > 
              <h4 className="text-lg font-semibold">{skill}</h4>
            </div>
          ))}

        </div>
      </section>

      {/* About Section */}
      <section className="mt-32 px-6 text-center fade-in">
        <h3 className="text-3xl font-bold mb-4">About Me</h3>
        <p className="max-w-2xl mx-auto">
          I am a web developer skilled in React, Next.js, and modern UI design.
          I love building fast and responsive websites with clean design.
        </p>
      </section>

      {/* Projects Section */}
      <section className="mt-32 px-6 fade-in">
        <h3 className="text-3xl font-bold text-center mb-10">Projects</h3>

        <div className="grid md:grid-cols-3 gap-8">

          {/* Todo List */}
          <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-2">📝 Todo List App</h4>
            <p className="text-sm mb-4">
              A simple task manager where users can add, delete, and mark tasks as completed.
            </p>
            <ul className="text-sm list-disc ml-4 mb-4">
              <li>Add & remove tasks</li>
              <li>Mark as completed</li>
              <li>Local storage support</li>
            </ul>
            <button className="bg-purple-500 text-white px-4 py-2 rounded hover:bg-purple-700">
              View Project
            </button>
          </div>

          {/* Calculator */}
          <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-2">🧮 Calculator</h4>
            <p className="text-sm mb-4">
              A responsive calculator that performs basic arithmetic operations.
            </p>
            <ul className="text-sm list-disc ml-4 mb-4">
              <li>Add, subtract, multiply, divide</li>
              <li>Clean UI design</li>
              <li>Keyboard support</li>
            </ul>
            <button className="bg-pink-500 text-white px-4 py-2 rounded hover:bg-pink-700">
              View Project
            </button>
          </div>

          {/* EMI Calculator */}
          <div className="bg-white text-black p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300">
            <h4 className="text-xl font-bold mb-2">💰 EMI Calculator</h4>
            <p className="text-sm mb-4">
              Calculates monthly loan EMI based on principal, interest rate, and time.
            </p>
            <ul className="text-sm list-disc ml-4 mb-4">
              <li>Instant EMI calculation</li>
              <li>User-friendly inputs</li>
              <li>Accurate financial formula</li>
            </ul>
            <button className="bg-indigo-500 text-white px-4 py-2 rounded hover:bg-indigo-700">
              View Project
            </button>
          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section
        className="mt-32 px-6 py-20 bg-cover bg-center relative fade-in"
        style={{
          backgroundImage: "url('/contact-bg.jpg')" // put image in public folder
        }}
      >

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black/60"></div>

        {/* Content */}
        <div className="relative z-10 text-center text-white">
          <h3 className="text-3xl font-bold mb-10">Contact Me</h3>

          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-lg p-8 rounded-xl shadow-lg">

            <form className="flex flex-col gap-4">

              <input
                type="text"
                placeholder="Your Name"
                className="p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none"
              />

              <textarea
                placeholder="Your Message"
                rows={5}
                className="p-3 rounded-lg bg-white/20 border border-white/30 text-white placeholder-gray-200 focus:outline-none"
              ></textarea>

              <button
                type="submit"
                className="bg-gradient-to-r from-purple-500 to-pink-500 py-3 rounded-lg hover:scale-105 transition duration-300"
              >
                Send Message 🚀
              </button>

            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mt-32 text-center p-6 fade-in">
        <p>© 2026 Vinayak | All Rights Reserved</p>
      </footer>

    </main>
  );
}
