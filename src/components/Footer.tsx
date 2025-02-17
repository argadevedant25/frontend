export default function Footer() {
    return (
      <footer className="py-20 px-6 bg-black text-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Lets create something amazing together
              </h2>
              <button className="bg-white text-black px-8 py-3 rounded-full hover:bg-gray-100 transition-colors">
                Get in Touch
              </button>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div>
                <h3 className="text-lg font-semibold mb-4">Menu</h3>
                <ul className="space-y-2">
                  <li><a href="/work" className="hover:text-gray-300">Work</a></li>
                  <li><a href="/services" className="hover:text-gray-300">Services</a></li>
                  <li><a href="/about" className="hover:text-gray-300">About</a></li>
                  <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-4">Social</h3>
                <ul className="space-y-2">
                  <li><a href="#" className="hover:text-gray-300">Twitter</a></li>
                  <li><a href="#" className="hover:text-gray-300">Instagram</a></li>
                  <li><a href="#" className="hover:text-gray-300">LinkedIn</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }