import React from 'react'
import { Upload, Brain, Shield } from 'lucide-react'

const features = [
  {
    icon: Upload,
    title: 'Upload Any Legal Doc',
    description: 'Supports PDF contracts, policies, NDAs, and other legal documents. Simply drag and drop or browse to upload.',
  },
  {
    icon: Brain,
    title: 'AI Demystification',
    description: 'Advanced AI converts complex legal jargon into clear, plain-English explanations that anyone can understand.',
  },
  {
    icon: Shield,
    title: 'Secure & Private',
    description: 'Your documents are processed securely with enterprise-grade encryption. Nothing is stored permanently.',
  },
]

export const FeaturesSection: React.FC = () => {
  return (
    <div className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Why Choose LexiClear?
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Transform complex legal documents into clear, understandable content with our powerful AI technology.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group p-8 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              <div className="mb-6">
                <div className="inline-flex p-4 bg-blue-100 rounded-2xl group-hover:bg-blue-600 transition-colors duration-300">
                  <feature.icon className="h-8 w-8 text-blue-600 group-hover:text-white transition-colors duration-300" />
                </div>
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {feature.title}
              </h3>
              
              <p className="text-gray-600 leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}