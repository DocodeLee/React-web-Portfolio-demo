import React from 'react';


function Main() {
    return (
        <section className="container  bg-gradient-to-tr flex flex-col justify-between gap-20 py-8">
          
        
        <div className=" gradient_rev_background mb-10 mt-10 project-details items-center justify-between flex flex-rows ">
          <div className='flex flex-col'>
          <h2 className="text-2xl font-bold mb-2">Project Name</h2>
          <p className="text-gray-600 mb-4">Project description goes here.</p>
          <a href="#" className="flex items-center text-blue-500 hover:text-blue-700">
            <span className="mr-2">Link to project</span>
            <div className=' mr-0 '>
  
            <i className="fa-solid fa-link"></i>
            </div>
          </a>
          </div>
  
          <div className="project-image">
          <img src="path/to/your/image.jpg" alt="Project Image" />
        </div>
          
         
        </div>
        
        
        <div className="gradient_background mb-10 mt-10 project-details items-center justify-between flex flex-rows ">
          <div className='flex flex-col'>
          <h2 className="text-2xl font-bold mb-2">Project Name</h2>
          <p className="text-gray-600 mb-4">Project description goes here.</p>
          <a href="#" className="flex items-center text-blue-500 hover:text-blue-700">
            <span className="mr-2">Link to project</span>
            <div className=' mr-0 '>
  
            <i className="fa-solid fa-link"></i>
            </div>
          </a>
          </div>
  
          <div className="project-image">
          <img src="path/to/your/image.jpg" alt="Project Image" />
        </div>
          
         
        </div>
        
        
      </section>
        
        
        
      );
    }
  
  export default Main;