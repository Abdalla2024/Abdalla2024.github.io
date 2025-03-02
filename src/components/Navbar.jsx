import { useState } from 'react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const navigation = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
  ]

  const scrollToSection = (elementId) => {
    const element = document.getElementById(elementId);
    if (element) {
      // Get the navbar height to use as offset
      const navbarHeight = document.querySelector('header').offsetHeight;
      
      // Different offset adjustments based on section
      let extraOffset = 0;
      
      // Adjust offset based on which section we're scrolling to
      switch (elementId) {
        case 'projects':
          extraOffset = 50; // Keep projects offset as is
          break;
        case 'about':
          extraOffset = -25; // Reduced offset for less space above About
          break;
        case 'experience':
          extraOffset = -25; // Reduced offset for less space above Experience
          break;
        case 'contact':
          extraOffset = 30; // Keep contact as is
          break;
        default:
          extraOffset = 0; // No extra offset for home
      }
      
      // Get the element's position relative to the viewport
      const elementPosition = element.getBoundingClientRect().top;
      
      // Get the current scroll position
      const offsetPosition = elementPosition + window.pageYOffset - navbarHeight - extraOffset;
      
      // Scroll to the calculated position
      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
    setIsOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-lg dark:bg-gray-800 z-50">
      <div className="max-w-7xl mx-auto">
        <div className="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
          {/* Logo and Name */}
          <div className="flex-shrink-0">
            <a 
              href="#home" 
              onClick={(e) => {
                e.preventDefault();
                scrollToSection('home');
              }}
              className="flex items-center space-x-3"
            >
              <div className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                <span className="text-2xl font-bold text-white">A</span>
              </div>
              <span className="text-xl font-bold text-gray-900 dark:text-white">
                Abdalla Abdelmagid
              </span>
            </a>
          </div>
          
          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  e.preventDefault();
                  scrollToSection(item.href.substring(1));
                }}
                className="text-gray-600 hover:text-blue-600 dark:text-gray-300 dark:hover:text-blue-500 px-3 py-2 text-sm font-medium transition-colors"
              >
                {item.name}
              </a>
            ))}
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              {isOpen ? (
                <XMarkIcon className="block h-6 w-6" />
              ) : (
                <Bars3Icon className="block h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(item.href.substring(1));
                  }}
                  className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50"
                >
                  {item.name}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  )
}

export default Navbar 