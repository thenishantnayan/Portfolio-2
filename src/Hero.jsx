const Hero = () => {
  return (
    <section id="home" className="min-h-screen bg-dark flex items-center pt-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center">
        <div className="space-y-4 sm:space-y-6 text-center lg:text-left">
          <div className="inline-flex items-center gap-2 bg-darker px-4 py-2 rounded-full">
            <span className="text-xl sm:text-2xl">👋</span>
            <span className="text-primary text-xs sm:text-sm tracking-wider">HELLO, I'M</span>
          </div>
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold">
            <span className="text-white">Nishant</span>
            <br />
            <span className="text-primary">Nayan</span>
          </h1>
          <p className="text-xl sm:text-2xl text-gray-400">Frontend Developer</p>
          <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto lg:mx-0">
           I'm a Frontend Developer who creates responsive, user-friendly web interfaces using HTML, CSS, JavaScript, and modern frameworks, focusing on clean design and smooth user experience.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center lg:justify-start">
            <a href="#contact" className="bg-primary text-white px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
              Contact Me
            </a>
            <a href="/resume.pdf" download="Nishant_Nayan_Resume.pdf" className="border-2 border-primary text-primary px-6 sm:px-8 py-3 rounded-lg font-semibold hover:bg-primary hover:text-white transition">
              Download Resume
            </a>
          </div>
        </div>
        <div className="flex justify-center mt-8 lg:mt-0">
          <div className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96">
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/30 via-primary/50 to-primary/30 blur-md animate-spin-slow"></div>
            <div className="relative w-full h-full rounded-full border-4 border-primary/60 overflow-hidden bg-darker">
              <img 
                src="/images/profile.jpg" 
                alt="Profile" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
