import React from 'react';
import Layout from '@/components/Layout';
import FAQ from '@/components/FAQ';
import { HelpCircle, Phone, Mail } from 'lucide-react';

const FAQPage: React.FC = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center mb-6">
              <HelpCircle className="h-12 w-12 text-teal-600 mr-4" />
              <h1 className="text-4xl font-bold text-gray-800">Frequently Asked Questions</h1>
            </div>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to the most common questions about our car shipping services.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <FAQ />
            
            {/* Still Have Questions */}
            <div className="mt-16 bg-teal-600 text-white rounded-lg p-8 text-center">
              <h2 className="text-2xl font-bold mb-4">Still Have Questions?</h2>
              <p className="text-lg mb-8">Our expert team is available 24/7 to help you with any concerns.</p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a 
                  href="tel:1-800-AUTO-SHIP" 
                  className="bg-white text-teal-600 px-6 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors flex items-center justify-center"
                >
                  <Phone className="h-5 w-5 mr-2" />
                  Call 1-800-AUTO-SHIP
                </a>
                <a 
                  href="mailto:info@autoship.com" 
                  className="border-2 border-white px-6 py-3 rounded-lg font-semibold hover:bg-white hover:text-teal-600 transition-colors flex items-center justify-center"
                >
                  <Mail className="h-5 w-5 mr-2" />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default FAQPage;