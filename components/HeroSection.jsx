"use client";

import Link from 'next/link';
import { Button } from './ui/button';
import Image from 'next/image';
import { Monitor, FileText, TrendingUp } from 'lucide-react';

const HeroSection = () => {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <div className="w-8 h-8 bg-blue-500 rounded-md flex items-center justify-center">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <span className="text-xl font-bold">AspireAI</span>
        </div>
        <div className="hidden md:flex items-center space-x-8">
          <a href="#" className="hover:text-blue-400 transition-colors">Home</a>
          <a href="#features" className="hover:text-blue-400 transition-colors">Features</a>
          <a href="#pricing" className="hover:text-blue-400 transition-colors">Pricing</a>
          <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
          <Link href="/dashboard" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 px-6">Get Started</Button>
          </Link>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-6 py-16 md:py-24 flex flex-col md:flex-row items-center">
        <div className="md:w-1/2 mb-12 md:mb-0">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Navigate Your Career Path with AI
          </h1>
          <p className="text-lg md:text-xl text-gray-300 mb-8">
            Unlock your potential with CareerWise, your AI-powered career coach. Gain industry insights, build a standout resume, and track your progress towards your dream job.
          </p>
          <Link href="/dashboard" passHref>
            <Button className="bg-blue-600 hover:bg-blue-700 text-lg px-8 py-6 rounded-lg">
              Get Started
            </Button>
          </Link>
        </div>
        <div className="md:w-1/2 flex justify-center">
          <div className="relative w-full max-w-md">
            <Image 
              src="/banner.jpg" 
              alt="Person climbing career ladder" 
              width={500} 
              height={600} 
              className="rounded-lg"
              priority
            />
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-16 bg-gray-800">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-4">Key Features</h2>
          <p className="text-center text-gray-300 max-w-2xl mx-auto mb-12">
            CareerWise offers a suite of tools to help you succeed in your career journey.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Feature 1 */}
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <Monitor className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">AI-Powered Insights</h3>
              <p className="text-gray-300">
                Get real-time industry trends and insights to make informed career decisions.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <FileText className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Resume Enhancement</h3>
              <p className="text-gray-300">
                Craft a professional resume that highlights your skills and experience effectively.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="bg-gray-700 p-6 rounded-lg hover:bg-gray-600 transition-colors">
              <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Learning Paths</h3>
              <p className="text-gray-300">
                Follow tailored learning paths to acquire the skills needed for your desired roles.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HeroSection;