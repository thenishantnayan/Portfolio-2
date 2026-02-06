const Contact = () => {
  return (
    <section id="contact" className="min-h-screen bg-navy flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <h2 className="text-5xl font-bold text-center mb-16">
          <span className="text-white">Get In </span>
          <span className="text-primary">Touch</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          <div className="space-y-8">
            <h3 className="text-3xl font-bold text-white">Let's talk about everything!</h3>
            <p className="text-gray-400 text-lg flex items-center gap-2">
              Prefer email? You can reach me directly. <span className="text-2xl">👋</span>
            </p>
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">✉️</span>
                </div>
                <span className="text-gray-300 text-lg">cpriyanshu211@gmail.com</span>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-blue-950 rounded-lg flex items-center justify-center">
                  <span className="text-2xl">📞</span>
                </div>
                <span className="text-gray-300 text-lg">+91 9027497153</span>
              </div>
            </div>
            <div className="flex gap-6 pt-8">
              <a href="#" className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center hover:bg-blue-700 transition">
                <span className="text-white text-xl">in</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-white text-xl">G</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-white text-xl">L</span>
              </a>
              <a href="#" className="w-12 h-12 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-gray-700 transition">
                <span className="text-white text-xl">C</span>
              </a>
              <a href="#" className="w-12 h-12 bg-green-600 rounded-lg flex items-center justify-center hover:bg-green-700 transition">
                <span className="text-white text-xl">H</span>
              </a>
            </div>
          </div>
          <div className="bg-dark/50 rounded-xl p-8 border border-gray-800">
            <form className="space-y-6">
              <div>
                <label className="block text-gray-300 mb-2">Your Name</label>
                <input type="text" placeholder="John Doe" className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Email Address</label>
                <input type="email" placeholder="john@example.com" className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition" />
              </div>
              <div>
                <label className="block text-gray-300 mb-2">Message</label>
                <textarea rows="5" placeholder="How can we help you?" className="w-full bg-darker border border-gray-700 rounded-lg px-4 py-3 text-gray-300 focus:outline-none focus:border-primary transition resize-none"></textarea>
              </div>
              <button type="submit" className="w-full bg-primary text-white py-3 rounded-lg font-semibold hover:bg-primary/90 transition">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
