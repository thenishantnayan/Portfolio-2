const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
        <a href="#home" className="text-primary text-xl sm:text-2xl font-bold">NN</a>
        <div className="hidden md:flex gap-6 lg:gap-12 text-gray-300 text-sm lg:text-base">
          <a href="#home" className="hover:text-primary transition">Home</a>
          <a href="#skills" className="hover:text-primary transition">Skills</a>
          <a href="#experience" className="hover:text-primary transition">Experience</a>
          <a href="#projects" className="hover:text-primary transition">Projects</a>
          <a href="#education" className="hover:text-primary transition">Education</a>
          <a href="#contact" className="hover:text-primary transition">Contact</a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
