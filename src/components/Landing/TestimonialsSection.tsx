import React from 'react'
import { Star } from 'lucide-react'

const testimonials = [
  {
    name: 'Sarah Chen',
    role: 'Small Business Owner',
    content: 'LexiClear saved me thousands in legal fees. I can now understand my contracts without calling my lawyer every time.',
    rating: 5,
  },
  {
    name: 'Marcus Johnson',
    role: 'Freelance Designer',
    content: 'Finally, a tool that makes legal documents make sense. The AI explanations are spot-on and easy to understand.',
    rating: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'Startup Founder',
    content: 'Game-changer for our startup. We can review contracts quickly and make informed decisions without legal delays.',
    rating: 5,
  },
]

export const TestimonialsSection: React.FC = () => {
  return (
    <div className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Trusted by Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Join thousands of business owners, freelancers, and professionals who use LexiClear daily.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-lg transition-shadow duration-300"
            >
              <div className="flex items-center mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                ))}
              </div>
              
              <p className="text-gray-700 mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>
              
              <div>
                <div className="font-semibold text-gray-900">{testimonial.name}</div>
                <div className="text-gray-500 text-sm">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}