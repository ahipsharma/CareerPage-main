import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import { CiLocationOn } from "react-icons/ci";

const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-no-repeat bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">

        <h1 className="md:text-5xl text-1xl text-white font-semibold py-5">
          EXPLORE THE CAREER <br></br> AT
          FINTRACT GLOBAL <br></br>
          JOIN THE TEAM
        </h1>

        <h3 className=" text-white  py-5">
          Join us in the Development of Cutting Edge Fintech Products <br></br> and accelerate your Career Growth
        </h3>
      </div>
      <div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <div className="flex flex-col items-center ">
        <div className="w-1/2">
          <div className="bg-blue-200 p-2 rounded-md shadow-lg text-white flex flex-row items-center w-40 h-10">
            <CiLocationOn className="text-black" />
            <h3 className="p-2 text-black">Overview</h3>
          </div>
          <h4>Fintract Global is providing opportunities that constantly challenge management and technical trainee programme to learn and develop in a fast-paced environment. We are looking for students who are driven and motivated to work with some of the brightest minds in the management consulting world. You’ll connect with mentors and experts, who will help you delve deeper into the intricacies of the corporate world. These roles will equip you with the nuances of business strategy through several hands-on and practical experiences.</h4>
          <br></br>
          <h1 className="text-blue-400">Find Your Perfect Role</h1>
          <h2>Fintract Global provides management and technical trainee programme to suitable candidates who:</h2>
            <li>Are available for a minimum work duration of 4 months.</li>
            <li>Demonstrate unflinching commitment and dedication towards the company and its  business interests.</li>
            <li>Are pursuing programs/have graduated from distinguished institutes/universities and    
      possess the requisite skills and interests, for various arenas</li>
            <li>Are willing to gain practical exposure under the mentorship of experienced professionals in their selected fields.</li>
        </div>
        <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>
          <br></br> 
          <h1 className="text-2xl"> Explore <span className="text-blue-400">Career </span> Areas</h1> 
          <br></br>
          <div className="grid grid-cols-3 gap-4 place-items-center"> 
            
            
            <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg ">
            <img src="src\assets\certificate-of 1.png" alt="Group-1" />
              <p> Marketing and Sales</p>
              <p>(CEO)</p>
            </div>
            <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg ">
            <img src="src\assets\istockphoto-821787126-612x612 1.png" alt="Group-1" />
              <p> Design and content writing</p>
              
            </div>
            <div className="bg-white p-2 w-1/2 text-center shadow-lg shadow-indigo-500/40 rounded-lg">
            <img src="src\assets\human-resource-vector-concept-logo_579179-1818  1.png" alt="Group-1" />
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
            
          
          </div>
      
    </section>

  );
};

export default App;
