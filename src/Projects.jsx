const Projects = () => {
  const projects = [
    {
      title: 'Blinkit-Clone',
      date: 'Sep 2025',
      description: 'Built a Blinkit clone with a responsive UI, replicating core features and user flow using modern frontend technologies.',
      tech: ['Html', 'Css', 'Javascript'],
      image: '/images/blinkit.png'
    },
    {
      title: 'Astrology Wep App',
      date: 'Dec 2024',
      description: 'Developed an astrology app that provides personalized horoscope insights with a clean, user-friendly interface and smooth navigation.',
      tech: ['Html', 'Css', 'Javascript'],
      image: '/images/astrology.png'
    }
  ];

  return (
    <section id="projects" className="min-h-screen bg-navy flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-white">Featured </span>
          <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="bg-dark rounded-xl overflow-hidden border border-gray-800 hover:border-primary/50 transition">
              <img src={project.image} alt={project.title} className="w-full h-64 object-contain bg-darker" />
              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h3 className="text-3xl font-bold text-white">{project.title}</h3>
                  <span className="text-blue-400 text-sm bg-blue-950 px-3 py-1 rounded">{project.date}</span>
                </div>
                <p className="text-gray-400 mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech) => (
                    <span key={tech} className="text-primary text-sm">{tech}</span>
                  ))}
                </div>
                <div className="flex gap-4">
                  <a href="#" className="text-gray-400 hover:text-primary transition flex items-center gap-2">
                    GitHub <span className="text-xl">↗</span>
                  </a>
                  <a href="#" className="text-gray-400 hover:text-primary transition flex items-center gap-2">
                    Live Demo <span className="text-xl">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
