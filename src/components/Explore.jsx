import React from 'react'

function Explore() {
  return (
    <div>
      <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>
        <br></br>
        <h1 className="text-2xl">
          {" "}
          Explore <span className="text-blue-400">Career </span> Areas
        </h1>
        <br></br>
        <div className="grid grid-cols-3 gap-4 place-items-center">
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg ">
            <img src="src\assets\certificate-of 1.png" alt="Group-1" />
            <p> Marketing and Sales</p>
            <p>(CEO)</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg ">
            <img
              src="src\assets\istockphoto-821787126-612x612 1.png"
              alt="Group-1"
            />
            <p> Design and content writing</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img
              src="src\assets\human-resource-vector-concept-logo_579179-1818  1.png"
              alt="Group-1"
            />
            <p> Human resources and Management</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img src="src\assets\computer-repair-logo-template-computer-pixels-logo-software-development-design-free-vector 1.png" />
            <p> Finance and Marketing</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img src="src\assets\download 3.png" />
            <p> Software development and engineering</p>
          </div>
          <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img src="src\assets\images 1.png" alt="Group-1" />
            <p> Product and corporate management</p>
          </div>
        </div>
        <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>
        <div className="flex flex-col items-center">
          <h1 className="text-2xl">
            {" "}
            Additional <span className="text-blue-400">Perks </span> and{" "}
            <span className="text-blue-400">Benefits </span>
          </h1>
          <img src="src/assets/career page riya.png" alt="career page" />
        </div>
        <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>
    </div>
  )
}

export default Explore
