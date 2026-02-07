const Education = () => {
  const achievements = [
    {
      title: '300+ DSA Problems Solved',
      description: 'Solved on platforms like LeetCode, GeeksforGeeks etc.'
    },
    {
      title: 'SQL Basic Certification',
      description: 'Achieved certification in SQL fundamentals and database management from Hackerrank'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      description: 'Certified in AWS cloud fundamentals'
    }
  ];

  return (
    <section id="education" className="min-h-screen bg-dark flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-10 bg-primary"></span>
              <span className="text-white">Education</span>
            </h2>
            <div className="bg-darker border border-gray-800 rounded-xl p-8">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-bold text-white mb-2">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-primary">KIET Group Of Institutions, Ghaziabad</p>
                </div>
                <span className="text-blue-400 bg-blue-950 px-4 py-1 rounded text-sm">2023 – 2027</span>
              </div>
              <div className="text-4xl font-bold text-white mb-4">
                7.48 <span className="text-gray-500 text-lg">CGPA</span>
              </div>
              <p className="text-gray-400">
                <span className="font-semibold">Coursework:</span> Database Management Systems, Operating Systems, Data Structures, Object-Oriented Programming in CPP
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-8 flex items-center gap-3">
              <span className="w-1 h-10 bg-primary"></span>
              <span className="text-white">Achievements</span>
            </h2>
            <div className="space-y-6">
              {achievements.map((achievement, index) => (
                <div key={index} className="bg-darker border border-gray-800 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
