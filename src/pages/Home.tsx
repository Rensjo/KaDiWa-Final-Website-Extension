import React from 'react';
import { Link } from 'react-router-dom';
import { Shield, Download, Users, Award, Target, Zap, BookOpen, TrendingUp } from 'lucide-react';

const Home = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Think Before You <span className="text-amber-400">Click</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 text-blue-100">
              KaDiWa: Your shield against misinformation. Empowering digital literacy in the Philippines.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/extension"
                className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors inline-flex items-center space-x-2"
              >
                <Download className="h-5 w-5" />
                <span>Install Extension</span>
              </Link>
              <Link
                to="/dashboard"
                className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
              >
                Start Learning
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">60%</div>
              <div className="text-gray-600">Reduction in misinformation sharing</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">500M+</div>
              <div className="text-gray-600">Filipinos reached</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">2.5M+</div>
              <div className="text-gray-600">Active users</div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-blue-900 mb-2">15K+</div>
              <div className="text-gray-600">Schools partnered</div>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Decade-Defense Against Disinformation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Comprehensive tools and resources to build critical thinking skills and combat misinformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-blue-900" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Protection</h3>
              <p className="text-gray-600 mb-4">
                Our browser extension identifies and flags misinformation as you browse, with instant educational tooltips.
              </p>
              <Link to="/extension" className="text-blue-900 font-semibold hover:text-blue-700">
                Learn more →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="h-6 w-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Adaptive Learning</h3>
              <p className="text-gray-600 mb-4">
                Age-appropriate dashboards with interactive lessons, quizzes, and rewards to build digital literacy skills.
              </p>
              <Link to="/dashboard" className="text-blue-900 font-semibold hover:text-blue-700">
                Start learning →
              </Link>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="h-6 w-6 text-green-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Community Power</h3>
              <p className="text-gray-600 mb-4">
                Join a community of critical thinkers, earn KaDiWa Coins, and compete on leaderboards.
              </p>
              <Link to="/community" className="text-blue-900 font-semibold hover:text-blue-700">
                Join community →
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Digital Literacy Tools
            </h2>
            <p className="text-xl text-gray-600">
              Powerful AI-powered tools to detect and understand misinformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Target className="h-8 w-8 text-red-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Fake News Detector</h3>
              <p className="text-sm text-gray-600">Analyze text, images, and videos for misinformation</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Zap className="h-8 w-8 text-purple-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Deepfake Detection</h3>
              <p className="text-sm text-gray-600">Identify AI-generated content and manipulated media</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="h-8 w-8 text-blue-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Citation Generator</h3>
              <p className="text-sm text-gray-600">Create proper citations for verified sources</p>
            </div>

            <div className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <TrendingUp className="h-8 w-8 text-green-500 mb-3" />
              <h3 className="font-semibold text-gray-900 mb-2">Trend Analysis</h3>
              <p className="text-sm text-gray-600">Track misinformation patterns and emerging threats</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Success Stories
            </h2>
            <p className="text-xl text-gray-600">
              Real impact from real users across the Philippines
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="John Santos"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">John Santos</h4>
                    <p className="text-sm text-gray-600">College Student, Manila</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "KaDiWa helped me identify fake news during the election period. I feel more confident sharing accurate information with my family now."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Christine Reyes"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Christine Reyes</h4>
                    <p className="text-sm text-gray-600">Teacher, Cebu</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "The teacher toolkit is amazing! My students are now more critical about what they see online. KaDiWa has transformed our digital literacy classes."
                </p>
              </div>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="mb-6">
                <div className="flex items-center mb-4">
                  <img
                    src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Kevin Cruz"
                    className="w-12 h-12 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">Kevin Cruz</h4>
                    <p className="text-sm text-gray-600">Parent, Davao</p>
                  </div>
                </div>
                <p className="text-gray-600 italic">
                  "As a parent, I'm grateful for KaDiWa's age-appropriate content. My kids are learning to think critically about what they see online."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Become a Digital Defender?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of Filipinos in the fight against misinformation. Install KaDiWa today and earn your first KaDiWa Coins!
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/extension"
              className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors inline-flex items-center space-x-2"
            >
              <Download className="h-5 w-5" />
              <span>Install Extension</span>
            </Link>
            <Link
              to="/dashboard"
              className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-900 transition-colors"
            >
              Start Learning
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;