const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-dark flex items-center pt-20">
      <div className="max-w-7xl mx-auto px-8 w-full grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div className="space-y-6">
          <div className="inline-flex items-center gap-2 bg-darker px-4 py-2 rounded-full">
            <span className="text-2xl">👋</span>
            <span className="text-primary text-sm tracking-wider">HELLO, I'M</span>
          </div>
          <h1 className="text-7xl font-bold">
            <span className="text-white">Nishant</span>
            <br />
            <span className="text-primary">Nayan</span>
          </h1>
          <p className="text-2xl text-gray-400">Frontend Developer</p>
          <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
           I’m a Frontend Developer who creates responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks, focusing on clean design and smooth user experience.
          </p>
          <div className="flex gap-4 pt-4">
            <a href="#contact" className="bg-primary text-white px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
              Contact Me
            </a>
            <button className="border-2 border-primary text-primary px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
              Download Resume
            </button>
          </div>
        </div>
        <div className="flex justify-center">
          <div className="relative w-96 h-96 rounded-full border-4 border-white overflow-hidden bg-darker">
            <img 
              src="/images/profile.jpg" 
              alt="Profile" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
