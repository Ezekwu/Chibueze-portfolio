import React from 'react';

const About: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        About Me
      </h1>
      
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Who I Am
        </h2>
        <p className="text-gray-600 mb-4">
          I'm a dedicated software developer with a passion for creating
          innovative solutions that make a difference. My journey in technology
          has been driven by curiosity and a desire to solve real-world problems.
        </p>
        <p className="text-gray-600">
          When I'm not coding, you can find me exploring new technologies,
          contributing to open-source projects, or sharing knowledge with the
          developer community.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Skills & Technologies
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Frontend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3', 'Tailwind CSS'].map((skill) => (
                <span
                  key={skill}
                  className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-700 mb-3">
              Backend
            </h3>
            <div className="flex flex-wrap gap-2">
              {['Node.js', 'Express', 'Python', 'Django', 'PostgreSQL', 'MongoDB'].map((skill) => (
                <span
                  key={skill}
                  className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          Experience
        </h2>
        <div className="space-y-4">
          <div className="border-l-4 border-blue-500 pl-4">
            <h3 className="font-medium text-gray-800">Software Developer</h3>
            <p className="text-gray-600">Company Name • 2022 - Present</p>
            <p className="text-gray-600">
              Developing and maintaining web applications using modern technologies.
            </p>
          </div>
          <div className="border-l-4 border-green-500 pl-4">
            <h3 className="font-medium text-gray-800">Junior Developer</h3>
            <p className="text-gray-600">Previous Company • 2020 - 2022</p>
            <p className="text-gray-600">
              Collaborated with teams to build scalable solutions.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

