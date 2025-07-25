"use client";

import { useState } from 'react';
import { ChevronDown, ChevronUp, Star, Shield, Clock, Award, Users, CheckCircle } from 'lucide-react';

export default function WhySouji() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  const benefits = [
    {
      icon: <Shield className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "FDA Approved Technology",
      description: "Clinically tested and internationally certified materials for maximum safety"
    },
    {
      icon: <Award className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "Expert Orthodontists",
      description: "Treatment supervised by qualified orthodontists with 15+ years experience"
    },
    {
      icon: <Clock className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "50% Faster Results",
      description: "Advanced 3D mapping technology ensures quicker alignment than traditional methods"
    },
    {
      icon: <Users className="w-6 h-6 sm:w-8 sm:h-8" />,
      title: "10,000+ Happy Patients",
      description: "Trusted by thousands across India with 98% patient satisfaction rate"
    }
  ];

  const faqs = [
    {
      question: "How long does the treatment typically take?",
      answer: "Treatment duration varies based on individual cases, but most patients see significant results within 6-18 months. Our 3D mapping technology allows for precise treatment planning, often reducing overall treatment time by 30-50% compared to traditional braces."
    },
    {
      question: "Are clear aligners painful to wear?",
      answer: "Clear aligners cause minimal discomfort compared to traditional braces. You may experience slight pressure when switching to a new set of aligners, which indicates they're working effectively. This mild sensation typically subsides within 2-3 days."
    },
    {
      question: "How often should I wear my aligners?",
      answer: "For optimal results, aligners should be worn 20-22 hours per day. They can be removed for eating, drinking, brushing, and special occasions. Consistent wear is crucial for achieving your treatment timeline goals."
    },
    {
      question: "Can I eat and drink while wearing aligners?",
      answer: "You should remove aligners when eating or drinking anything other than water. This prevents staining and damage to the aligners. After meals, brush your teeth before reinserting the aligners to maintain oral hygiene."
    },
    {
      question: "What happens if I lose or break an aligner?",
      answer: "Contact us immediately if you lose or damage an aligner. We provide replacement aligners and will adjust your treatment plan if necessary. It's important not to skip to the next set without professional guidance."
    },
    {
      question: "Are there any age restrictions for clear aligners?",
      answer: "Clear aligners are suitable for teenagers and adults. For younger patients, we assess tooth development and compliance ability. There's no upper age limit - we've successfully treated patients well into their 60s and beyond."
    },
    {
      question: "How do I clean and maintain my aligners?",
      answer: "Clean aligners daily with lukewarm water and a soft toothbrush. Avoid hot water as it can warp the plastic. We provide special cleaning tablets and detailed care instructions to ensure your aligners remain clear and hygienic."
    },
    {
      question: "Will aligners affect my speech?",
      answer: "Most patients experience minimal speech changes that resolve within a few days. The thin, custom-fit design of our aligners minimizes speech interference. Practice speaking and reading aloud to adapt more quickly."
    }
  ];

  return (
    <section className="bg-gradient-to-br from-blue-50 via-white to-blue-50 py-8 sm:py-12 lg:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header Section */}
        <div className="text-center mb-8 sm:mb-12 lg:mb-16">
          
          <h2 className="text-2xl sm:text-3xl lg:text-5xl font-bold bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 bg-clip-text text-transparent mb-3 sm:mb-4 lg:mb-6">
            Why Choose Souji Aligners?
          </h2>
          
          <p className="text-sm sm:text-base lg:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Experience the future of orthodontic treatment with cutting-edge technology, 
            expert care, and proven results that transform smiles faster than ever before.
          </p>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 mb-12 sm:mb-16 lg:mb-20">
          {benefits.map((benefit, index) => (
            <div 
              key={index} 
              className="group bg-white p-4 sm:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-blue-100"
            >
              <div className="bg-gradient-to-br from-blue-500 to-blue-600 text-white p-3 sm:p-4 rounded-xl mb-4 sm:mb-6 w-fit group-hover:scale-110 transition-transform duration-300">
                {benefit.icon}
              </div>
              
              <h3 className="text-base sm:text-lg lg:text-xl font-bold text-gray-800 mb-2 sm:mb-3">
                {benefit.title}
              </h3>
              
              <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>

        {/* FAQ Section */}
        <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-8 lg:p-12 border border-blue-100">
          <div className="text-center mb-8 sm:mb-12">
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent mb-3 sm:mb-4">
              Frequently Asked Questions
            </h3>
            <p className="text-sm sm:text-base text-gray-600 max-w-2xl mx-auto">
              Get answers to the most common questions about clear aligner treatment
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-3 sm:space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="border border-gray-200 rounded-xl sm:rounded-2xl overflow-hidden hover:border-blue-300 transition-colors duration-300"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-4 sm:px-6 lg:px-8 py-4 sm:py-6 text-left bg-gradient-to-r from-blue-50 to-white hover:from-blue-100 hover:to-blue-50 transition-all duration-300 flex justify-between items-center group"
                >
                  <span className="text-sm sm:text-base lg:text-lg font-semibold text-gray-800 pr-4 group-hover:text-blue-700 transition-colors duration-300">
                    {faq.question}
                  </span>
                  <div className="flex-shrink-0 w-6 h-6 sm:w-8 sm:h-8 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-200 transition-colors duration-300">
                    {openFAQ === index ? (
                      <ChevronUp className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    ) : (
                      <ChevronDown className="w-4 h-4 sm:w-5 sm:h-5 text-blue-600" />
                    )}
                  </div>
                </button>
                
                {openFAQ === index && (
                  <div className="px-4 sm:px-6 lg:px-8 pb-4 sm:pb-6 bg-white animate-in slide-in-from-top-2 duration-300">
                    <div className="flex items-start gap-3 sm:gap-4">
                      <CheckCircle className="w-5 h-5 sm:w-6 sm:h-6 text-blue-500 flex-shrink-0 mt-0.5" />
                      <p className="text-xs sm:text-sm lg:text-base text-gray-600 leading-relaxed">
                        {faq.answer}
                      </p>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}