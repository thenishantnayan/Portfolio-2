const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full bg-dark/95 backdrop-blur-sm z-50 border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-8 py-5 flex justify-between items-center">
        <a href="#home" className="text-primary text-2xl font-bold">PC</a>
        <div className="flex gap-12 text-gray-300">
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
