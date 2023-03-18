import React from "react";
import Button from "./components/Button";
import Navbar from "./components/Navbar/Navbar";
import { CiLocationOn } from "react-icons/ci";
import { FiPhoneCall } from "react-icons/fi";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const App = () => {
  return (
    <section
      className="h-screen bg-Hero bg-no-repeat bg-cover
      font-[Poppins] md:bg-top bg-center"
    >
      <Navbar />
      <div className="flex flex-col justify-center text-center items-center h-3/4">
        <h1 className="md:text-5xl text-1xl text-white font-semibold py-5">
          EXPLORE THE CAREER <br></br> AT FINTRACT GLOBAL <br></br>
          JOIN THE TEAM
        </h1>

        <h3 className=" text-white  py-5">
          Join us in the Development of Cutting Edge Fintech Products <br></br>{" "}
          and accelerate your Career Growth
        </h3>
      </div>
      <div></div>
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
          <h4>
            Fintract Global is providing opportunities that constantly challenge
            management and technical trainee programme to learn and develop in a
            fast-paced environment. We are looking for students who are driven
            and motivated to work with some of the brightest minds in the
            management consulting world. You’ll connect with mentors and
            experts, who will help you delve deeper into the intricacies of the
            corporate world. These roles will equip you with the nuances of
            business strategy through several hands-on and practical
            experiences.
          </h4>
          <br></br>
          <h1 className="text-blue-400">Find Your Perfect Role</h1>
          <h2>
            Fintract Global provides management and technical trainee programme
            to suitable candidates who:
          </h2>
          <li>Are available for a minimum work duration of 4 months.</li>
          <li>
            Demonstrate unflinching commitment and dedication towards the
            company and its business interests.
          </li>
          <li>
            Are pursuing programs/have graduated from distinguished
            institutes/universities and possess the requisite skills and
            interests, for various arenas
          </li>
          <li>
            Are willing to gain practical exposure under the mentorship of
            experienced professionals in their selected fields.
          </li>
        </div>
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
      </div>


      <hr class="w-40 h-1 mx-auto my-4 bg-blue-400 border-0 rounded md:my-10 dark:bg-blue-500"></hr>


      <div classname="bg-black">
        <div className="flex flex-2">
          <div className="p-4 m-4">
            <img src="src/assets/Logo.png" alt="Group-1" />
            <h1>Fintract Global</h1>
            <p>
              At Fintract Global Ltd, we combine a cutting-edge tech stack with
              exceptional talent from Europe, Asia and America to lead change in
              how financial entities work. Headquartered in London, Fintract
              Global develops cutting edge fintech and regtech products.
            </p>
            <div className="flex felx-row">
              <FaTwitter className="h-7 w-7 pr-2" />
              <FaInstagram className="h-7 w-7 pr-2" />
              <FaFacebookF className="h-7 w-7 pr-2" />
              <FaLinkedinIn className="h-7 w-7 pr-2" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="p-2 flex flex-row items-center">
              <CiLocationOn className="text-black h-20 w-20" />
              <p>
                <span className="font-semibold">Address</span>
                <br></br>Registered Office: London Office Address 71-75, Sheldon
                Street, Covent Garden London, WC2h 9JQ
              </p>
            </div>
            <div className="p-2 flex flex-row items-center">
              <FiPhoneCall className="text-black h-10 w-10 px-2" />
              <p>
                <span className="font-semibold">Phone</span>
                <br></br> +44-2037373227
              </p>
            </div>
            <div className="p-2 flex flex-row items-center">
              <AiOutlineMail className="text-black h-10 w-10 px-2" />
              <p>
                <span className="font-semibold">Email</span>
                <br></br> contact@fintract.co.uk
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center">
          <p className="text-center">
            Fintract Global takes your privacy very seriously. We may process
            your personal information for carefully considered and specific
            purposes which are in our interests and enable us to enhance the
            services we provide, but which we believe also benefit our
            customers. View our Privacy Policy to learn more about these
            interests and when we may process your information in this way.
          </p>
          <a href="https://www.fintract.co.uk/privacy-policy/">Click here</a>
          <p>Copyright ©2021 All rights reserved.</p>
        </div>
      </div>
    </section>
  );
};

export default App;
