import React from 'react';
import { Shield, Target, Users, Award, BookOpen, Globe } from 'lucide-react';

const About = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              About <span className="text-amber-400">KaDiWa</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Empowering digital literacy and critical thinking to combat misinformation in the Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Mission
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                KaDiWa stands for "Kaalaman, Diskarte, at Wastong Impormasyon" (Knowledge, Strategy, and Accurate Information). 
                We are on a mission to create a more informed and critically thinking Philippines by providing accessible digital literacy tools and education.
              </p>
              <p className="text-lg text-gray-600 mb-6">
                Born from the recognition that misinformation spreads faster than truth, KaDiWa serves as a digital shield, 
                empowering every Filipino to think before they click, share, and believe.
              </p>
              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <Shield className="h-6 w-6 text-blue-900" />
                  <span className="font-semibold text-gray-900">UN SDG 4: Quality Education</span>
                </div>
              </div>
            </div>
            <div className="bg-blue-50 p-8 rounded-xl">
              <img 
                src="https://images.pexels.com/photos/3184298/pexels-photo-3184298.jpeg?auto=compress&cs=tinysrgb&w=600&h=400&fit=crop"
                alt="Digital literacy education"
                className="rounded-lg shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accuracy</h3>
              <p className="text-gray-600">
                We prioritize truth and accuracy in all information we provide and tools we develop.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Accessibility</h3>
              <p className="text-gray-600">
                Digital literacy tools should be available to all Filipinos, regardless of age or background.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Education</h3>
              <p className="text-gray-600">
                We believe in empowering people through education rather than simply blocking content.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problem & Solution */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              The Problem We're Solving
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div className="bg-red-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-red-900 mb-4">The Challenge</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>60% of Filipinos have encountered fake news online</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Limited digital literacy education in schools</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Rapid spread of misinformation on social media</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-red-500 mt-1">•</span>
                  <span>Weak critical thinking skills in digital spaces</span>
                </li>
              </ul>
            </div>

            <div className="bg-green-50 p-8 rounded-xl">
              <h3 className="text-2xl font-bold text-green-900 mb-4">Our Solution</h3>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Real-time misinformation detection and education</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Age-appropriate digital literacy curricula</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Gamified learning with rewards and recognition</span>
                </li>
                <li className="flex items-start space-x-2">
                  <span className="text-green-500 mt-1">•</span>
                  <span>Community-driven fact-checking and reporting</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Meet the Team
            </h2>
            <p className="text-xl text-gray-600">
              Passionate Tech Innovators working together to make a difference in the education and digital literacy landscape of the Philippines.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img 
              src="/src/images/shann.png"
              alt="Shann Karl Felipe"
              className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Shann Karl Felipe</h3>
              <p className="text-amber-600 font-medium mb-3">CEO</p>
              <p className="text-gray-600">
              Leads vision, strategy, and overall direction of KaDiWa.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img 
                src="/src/images/jorens.png"
                alt="Jorens Ivan Rance"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Jorens Ivan Rance</h3>
              <p className="text-amber-600 font-medium mb-3">Chief Finance Officer</p>
              <p className="text-gray-600">
                Manages funding, budgeting, and financial growth strategies.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img 
                src="/src/images/hanna.png"
                alt="Hanna Libut"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hannah Libut</h3>
              <p className="text-amber-600 font-medium mb-3">Chief Marketing Officer</p>
              <p className="text-gray-600">
                Drives branding, promotions, and user engagement campaigns.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img 
                src="/src/images/revinea.png"
                alt="Revinea Labiano"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Revinea Labiano</h3>
              <p className="text-amber-600 font-medium mb-3">Chief Technological Officer</p>
              <p className="text-gray-600">
                Oversees platform development, innovation, and technical operations.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg text-center">
              <img 
                src="/src/images/hassan.png"
                alt="Hassan Maricor"
                className="w-24 h-24 rounded-full mx-auto mb-4"
              />
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Hassan Maricor</h3>
              <p className="text-amber-600 font-medium mb-3">Chief Operations Officer</p>
              <p className="text-gray-600">
                Ensures smooth execution of daily operations and implementations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Recognition Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Recognition & Awards
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-amber-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">UNICEF Innovation Award</h3>
              <p className="text-sm text-gray-600">2024</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Globe className="h-8 w-8 text-blue-900" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">UN SDG Action Award</h3>
              <p className="text-sm text-gray-600">2023</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <BookOpen className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">DOST Innovation Grant</h3>
              <p className="text-sm text-gray-600">2023</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Media Literacy Champion</h3>
              <p className="text-sm text-gray-600">2024</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;