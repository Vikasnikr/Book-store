import React from "react";
import Navbar from "./Navbar";
import teamImage from "../../public/team.jpg";
import missionImage from "../../public/mission.jpg";
import storeImage1 from "../../public/store1.jpg";
import storeImage2 from "../../public/store2.jpg";
import storeImage3 from "../../public/store3.jpg";
import { Link } from "react-router-dom";

function About() {
  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 mt-24"> {/* Added mt-24 for spacing */}
        <div className="text-center mb-12">
          <h1 className="font-semibold text-2xl md:text-4xl text-gray-800">
            About Us
          </h1>
          <p className="mt-4 text-gray-600">
            Learn more about our mission, values, our place, and the team behind our platform.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={missionImage}
              alt="Our Mission"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">
              Our Mission
            </h2>
            <p className="text-gray-600">
              Our mission is to provide high-quality, accessible education to learners worldwide. We believe that everyone should have the opportunity to learn and grow, regardless of their background or financial situation. Our platform offers a range of free courses designed to help you enhance your skills and achieve your goals.
            </p>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Meet Our Team
          </h2>
          <img
            src={teamImage}
            alt="Our Team"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <p className="mt-4 text-gray-600">
            Our team is passionate about education and committed to creating a platform that empowers learners. We come from diverse backgrounds and bring a wealth of experience to our work. Get to know us better and see how we’re working together to make education more accessible.
          </p>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Our Place
          </h2>
          <p className="text-gray-600">
            We are proud of our space where creativity and collaboration thrive. Below, you can see images of our place where we work passionately to bring you the best learning experience.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={storeImage1}
                alt="Our Store"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Our Main Office</h3>
              <p className="mt-2 text-gray-600">
                Our main office is where all the magic happens. It’s a space filled with innovation and ideas, where our team collaborates to build and improve our platform.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={storeImage2}
                alt="Our Workspace"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Creative Workspace</h3>
              <p className="mt-2 text-gray-600">
                This is our creative workspace where brainstorming sessions take place. It's designed to inspire and facilitate productive discussions and collaborations.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={storeImage3}
                alt="Our Meeting Room"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Meeting Room</h3>
              <p className="mt-2 text-gray-600">
                Our meeting room is where we connect with partners and discuss strategic plans. It’s equipped with modern amenities to ensure effective meetings and presentations.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Contact Us
          </h2>
          <p className="text-gray-600">
            If you have any questions or feedback, we’d love to hear from you. Please reach out to us at{" "}
            <a href="vikasnikr05@gmail.com.com" className="text-pink-500 hover:underline">
              oursbook@gmail.com.com
            </a>.
          </p>
        </div>

        <div className="text-center mt-12">
          <Link to="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default About;

