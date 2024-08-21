import React, { useEffect, useState } from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import axios from "axios";
import Cards from "./Cards";

function Freebook() {
  const [book, setBook] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const getBook = async () => {
      try {
        const res = await axios.get("http://localhost:4001/book");
        const data = res.data.filter((data) => data.category === "Free");
        setBook(data);
        setLoading(false);
      } catch (error) {
        setError("Failed to load data. Please try again later.");
        setLoading(false);
      }
    };
    getBook();
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const sampleCourses = [
    {
      id: 1,
      title: "Introduction to Web Development",
      description: "Learn the basics of HTML, CSS, and JavaScript. This course will guide you through creating your first web pages and understanding the core concepts of web development.",
      imageUrl: "/public/webdevelopment.jpg"
    },
    {
      id: 2,
      title: "Basics of Graphic Design",
      description: "Discover the principles of graphic design, including typography, color theory, and layout. Perfect for beginners looking to get started in the design world.",
      imageUrl: "/public/graphic.jpg"
    },
    {
      id: 3,
      title: "Introduction to Python Programming",
      description: "Get started with Python programming in this introductory course. Learn the basics of syntax, data types, and control structures with hands-on examples.",
      imageUrl: "/public/python.jpg"
    }
  ];

  return (
    <div className="max-w-screen-2xl container mx-auto md:px-20 px-4 py-12">
      <div className="text-center mb-12">
        <h1 className="font-semibold text-2xl md:text-4xl pb-2 text-gray-800">
          Free Offered Courses
        </h1>
        <p className="text-gray-600">
          Discover our selection of free courses designed to help you get started
          on your learning journey. Each course offers valuable insights and
          practical knowledge to enhance your skills.
        </p>
      </div>

      {loading ? (
        <div className="text-center text-gray-500">Loading...</div>
      ) : error ? (
        <div className="text-center text-red-500">{error}</div>
      ) : (
        <div>
          {book.length > 0 ? (
            <Slider {...settings}>
              {book.map((item) => (
                <Cards item={item} key={item.id} />
              ))}
            </Slider>
          ) : (
            <div>
              <h2 className="text-xl md:text-3xl font-semibold text-center">
                 Courses
              </h2>
              <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
                {sampleCourses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white p-6 rounded-lg shadow-lg"
                  >
                    <img
                      src={course.imageUrl}
                      alt={course.title}
                      className="w-full h-40 object-cover rounded-t-lg"
                    />
                    <h3 className="text-lg font-semibold mt-4">
                      {course.title}
                    </h3>
                    <p className="mt-2 text-gray-600">{course.description}</p>
                    <a href="#" className="mt-4 inline-block bg-pink-500 text-white px-4 py-2 rounded-md hover:bg-pink-700 duration-300">
                      Enroll Now
                    </a>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

export default Freebook;