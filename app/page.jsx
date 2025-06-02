"use client";
import { Button } from "@/components/ui/button";
import HeroSection from "@/components/HeroSection";
import { Card, CardContent } from "@/components/ui/card";
import howItWorks from "@/data/howItWorks";
import testimonials from "@/data/testimonials";
import faqs from "@/data/faqs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import Link from "next/link";
import { ArrowRight, Check, Users, BarChart, Clock, MessageSquare, Star } from "lucide-react";

const stats = [
  { value: "50+", label: "Industries Covered" },
  { value: "1000+", label: "Interview Questions" },
  { value: "95%", label: "Success Ratio" },
  { value: "24/7", label: "AI Support" },
];

export default function Home() {
  return (
    <div className="bg-gray-900 text-white">
      <HeroSection />

      {/* Stats Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {stats.map((stat, index) => (
              <div key={index} className="flex flex-col items-center text-center p-6 bg-gray-700 rounded-lg hover:bg-gray-600 transition-colors">
                <h3 className="text-4xl font-bold text-blue-400 mb-2">{stat.value}</h3>
                <p className="text-gray-300">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">How It Works</h2>
            <p className="text-gray-400">Four simple steps to accelerate your career growth</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
            {howItWorks.map((item, index) => (
              <div key={index} className="bg-gray-800 p-6 rounded-lg hover:bg-gray-700 transition-colors">
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-4 mx-auto">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-center mb-3">{item.title}</h3>
                <p className="text-gray-300 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-16">What Our Users Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="relative h-14 w-14 flex-shrink-0">
                    <img 
                      src={testimonial.image}
                      alt={testimonial.author}
                      className="rounded-full h-full w-full object-cover border-2 border-blue-500"
                    />
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-400">{testimonial.role}</p>
                    <p className="text-sm text-blue-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-2">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-300 italic">
                  "{testimonial.quote}"
                </blockquote>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-900">
        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-gray-400">Find answers to common questions about our platform</p>
          </div>
          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {faqs.map((faq, index) => (
                <AccordionItem 
                  key={index} 
                  value={faq.id}
                  className="bg-gray-800 rounded-lg overflow-hidden"
                >
                  <AccordionTrigger className="px-6 py-4 hover:bg-gray-700 transition-colors">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="px-6 py-4 bg-gray-800 text-gray-300">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-950 to-slategray-700">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Accelerate Your Career?</h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto mb-8">
            Join thousands of professionals who are advancing their careers with AI-powered guidance
          </p>
          <Link href="/dashboard" passHref>
            <Button className="bg-white text-blue-700 hover:bg-gray-100 text-lg px-8 py-6 rounded-lg font-semibold">
              Start Your Journey Today <ArrowRight className="h-5 w-5 ml-2" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-12 border-t border-gray-800">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-6 md:mb-0">
              <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
                <Check className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold">AspireAI</span>
            </div>
          </div>
          {/* <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
            <p>© {new Date().getFullYear()} AspireAI. All rights reserved.</p>
          </div> */}
        </div>
      </footer>
    </div>
  );
}
