import React from 'react'


function About() {
  return (
    <section className="py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-2xl font-bold text-center mb-12"><span className='border-b-4 border-purple-500'>About Me</span></h2>
          <div className="flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
            <div className="md:w-1/2">
              <p className="text-gray-400">
              I am a passionate Frontend Developer focused on building modern, responsive, and visually appealing websites using React and Tailwind CSS. I am continuously learning and working on personal projects to improve my skills. My goal is to secure a professional role where I can apply my knowledge and creativity to develop real-world web applications. I am highly motivated to learn and grow, and I look forward to joining a team that works on exciting challenges and innovative solutions.
              </p>
            </div>
            <div className="md:w-1/2">
              <img
               
                src="https://img.freepik.com/free-photo/person-playing-3d-video-games-device_23-2151005751.jpg"
                alt="Profile"
                className="rounded-lg object-cover shadow-2xl "
              />
            </div>
          </div>
        </div>
      </section>
  )
}

export default About
