import React from 'react'
import img from '../assets/your-logo.png'
import img2 from '../assets/todo-list.png'
import img3 from '../assets/weather-app.png'

function Projects() {
  return (
   <section className='py-16 '>
    <div className="container mx-auto px-6  ">
    <h2 className="text-2xl font-bold text-center mb-6"><span className='border-b-4 border-purple-500'>Projects</span></h2>
    <div className="max-w-xl md:max-w-2xl mx-auto p-4 border rounded-lg mb-6 shadow-md">
     <img src={img} alt="Your Logo Project" class="w-full rounded-lg" />
      <h2 class="text-2xl font-bold mt-4">Your Logo</h2>
       <p class="text-gray-400 mt-2 ">
        <strong>Description:</strong> Your Logo is a simple React project demonstrating client-side routing using React Router. It includes multiple pages such as Home, About, Contact, and GitHub, allowing seamless navigation without page reloads.
       </p>
       <div class="mt-4 flex space-x-4">
        <a href="https://react-router-kappa-six.vercel.app/" class="text-blue-500 hover:underline">🔗 Live Demo</a>
       <a href="https://github.com/owaiskhan-dev/reactRouter" class="text-gray-500 hover:underline">💻 GitHub</a>
     </div>
   </div>
   <div className="max-w-xl md:max-w-2xl mx-auto p-4 border rounded-lg mb-6 shadow-md">
     <img src={img2} alt="Todo List Project" class="w-full rounded-lg" />
      <h2 class="text-2xl font-bold mt-4">Todo List</h2>
       <p class="text-gray-400 mt-2 ">
        <strong>Description:</strong> To-Do List is a simple and interactive task management app built with React. It allows users to add, delete, and mark tasks as completed. This project demonstrates the use of React state management, event handling, and component-based architecture to create a dynamic user experience.
       </p>
       <div class="mt-4 flex space-x-4">
        <a href="https://owaiskhan-dev.github.io/todolistLocal/" class="text-blue-500 hover:underline">🔗 Live Demo</a>
       <a href="https://github.com/owaiskhan-dev/todolistLocal" class="text-gray-500 hover:underline">💻 GitHub</a>
     </div>
   </div>
   <div className="max-w-xl md:max-w-2xl mx-auto p-4 border rounded-lg mb-6 shadow-md">
     <img src={img3} alt="Weather App" class="w-full rounded-lg" />
      <h2 class="text-2xl font-bold mt-4">Weather App</h2>
       <p class="text-gray-400 mt-2 ">
        <strong>Description:</strong> Weather App is a simple and responsive application built with React that provides real-time weather updates for any city. It fetches data from a weather API and displays key information like temperature, humidity, wind speed, and weather conditions. This project demonstrates the use of API integration, React Hooks, and state management to create a dynamic user experience.
       </p>
       <div class="mt-4 flex space-x-4">
        <a href="https://owaiskhan-dev.github.io/weather-app/" class="text-blue-500 hover:underline">🔗 Live Demo</a>
       <a href="https://github.com/owaiskhan-dev/weather-app" class="text-gray-500 hover:underline">💻 GitHub</a>
     </div>
   </div>
    </div>
   </section>
  )
}

export default Projects
