import React from 'react';
import Layout from '@/components/Layout';
import QuoteForm from '@/components/QuoteForm';
import FAQ from '@/components/FAQ';
import { Shield, Clock, DollarSign, Star } from 'lucide-react';

const Home: React.FC = () => {
  const features = [
    {
      icon: Shield,
      title: "Fully Insured",
      description: "All shipments are fully insured for your peace of mind"
    },
    {
      icon: Clock,
      title: "Fast & Reliable",
      description: "Quick pickup and on-time delivery nationwide"
    },
    {
      icon: DollarSign,
      title: "Best Prices",
      description: "Competitive rates with no hidden fees"
    },
    {
      icon: Star,
      title: "Top Rated",
      description: "Thousands of satisfied customers nationwide"
    }
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-teal-400 to-teal-800 text-white py-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">Ship Your Car Anywhere in the USA</h1>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            Get instant quotes, book online, and track your vehicle with America's most trusted car shipping service.
          </p>
          <div className="grid md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="bg-white/20 rounded-full p-4 w-16 h-16 mx-auto mb-4 flex items-center justify-center">
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm opacity-90">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quote Form Section */}
      <section id="quote" className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <QuoteForm />
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <FAQ />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-teal-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Ship Your Car?</h2>
          <p className="text-xl mb-8">Join thousands of satisfied customers who trust us with their vehicles.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#quote" className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              Get Free Quote
            </a>
            <a href="tel:1-800-AUTO-SHIP" className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              Call Now: 1-800-AUTO-SHIP
            </a>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Home;