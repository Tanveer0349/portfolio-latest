import React from "react";
import travel from "../assets/portfolio/travel.jpg";
import hadi from "../assets/portfolio/hadi.jpg";
import gym from "../assets/portfolio/gym.jpg";
import chat from "../assets/portfolio/chat.jpg";
import bookstore from "../assets/portfolio/bookstore.jpg";

const Portfolio = () => {
  const portfolios = [
    {
      id: 6,
      src: bookstore,
      href: "https://github.com/Tanveer0349/Ecommerce-Website_Book-Store",
    },
    {
      id: 1,
      src: travel,
      href: "https://github.com/Tanveer0349/Travel-Advisor-App",
    },

    {
      id: 3,
      src: chat,
      href: "https://github.com/Tanveer0349/Chit-Chat",
    },
    {
      id: 2,
      src: gym,
      href: "https://github.com/Tanveer0349/Fitness-Exercise-App",
    },
    {
      id: 5,
      src: hadi,
      href: "https://github.com/Tanveer0349/Hadi-Ecommerce-Website",
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:max-h-fit"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-16">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src,href }) => (
            <div key={id} className="shadow-md shadow-gray-600 rounded-lg">
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                {/* <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  Demo
                </button> */}
                <a href={href}>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </button>
                </a>
                {(id===6)&& <a href='https://youtu.be/734BXbTkdnY'>
                  <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    demo
                  </button>
                </a>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
