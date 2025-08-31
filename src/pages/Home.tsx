import React from 'react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-gray-800 mb-6">
          Welcome to My Portfolio
        </h1>
        <p className="text-xl text-gray-600 mb-8">
          Hi, I'm Chibueze. I'm a passionate developer who loves creating
          beautiful and functional web applications.
        </p>
        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Frontend Development
            </h3>
            <p className="text-gray-600">
              Building responsive and interactive user interfaces with modern
              technologies.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Backend Development
            </h3>
            <p className="text-gray-600">
              Creating robust and scalable server-side applications and APIs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">
              Problem Solving
            </h3>
            <p className="text-gray-600">
              Tackling complex challenges with creative and efficient solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

