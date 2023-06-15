import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 sm:mt-32">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20 sm:mt-4">
        With one year of professional experience and a strong skill set in Node.js, Express, MongoDB, websockets, React.js, Redux, Zustand, React Query, Next.js, Tailwindcss and Bootstrap I am confident in my ability to deliver high-quality results.
Throughout my career, I have gained valuable experience working on outsourced projects, where I have successfully developed and deployed web applications using the MERN stack. I have a deep understanding of backend development using Node.js and Express, along with database management using MongoDB. My proficiency in frontend technologies such as React.js, Redux, Zustand, React Query, and Next.js allows me to create dynamic and interactive user interfaces.
In addition to my technical skills, I am a highly collaborative and detail-oriented professional. I have a strong problem-solving ability and can efficiently troubleshoot and debug code to ensure smooth functionality.
        </p>

      </div>
    </div>
  );
};

export default About;
