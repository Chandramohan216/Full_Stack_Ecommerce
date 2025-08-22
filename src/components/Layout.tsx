import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';

interface LayoutProps {
  children: React.ReactNode;
}

const Layout: React.FC<LayoutProps> = ({ children }) => {
  const location = useLocation();

  const navItems = [
    { path: '/', label: 'Home' },
    { path: '/faq', label: 'FAQ' },
    { path: '/about', label: 'About Us' },
    { path: '/contact', label: 'Contact' },
    { path: '/policy', label: 'Policy' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-teal-200 to-gray-100">
      {/* Header */}
      <header className="bg-white shadow-lg border-b-4 border-teal-600">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link to="/" className="flex items-center space-x-3">
              <div className="bg-teal-600 p-2 rounded-lg">
                <Truck className="h-8 w-8 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-800">AutoShip Pro</h1>
                <p className="text-sm text-gray-600">Car Shipping Experts</p>
              </div>
            </Link>
            
            <nav className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`font-medium transition-colors ${
                    location.pathname === item.path
                      ? 'text-teal-600 border-b-2 border-teal-600'
                      : 'text-gray-700 hover:text-teal-600'
                  }`}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1">
        {children}
      </main>

      {/* Footer */}
      <footer className="bg-teal-900 text-white py-8">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">AutoShip Pro</h3>
              <p className="text-gray-300">Your trusted partner in car shipping nationwide.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <ul className="space-y-2">
                {navItems.map((item) => (
                  <li key={item.path}>
                    <Link to={item.path} className="text-gray-300 hover:text-white">
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact Info</h4>
              <div className="space-y-2 text-gray-300">
                <div className="flex items-center space-x-2">
                  <Phone className="h-4 w-4" />
                  <span>1-800-AUTO-SHIP</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Mail className="h-4 w-4" />
                  <span>info@autoship.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Layout;