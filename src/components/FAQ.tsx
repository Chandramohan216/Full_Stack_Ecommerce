import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const FAQ: React.FC = () => {
  const faqs = [
    {
      question: "How much does car shipping cost?",
      answer: "Car shipping costs vary based on distance, vehicle type, transport method, and season. Typically ranges from $500-$1,500 for most routes. Get a free quote for accurate pricing."
    },
    {
      question: "How long does car shipping take?",
      answer: "Delivery times depend on distance and route. Local moves: 1-3 days. Cross-country: 7-14 days. We'll provide estimated delivery dates with your quote."
    },
    {
      question: "Is my car insured during transport?",
      answer: "Yes, all carriers are required to have cargo insurance. We also recommend checking with your personal auto insurance for additional coverage during transport."
    },
    {
      question: "Can I put personal items in my car?",
      answer: "Most carriers allow up to 100 lbs of personal items in the trunk or back seat. Items must be below window level and not visible from outside."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept cash, certified checks, and money orders. Payment is typically due upon delivery. Some carriers may accept credit cards with prior arrangement."
    },
    {
      question: "Do I need to be present for pickup and delivery?",
      answer: "Yes, you or an authorized representative (18+) must be present during both pickup and delivery to sign the Bill of Lading and inspect the vehicle."
    },
    {
      question: "What should I do to prepare my car?",
      answer: "Remove personal items, clean your car, document existing damage with photos, ensure it's in running condition, and have less than 1/4 tank of gas."
    },
    {
      question: "What if my car is damaged during transport?",
      answer: "Document any damage immediately on the Bill of Lading. Contact us right away, and we'll help you file a claim with the carrier's insurance company."
    }
  ];

  return (
    <div className="bg-white rounded-lg shadow-xl p-8">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">Frequently Asked Questions</h2>
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left font-semibold text-gray-800">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-gray-600 leading-relaxed">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default FAQ;