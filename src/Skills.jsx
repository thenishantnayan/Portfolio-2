const Skills = () => {
  const skills = {
    languages: ['C++ (DSA)', 'JavaScript', 'SQL','HTML5' ],
    frameworks: [ 'React.js', 'Tailwind CSS', 'Mongoose', 'JWT'],
    tools: ['Git', 'GitHub', 'REST APIs', 'Postman', 'VS Code', ]
  };

  return (
    <section id="skills" className="min-h-screen bg-navy flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-white">Technical </span>
          <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-dark/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8 pb-4 border-b border-gray-700">Languages</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.languages.map((skill) => (
                <span key={skill} className="px-5 py-2 bg-darker border border-blue-900 text-blue-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-dark/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8 pb-4 border-b border-gray-700">Frameworks & Tech</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.frameworks.map((skill) => (
                <span key={skill} className="px-5 py-2 bg-darker border border-blue-900 text-blue-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
          <div className="bg-dark/50 rounded-2xl p-8 border border-gray-700">
            <h3 className="text-2xl font-bold text-white text-center mb-8 pb-4 border-b border-gray-700">Tools & Platforms</h3>
            <div className="flex flex-wrap gap-3 justify-center">
              {skills.tools.map((skill) => (
                <span key={skill} className="px-5 py-2 bg-darker border border-blue-900 text-blue-300 rounded-full text-sm">
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
