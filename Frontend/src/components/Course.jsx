import React, { useEffect, useState } from "react";
import Cards from "./Cards";
import axios from "axios";
import { Link } from "react-router-dom";
import program from "D:/bookStoreApp-main (2)/Frontend/public/program.jpg";
import design from "D:/bookStoreApp-main (2)/Frontend/public/design.jpg";
import marketting from "D:/bookStoreApp-main (2)/Frontend/public/marketting.jpg";
import platform from "D:/bookStoreApp-main (2)/Frontend/public/platform.jpg";
function Course() {
  const [book, setBook] = useState([]);

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        console.log(res.data);
        setBook(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    getBook();
  }, []);

  return (
    <>
      <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 md:flex-row my-25">
        <div className="mt-28 items-center justify-center text-center">
          <h1 className="text-2xl md:text-4xl font-bold">
            Welcome to Our Learning Platform!
          </h1>
          <p className="mt-6 text-lg">
            We offer a diverse range of courses to help you grow your skills and
            achieve your goals. Whether you're looking to advance your career or
            pick up a new hobby, we have something for everyone. Explore our
            courses and start your learning journey today!
          </p>
        
</div>
        <div className="mt-12">
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Featured Courses
          </h2>
          <p className="text-center mt-4 text-gray-700">
            Explore our top courses designed to provide you with practical skills
            and knowledge.
          </p>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Example Course 1 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={program}
                alt="Programming Course"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Introduction to Programming</h3>
              <p className="mt-2 text-gray-600">
                Learn the fundamentals of programming with hands-on exercises and real-world examples.
                Perfect for beginners who want to get started with coding.
              </p>
              <Link to="/course/programming">
                <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Example Course 2 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={design}
                alt="Design Course"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Graphic Design Basics</h3>
              <p className="mt-2 text-gray-600">
                Discover the principles of graphic design and create stunning visuals with this introductory course.
                Ideal for those looking to enter the world of design.
              </p>
              <Link to="/course/design">
                <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                  Learn More
                </button>
              </Link>
            </div>

            {/* Example Course 3 */}
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <img
                src={marketting}
                alt="Marketing Course"
                className="w-full h-40 object-cover rounded-t-lg"
              />
              <h3 className="text-lg font-semibold mt-4">Digital Marketing Essentials</h3>
              <p className="mt-2 text-gray-600">
                Gain essential skills in digital marketing, including SEO, social media strategies, and online advertising.
                Ideal for professionals looking to enhance their marketing skills.
              </p>
              <Link to="/course/marketing">
                <button className="mt-4 bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                  Learn More
                </button>
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <h2 className="text-xl md:text-3xl font-semibold text-center">
            Why Our Platform?
          </h2>
          <div className="flex flex-col md:flex-row items-center mt-10 gap-6">
            <img
              src={platform}
              alt="Learning environment"
              className="w-full md:w-1/3 rounded-lg shadow-lg"
            />
            <div className="md:w-2/3">
              <p className="text-lg">
                Our platform provides high-quality courses created by industry
                experts. We focus on delivering practical, hands-on learning
                experiences that help you apply what you've learned in real-world
                scenarios. Our courses are accessible, flexible, and designed to
                fit your busy schedule.
              </p>
              <p className="mt-4">
                We also offer interactive content, including quizzes, assignments,
                and projects, to ensure that you gain a deep understanding of the
                subject matter. Join our community of learners and take the first
                step towards achieving your goals.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20 text-center">
          <h2 className="text-xl md:text-3xl font-semibold">
            Ready to Get Started?
          </h2>
          <p className="mt-4 text-lg">
            Sign up today to access our full range of courses and start your
            learning journey. Our user-friendly platform makes it easy to find
            and enroll in the courses that interest you.
          </p>
        </div>

        <div className="mt-12 text-center">
          <Link to="/contact">
            <button className="bg-pink-500 text-white px-6 py-3 rounded-md hover:bg-pink-700 duration-300">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </>
  );
}

export default Course;
