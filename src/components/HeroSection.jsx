import React from 'react'
import img from '../assets/converted.png';
import {  Github, Linkedin } from "lucide-react";
import { 
  SiHtml5, 
  SiCss3, 
  SiJavascript, 
  SiReact, 
  SiTailwindcss, 
  SiNodedotjs, 
  SiGit 
} from 'react-icons/si';

function HeroSection() {
  return (
    <>
    <section className="pt-24 pb-12 md:pt-32 md:pb-20">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between">
            <div className="md:w-1/2 space-y-6">
              <h1 className="text-4xl md:text-6xl font-bold">
                Hello, I'm <span className="text-purple-500">Owais Khan</span>
              </h1>
              <p className="text-xl text-gray-400">
              I build engaging, high-performance, and responsive web experiences using modern frontend technologies.  
              Passionate about writing clean, scalable code and transforming ideas into reality.
              </p>
              <div className="flex space-x-4">
                <a
                  href="https://github.com/owaiskhan-dev"
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors"
                >
                  <Github />
                </a>
                <a
                  href="https://www.linkedin.com/in/owais-khan-a87533264/"
                  className="p-2 bg-gray-800 rounded-full hover:bg-purple-500 transition-colors"
                >
                  <Linkedin />
                </a>
              </div>
            </div>
            <div className="md:w-1/2 mt-12 md:mt-0 relative">
              <div className="relative w-64 h-64 mx-auto">
                <div className="absolute inset-0 bg-purple-500/20 rounded-full animate-pulse"></div>
                <div className="absolute inset-4 bg-purple-500/40 rounded-full animate-pulse animation-delay-200"></div>
                <img
                  src={img}
                  alt="Profile"
                  className="absolute inset-6 rounded-full object-cover shadow-2xl"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      
       <section className="py-12 bg-gray-800/50">
       <div className="container mx-auto px-6">
         <h2 className="text-2xl font-bold text-center  mb-12  "><span className='border-b-4 border-purple-500'>Technologies I Master</span></h2>
         <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
           {[
             { icon: SiHtml5, name: 'HTML5' },
             { icon: SiCss3, name: 'CSS3' },
             { icon: SiJavascript, name: 'JavaScript' },
             { icon: SiReact, name: 'React' },
             { icon: SiTailwindcss, name: 'Tailwind CSS' },
             { icon: SiNodedotjs, name: 'Node.js' },
             { icon: SiGit, name: 'Git' }
           ].map(({ icon: Icon, name }) => (
             <div
               key={name}
               className="flex flex-col items-center p-6 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
             >
               <Icon size={48} />
               <span className="mt-4 text-sm">{name}</span>
             </div>
           ))}
         </div>
       </div>
     </section>
     </>
  )
}

export default HeroSection
