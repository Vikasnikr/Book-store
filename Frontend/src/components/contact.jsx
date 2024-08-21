import React, { useState } from "react";
import Navbar from "./Navbar";
import contactImage from "../../public/contact.jpg"; // Replace with your contact image
import officeImage from "../../public/office.jpg"; // Replace with your office image
import supportImage from "../../public/support.jpg"; // Replace with your support image
import newLocationImage from "../../public/newlocation.jpg"; // Replace with your new location image

function Contact() {
  // State to store form input
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        // Optionally clear the form after submission
        setFormData({ name: "", email: "", message: "" });
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("An error occurred. Please try again later.");
    }
  };

  return (
    <div>
      <Navbar />
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12 mt-24">
        <div className="text-center mb-12">
          <h1 className="font-semibold text-2xl md:text-4xl text-gray-800">
            Contact Us
          </h1>
          <p className="mt-4 text-gray-600">
            We’re here to assist you! If you have any questions, concerns, or feedback, please don't hesitate to reach out to us using the information below or by filling out the contact form.
          </p>
        </div>

        <div className="flex flex-col md:flex-row items-center mb-12">
          <div className="md:w-1/2 mb-6 md:mb-0">
            <img
              src={contactImage}
              alt="Contact Us"
              className="w-full h-full object-cover rounded-lg shadow-lg"
              style={{ height: 'calc(100vh - 12rem)' }}
            />
          </div>
          <div className="md:w-1/2 md:pl-8">
            <h2 className="text-xl md:text-3xl font-semibold mb-4">
              Get in Touch
            </h2>
            <p className="text-gray-600 mb-4">
              Our team is ready to help with any questions or issues you may have. Use the contact form below or reach out directly using the contact information provided.
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  placeholder="Your Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
                <textarea
                  id="message"
                  name="message"
                  className="w-full px-4 py-2 border border-gray-300 rounded-lg"
                  rows="4"
                  placeholder="Your Message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-xl md:text-3xl font-semibold mb-4">
            Our Locations
          </h2>
          <p className="text-gray-600">
            We have multiple locations to serve you better. Here are some of our key offices:
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={officeImage}
                alt="Our Office"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Headquarters</h3>
              <p className="mt-2 text-gray-600">
                Our main office where all strategic decisions are made. Located in the heart of the city, it’s a hub of activity and innovation.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={supportImage}
                alt="Support Office"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Support Center</h3>
              <p className="mt-2 text-gray-600">
                Dedicated to providing you with the best support possible. Our team here is always ready to assist with any queries or issues you might have.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={newLocationImage}
                alt="New Location"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">New Location</h3>
              <p className="mt-2 text-gray-600">
                Our new location where we’re expanding our services. Equipped with the latest facilities to ensure excellent service and support.
              </p>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <a href="/">
            <button className="bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
              Back to Home
            </button>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Contact;
