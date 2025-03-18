import React from 'react'

function Resume() {
  return (
    <div className="max-w-3xl mx-auto bg-gray-900 text-white p-8 rounded-lg shadow-lg py-16">
      {/* Personal Info */}
      <h2 className="text-4xl font-bold text-purple-400 ">Muhammad Owais Khan</h2>
      <p className="text-lg text-gray-300">Frontend Developer | React & Tailwind Enthusiast</p>
      <p className="mt-2">📧 Email: <a className="text-purple-400" href='https://owaisdevil56@gmail.com'>owaisdevil56@gmail.com</a> | 📍 Karachi, Pakistan</p>
      <p>🔗 <a href="https://github.com/owaiskhan-dev" className="text-purple-400">GitHub</a> | <a href="https://www.linkedin.com/in/owais-khan-a87533264/" className="text-purple-400">LinkedIn</a></p>

      {/* Summary */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">About Me</h2>
        <p className="text-gray-300">
          I am a passionate Frontend Developer, skilled in React and Tailwind CSS. 
          I love building modern, responsive web applications and continuously improving my skills.
        </p>
      </section>
      <section className="mt-6">
  <h2 className="text-2xl font-semibold text-purple-400">Personal Info</h2>
  <div className="overflow-x-auto">
    <table className="w-full border border-gray-700 text-gray-300 mt-4">
      <tbody>
        {/* Table Header */}
        <tr className="bg-gray-800 text-purple-400">
          <th className="py-2 px-4 text-left border-r border-gray-600">Field</th> 
          <th className="py-2 px-4 text-left">Details</th>
        </tr>
        {/* Table Rows */}
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Full Name</td>
          <td className="py-2 px-4">Muhammad Owais Khan</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Contact</td>
          <td className="py-2 px-4">+92-3350293044</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Father Name</td>
          <td className="py-2 px-4">Khalid Mansoor Khan</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Age</td>
          <td className="py-2 px-4">Twenty 20</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Nationality</td>
          <td className="py-2 px-4">Pakistani</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Religion</td>
          <td className="py-2 px-4">Alhumdulillah Islam</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Material Status</td>
          <td className="py-2 px-4">Single</td>
        </tr>
        <tr className="border-b border-gray-700">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Date of Birth</td>
          <td className="py-2 px-4">10-09-2005</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-900">
          <td className="py-2 px-4 font-medium border-r border-gray-600">Domicile-PRC</td>
          <td className="py-2 px-4">Karachi, Sindh</td>
        </tr>
        <tr className="border-b border-gray-700 bg-gray-900">
          <td className="py-2 px-4 font-medium border-r border-gray-600">NIC</td>
          <td className="py-2 px-4">42401-1833731-5</td>
        </tr>
        
      </tbody>
    </table>
  </div>
</section>


      {/* Skills */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">Skills</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>React.js</li>
          <li>Tailwind CSS</li>
          <li>JavaScript (ES6+)</li>
          <li>HTML5 & CSS3</li>
          <li>Git & GitHub</li>
          <li>C.I.T With Certificate</li>
          <li>Book Binding</li>
        </ul>
      </section>

      {/* Projects */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">Projects</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>
            <strong>Portfolio Website</strong> - A React-based portfolio with Tailwind CSS.  
            <a href="https://your-portfolio.com" className="text-purple-400"> View Project</a>
          </li>
          <li>
            <strong>E-commerce UI</strong> - Built a dark-themed e-commerce UI using React Router.
          </li>
        </ul>
      </section>

      {/* Education */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">Education</h2>
        <p className="text-gray-300">I have completed my Matriculation under the Karachi Sindh Board. Although I was unable to pass my Intermediate exams, I am determined to clear them in the future, InshaAllah. I strongly believe in continuous learning and self-improvement, and I am committed to overcoming challenges with time and effort.</p>
      </section>

      {/* Hobbies */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">Hobbies</h2>
        <p className="text-gray-300">Coding, Learning new technologies, Exploring UI/UX designs</p>
      </section>

      {/* lan */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">Language</h2>
        <ul className="list-disc list-inside text-gray-300">
          <li>Urdu (speaking)</li>
          <li>English (writing)</li>
        </ul>
      </section>

      {/* References */}
      <section className="mt-6">
        <h2 className="text-2xl font-semibold text-purple-400">References</h2>
        <p className="text-gray-300">Available upon request.</p>
      </section>
    </div>
  )
}

export default Resume
