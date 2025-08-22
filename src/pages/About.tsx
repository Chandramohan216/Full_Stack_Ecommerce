import React from 'react';
import Layout from '@/components/Layout';
import { Users, Award, MapPin, Clock } from 'lucide-react';

const About: React.FC = () => {
  const stats = [
    { icon: Users, number: "50,000+", label: "Happy Customers" },
    { icon: Award, number: "15+", label: "Years Experience" },
    { icon: MapPin, number: "All 50", label: "States Covered" },
    { icon: Clock, number: "24/7", label: "Customer Support" }
  ];

  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          {/* Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">About AutoShip Pro</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We're America's leading car shipping broker, connecting customers with trusted carriers nationwide since 2008.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="text-center bg-white rounded-lg shadow-lg p-8">
                <div className="bg-teal-100 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-teal-600" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Content */}
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-lg shadow-xl p-8 mb-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Our Story</h2>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  Founded in 2008, AutoShip Pro began with a simple mission: make car shipping easy, reliable, and affordable for everyone. What started as a small family business has grown into one of the most trusted names in vehicle transportation.
                </p>
                <p className="mb-4">
                  We understand that your vehicle is more than just transportation—it's an investment, a necessity, and often holds sentimental value. That's why we've built our reputation on trust, transparency, and exceptional customer service.
                </p>
                <p>
                  Today, we work with a carefully vetted network of licensed and insured carriers to ensure your vehicle arrives safely and on time, every time.
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Why Choose Us?</h2>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Licensed & Bonded</h3>
                  <p className="text-gray-600 mb-6">We're fully licensed by the Department of Transportation and bonded for your protection.</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Vetted Carriers</h3>
                  <p className="text-gray-600">All our carriers are thoroughly screened, licensed, and insured for your peace of mind.</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">Transparent Pricing</h3>
                  <p className="text-gray-600 mb-6">No hidden fees or surprise charges. What we quote is what you pay.</p>
                  
                  <h3 className="text-lg font-semibold text-gray-800 mb-3">24/7 Support</h3>
                  <p className="text-gray-600">Our customer service team is available around the clock to assist you.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default About;