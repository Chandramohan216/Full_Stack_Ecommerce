import React from 'react';
import Layout from '@/components/Layout';
import { Button } from '@/components/ui/button';
import { Home, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const NotFound: React.FC = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h1 className="text-6xl font-bold text-gray-800 mb-4">404</h1>
            <h2 className="text-2xl font-semibold text-gray-600 mb-6">Page Not Found</h2>
            <p className="text-gray-500 mb-8">
              The page you're looking for doesn't exist or has been moved.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/">
                <Button className="bg-blue-600 hover:bg-blue-700">
                  <Home className="h-4 w-4 mr-2" />
                  Go Home
                </Button>
              </Link>
              <Button variant="outline" onClick={() => window.history.back()}>
                <ArrowLeft className="h-4 w-4 mr-2" />
                Go Back
              </Button>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default NotFound;
