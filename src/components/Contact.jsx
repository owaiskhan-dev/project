import React from 'react'
import { Mail, MapPin, Github, Linkedin} from "lucide-react";
import { SiWhatsapp } from "react-icons/si";

function Contact() {
  return (
    <div>
        <section className="mt-10 text-gray-300 py-16 ">  
      <h2 className="text-3xl font-bold text-white text-center"><span className='border-b-4 border-purple-500'>Get in Touch</span></h2>
      <p className="text-center text-gray-400 mt-2">Feel free to reach out anytime!</p>

      <div className="mt-6 flex flex-col items-center gap-4">
        {/* WhatsApp Contact (Clickable) */}
        <a 
          href="https://wa.me/923350293044" 
          target="_blank" 
          rel="noopener noreferrer"
          className="bg-gray-900 hover:bg-green-600 p-4 w-full max-w-md rounded-lg shadow-lg flex items-center gap-4 transition"
        >
          <SiWhatsapp className="text-green-400 text-3xl" />
          <span className="text-lg">+92-335-0293044</span>
        </a>

        {/* Email Contact (Clickable) */}
        <a 
          href="mailto:owaisdevil56@gmail.com"
          className="bg-gray-900 hover:bg-blue-600 p-4 w-full max-w-md rounded-lg shadow-lg flex items-center gap-4 transition"
        >
          <Mail className="text-blue-400 w-7 h-7" />
          <span className="text-lg">owaisdevil56@gmail.com</span>
        </a>
         {/* GitHub Link */}
  <a 
    href="https://github.com/owaiskhan-dev" // Apna GitHub username dalna
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-900 hover:bg-gray-700 p-4 w-full max-w-md rounded-lg shadow-lg flex items-center gap-4 transition"
  >
    <Github className="text-white w-7 h-7" />
    <span className="text-lg">GitHub Profile</span>
  </a>

  {/* LinkedIn Link */}
  <a 
    href="https://www.linkedin.com/in/owais-khan-a87533264/" // Apna LinkedIn profile link dalna
    target="_blank" 
    rel="noopener noreferrer"
    className="bg-gray-900 hover:bg-blue-700 p-4 w-full max-w-md rounded-lg shadow-lg flex items-center gap-4 transition"
  >
    <Linkedin className="text-blue-400 w-7 h-7" />
    <span className="text-lg">LinkedIn Profile</span>
  </a>
  

        {/* Location (Static) */}
        <div className="bg-gray-900 hover:bg-purple-600 p-4 w-full max-w-md rounded-lg shadow-lg flex items-center gap-4 transition">
          <MapPin className="text-purple-400 w-7 h-7" />
          <span className="text-lg">Karachi, Pakistan</span>
        </div>
      </div>
    </section>
    </div>
  )
}

export default Contact
