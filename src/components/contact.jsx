import React from "react";

const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full h-screen bg-gradient-to-b from-black to-gray-800 p-2 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div className="pb-8 mt-20">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Cotact
          </p>
          <p className="py-6">Feel Free to Contact me</p>
          <div className="grid grid-cols-3 gap-5">
            <div>
              {" "}
              <h2 className="my-2 underline underline-offset-4 decoration-pink-500 mb-4">
                Email :
              </h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
                sahiltanveerhussain@gmail.com
              </button>
            </div>
            <div>
              {" "}
              <h2 className="my-2 underline underline-offset-4 decoration-pink-500 mb-4">
                Contact No :
              </h2>
              <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
                <p className="font-serif">03069354838</p>
              </button>
            </div>
            <div>
              {" "}
              <h2 className="my-2 underline underline-offset-4 decoration-pink-500 mb-4">
                LinkedIn :
              </h2>
              <a href="https://www.linkedin.com/in/tanveer-hussain-b1a449269">
                <button className="bg-blue-500 hover:bg-blue-700 text-white py-1 px-4 rounded">
                  Go
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
