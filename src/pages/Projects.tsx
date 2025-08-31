import React from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  githubUrl: string;
  liveUrl: string;
}

const Projects: React.FC = () => {
  const projects: Project[] = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description:
        'A full-stack e-commerce application with user authentication, product management, and payment integration.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe'],
      image: '/api/placeholder/400/250',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description:
        'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'TypeScript', 'Firebase', 'Tailwind CSS'],
      image: '/api/placeholder/400/250',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description:
        'A weather application that displays current weather conditions and forecasts for multiple locations.',
      technologies: ['React', 'OpenWeather API', 'Chart.js', 'CSS3'],
      image: '/api/placeholder/400/250',
      githubUrl: '#',
      liveUrl: '#',
    },
    {
      id: 4,
      title: 'Portfolio Website',
      description:
        'A responsive portfolio website built with modern web technologies and best practices.',
      technologies: ['React', 'TypeScript', 'Tailwind CSS', 'React Router'],
      image: '/api/placeholder/400/250',
      githubUrl: '#',
      liveUrl: '#',
    },
  ];

  return (
    <div className="max-w-6xl mx-auto">
      <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
        My Projects
      </h1>
      
      <div className="grid md:grid-cols-2 gap-8">
        {projects.map((project) => (
          <div
            key={project.id}
            className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
          >
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500">Project Image</span>
            </div>
            <div className="p-6">
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {project.title}
              </h3>
              <p className="text-gray-600 mb-4">{project.description}</p>
              
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span
                    key={tech}
                    className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <div className="flex space-x-4">
                <a
                  href={project.githubUrl}
                  className="bg-gray-800 text-white px-4 py-2 rounded hover:bg-gray-700 transition-colors"
                >
                  GitHub
                </a>
                <a
                  href={project.liveUrl}
                  className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors"
                >
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;

