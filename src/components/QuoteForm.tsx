import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Calendar } from '@/components/ui/calendar';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, CheckCircle } from 'lucide-react';
import { format } from 'date-fns';

const QuoteForm: React.FC = () => {
  const [formData, setFormData] = useState({
    zipFrom: '',
    zipTo: '',
    carDetails: '',
    pickupDate: undefined as Date | undefined,
    deliveryDate: undefined as Date | undefined,
    email: '',
    remarks: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [quoteNumber, setQuoteNumber] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate required fields
    if (!formData.zipFrom || !formData.zipTo || !formData.carDetails || 
        !formData.pickupDate || !formData.deliveryDate || !formData.email) {
      alert('Please fill in all required fields');
      return;
    }

    // Generate quote number
    const quoteNum = `Q${10 + Math.floor(Math.random() * 1000)}`;
    
    try {
      // Send quote data to backend Google Sheet
      const response = await fetch('http://64.23.161.224:3001/api/submit-quote', { // replace with your backend URL
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...formData, quoteNumber: quoteNum }),
      });

      if (!response.ok) {
        throw new Error('Failed to save quote');
      }

      setQuoteNumber(quoteNum);
      setSubmitted(true);
      
    } catch (err) {
      console.error(err);
      alert('Error submitting quote. Please try again.');
    }
  };

  const handleInputChange = (field: string, value: any) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-lg shadow-xl p-8 text-center">
        <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-gray-800 mb-2">Quote Submitted!</h3>
        <p className="text-gray-600 mb-4">Your quote number is:</p>
        <div className="bg-teal-50 border-2 border-teal-200 rounded-lg p-4 mb-6">
          <span className="text-3xl font-bold text-teal-600">{quoteNumber}</span>
        </div>
        <p className="text-sm text-gray-500">We'll contact you soon with your shipping quote.</p>
        <Button 
          onClick={() => {
            setSubmitted(false); 
            setFormData({
              zipFrom: '',
              zipTo: '',
              carDetails: '',
              pickupDate: undefined,
              deliveryDate: undefined,
              email: '',
              remarks: ''
            });
          }}
          className="mt-4 bg-teal-600 hover:bg-teal-700"
        >
          Submit Another Quote
        </Button>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Get Your Free Quote</h2>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label htmlFor="zipFrom">Zip Code From *</Label>
            <Input
              id="zipFrom"
              value={formData.zipFrom}
              onChange={(e) => handleInputChange('zipFrom', e.target.value)}
              placeholder="e.g., 90210"
              required
            />
          </div>
          <div>
            <Label htmlFor="zipTo">Zip Code To *</Label>
            <Input
              id="zipTo"
              value={formData.zipTo}
              onChange={(e) => handleInputChange('zipTo', e.target.value)}
              placeholder="e.g., 10001"
              required
            />
          </div>
        </div>

        <div>
          <Label htmlFor="carDetails">Car Year, Make, and Model *</Label>
          <Input
            id="carDetails"
            value={formData.carDetails}
            onChange={(e) => handleInputChange('carDetails', e.target.value)}
            placeholder="e.g., 2020 Toyota Camry"
            required
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          <div>
            <Label>First Available Pickup Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.pickupDate ? format(formData.pickupDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.pickupDate}
                  onSelect={(date) => handleInputChange('pickupDate', date)}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
          <div>
            <Label>First Available Delivery Date *</Label>
            <Popover>
              <PopoverTrigger asChild>
                <Button variant="outline" className="w-full justify-start text-left font-normal">
                  <CalendarIcon className="mr-2 h-4 w-4" />
                  {formData.deliveryDate ? format(formData.deliveryDate, "PPP") : "Select date"}
                </Button>
              </PopoverTrigger>
              <PopoverContent className="w-auto p-0" align="start">
                <Calendar
                  mode="single"
                  selected={formData.deliveryDate}
                  onSelect={(date) => handleInputChange('deliveryDate', date)}
                  disabled={(date) => date < new Date()}
                />
              </PopoverContent>
            </Popover>
          </div>
        </div>

        <div>
          <Label htmlFor="email">Email Address *</Label>
          <Input
            id="email"
            type="email"
            value={formData.email}
            onChange={(e) => handleInputChange('email', e.target.value)}
            placeholder="your@email.com"
            required
          />
        </div>

        <div>
          <Label htmlFor="remarks">Remarks/Notes (Optional)</Label>
          <Textarea
            id="remarks"
            value={formData.remarks}
            onChange={(e) => handleInputChange('remarks', e.target.value)}
            placeholder="Any additional information..."
            rows={4}
          />
        </div>

        <Button type="submit" className="w-full bg-teal-600 hover:bg-teal-700 text-lg py-3">
          Get My Quote
        </Button>
      </form>
    </div>
  );
};

export default QuoteForm;
