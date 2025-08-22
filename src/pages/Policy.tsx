import React from 'react';
import Layout from '@/components/Layout';
import { FileText, Shield, AlertTriangle } from 'lucide-react';

const Policy: React.FC = () => {
  return (
    <Layout>
      <div className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl font-bold text-gray-800 mb-6">Company Policy & Terms</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Please review our terms and conditions before booking your car shipment.
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Service Agreement */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <FileText className="h-8 w-8 text-blue-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Service Agreement</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">
                  By requesting a quote and booking our services, you agree to the following terms and conditions:
                </p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>AutoShip Pro acts as a broker connecting customers with licensed carriers</li>
                  <li>All quotes are estimates based on current market conditions</li>
                  <li>Final pricing may vary based on actual pickup conditions and vehicle specifications</li>
                  <li>Payment is due to the carrier upon delivery unless otherwise arranged</li>
                  <li>Customers must be present or have an authorized representative (18+) for pickup and delivery</li>
                </ul>
              </div>
            </div>

            {/* Insurance & Liability */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <Shield className="h-8 w-8 text-green-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Insurance & Liability</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <ul className="list-disc pl-6 space-y-2">
                  <li>All carriers are required to maintain cargo insurance coverage</li>
                  <li>Insurance coverage varies by carrier but typically ranges from $100,000 to $1,000,000</li>
                  <li>Customers should verify coverage limits with their assigned carrier</li>
                  <li>Pre-existing damage must be documented on the Bill of Lading</li>
                  <li>Damage claims must be reported immediately upon delivery</li>
                  <li>AutoShip Pro assists with claims but is not liable for carrier performance</li>
                </ul>
              </div>
            </div>

            {/* Vehicle Preparation */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <div className="flex items-center mb-6">
                <AlertTriangle className="h-8 w-8 text-orange-600 mr-3" />
                <h2 className="text-2xl font-bold text-gray-800">Vehicle Preparation Requirements</h2>
              </div>
              <div className="prose prose-lg text-gray-600">
                <p className="mb-4">To ensure safe transport, vehicles must meet the following requirements:</p>
                <ul className="list-disc pl-6 space-y-2">
                  <li>Vehicle must be in running condition (unless arranged for inoperable transport)</li>
                  <li>Fuel tank should be no more than 1/4 full</li>
                  <li>Remove all personal items except those in the trunk (up to 100 lbs)</li>
                  <li>Disable car alarms or provide instructions to the carrier</li>
                  <li>Document existing damage with photos before pickup</li>
                  <li>Ensure battery is charged and tires are properly inflated</li>
                </ul>
              </div>
            </div>

            {/* Cancellation Policy */}
            <div className="bg-white rounded-lg shadow-xl p-8">
              <h2 className="text-2xl font-bold text-gray-800 mb-6">Cancellation Policy</h2>
              <div className="prose prose-lg text-gray-600">
                <ul className="list-disc pl-6 space-y-2">
                  <li>Customers may cancel orders before carrier assignment without penalty</li>
                  <li>Cancellations after carrier assignment may incur fees</li>
                  <li>Deposits are refundable if cancellation occurs before pickup</li>
                  <li>Weather-related delays do not constitute grounds for cancellation without fees</li>
                </ul>
              </div>
            </div>

            {/* Contact Information */}
            <div className="bg-blue-50 border-l-4 border-blue-600 p-6">
              <h3 className="text-lg font-semibold text-gray-800 mb-2">Questions About Our Policies?</h3>
              <p className="text-gray-600">
                Contact our customer service team at <strong>1-800-AUTO-SHIP</strong> or email us at <strong>info@autoship.com</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Policy;