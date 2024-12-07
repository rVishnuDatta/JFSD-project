import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUp, Facebook, Twitter, Instagram, Github } from 'lucide-react';

const Home = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Sticky Header */}
      <header className="sticky top-0 z-50 bg-white shadow-md">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="text-xl font-semibold">
              Food <span className="text-[#06C167] font-bold">Donate</span>
            </div>
            
            {/* Mobile Menu Button */}
            <button 
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 hover:bg-gray-100 rounded-lg transition-colors"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>

            {/* Navigation */}
            <nav className={`absolute md:relative top-16 md:top-0 left-0 w-full md:w-auto bg-white md:bg-transparent
              transform ${isMenuOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'}
              transition-transform duration-300 ease-in-out md:transition-none`}>
              <ul className="flex flex-col md:flex-row md:items-center space-y-2 md:space-y-0 md:space-x-6 p-4 md:p-0">
                <li><a href="#home" className="block text-[#06C167] hover:text-[#048f4d] transition-colors">Home</a></li>
                <li><a href="#about" className="block hover:text-[#06C167] transition-colors">About</a></li>
                <li><a href="#contact" className="block hover:text-[#06C167] transition-colors">Contact</a></li>
                <li><a href="#profile" className="block hover:text-[#06C167] transition-colors">Profile</a></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Banner */}
      <section className="relative h-[500px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80")' }}>
        <div className="text-center text-white">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Make a Difference</h1>
          <a href="#donate" 
            className="inline-block px-8 py-3 bg-[#06C167] text-white rounded-full
            hover:bg-[#048f4d] transform hover:scale-110 transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-[#06C167] focus:ring-offset-2">
            Donate Food
          </a>
        </div>
      </section>

      {/* Quote Section */}
      <section className="container mx-auto px-4 py-16">
        <blockquote className="text-2xl md:text-3xl italic text-gray-700 max-w-3xl mx-auto text-center
          border-l-4 border-[#06C167] pl-4 animate-fade-in">
          "Cutting food waste is a delicious way of saving money, helping to feed the world and protect the planet."
        </blockquote>
      </section>
      {/* Our Works */}
      <section className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Works</h2>
          <p className="text-xl text-center mb-12">"Look what we can do together."</p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80',
              'https://images.unsplash.com/photo-1578357078586-491adf1aa5ba?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80'
            ].map((src, index) => (
              <div key={index} className="overflow-hidden rounded-lg shadow-lg">
                <img
                  src={src}
                 
                  className="w-full h-64 object-cover transform hover:scale-110 transition-transform duration-300"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Door Pickup */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4 animate-bounce">DOOR PICKUP</h2>
        <p className="text-xl mb-8">"Your donate will be immediately collected and sent to needy people"</p>
        <img
          src="https://images.unsplash.com/photo-1519003300449-424ad0405076?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
          alt="Delivery"
          className="mx-auto rounded-lg shadow-xl max-w-2xl"
        />
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white pt-12 pb-8">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">About Us</h3>
              <p className="text-gray-400">
                The basic concept of this project Food Waste Management is to collect the excess/leftover
                food from donors such as hotels, restaurants, marriage halls, etc and distribute to the needy people.
              </p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold mb-4">Contact</h3>
              <p className="text-gray-400 mb-2">(+00) 0000 000 000</p>
              <a href="mailto:Fooddonate@gmail.com" className="text-gray-400 hover:text-white transition-colors">
                Fooddonate@gmail.com
              </a>
              
              <div className="flex space-x-4 mt-6">
                <a href="#" className="transform hover:scale-120 transition-transform duration-300">
                  <Facebook className="w-6 h-6" />
                </a>
                <a href="#" className="transform hover:scale-120 transition-transform duration-300">
                  <Twitter className="w-6 h-6" />
                </a>
                <a href="#" className="transform hover:scale-120 transition-transform duration-300">
                  <Instagram className="w-6 h-6" />
                </a>
                <a href="https://github.com/kishor-23" className="transform hover:scale-120 transition-transform duration-300">
                  <Github className="w-6 h-6" />
                </a>
              </div>
            </div>
            
            <div>
              <h2 className="text-2xl font-bold mb-4">
                Food <span className="text-[#06C167]">Donate</span>
              </h2>
              <div className="flex flex-wrap gap-4">
                <a href="#" className="hover:text-[#06C167] transition-colors">Home</a>
                <span>|</span>
                <a href="#" className="hover:text-[#06C167] transition-colors">About</a>
                <span>|</span>
                <a href="#" className="hover:text-[#06C167] transition-colors">Services</a>
                <span>|</span>
                <a href="#" className="hover:text-[#06C167] transition-colors">Contact</a>
              </div>
              <p className="mt-4 text-gray-400">Food Donate &copy; 2023</p>
            </div>
          </div>
        </div>
      </footer>

      {/* Back to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 bg-[#06C167] text-white p-3 rounded-full
          hover:bg-[#048f4d] transform hover:scale-110 transition-all duration-300
          focus:outline-none focus:ring-2 focus:ring-[#06C167] focus:ring-offset-2"
        >
          <ArrowUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Home;