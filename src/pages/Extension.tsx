import React from 'react';
import { Download, Shield, Zap, Eye, CheckCircle, Chrome, Siren as Firefox, Globe } from 'lucide-react';

const Extension = () => {
  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-blue-900 to-blue-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              KaDiWa <span className="text-amber-400">Extension</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Real-time protection against misinformation. Install now and browse with confidence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors inline-flex items-center space-x-2">
                <Chrome className="h-5 w-5" />
                <span>Add to Chrome</span>
              </button>
              <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors inline-flex items-center space-x-2">
                <Firefox className="h-5 w-5" />
                <span>Add to Firefox</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              How KaDiWa Extension Works
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Advanced AI-powered detection that works seamlessly in the background while you browse
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-red-50 to-red-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-red-500 rounded-lg flex items-center justify-center mb-4">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Real-time Detection</h3>
              <p className="text-gray-600 mb-4">
                Automatically scans web pages, social media posts, and articles for misinformation as you browse.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Instant content analysis</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Source verification</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Credibility scoring</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-amber-500 rounded-lg flex items-center justify-center mb-4">
                <Eye className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Visual Indicators</h3>
              <p className="text-gray-600 mb-4">
                Clear visual cues and tooltips help you identify potentially misleading content at a glance.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Color-coded warnings</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Detailed explanations</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Alternative sources</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-8 rounded-xl">
              <div className="w-12 h-12 bg-blue-500 rounded-lg flex items-center justify-center mb-4">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Educational Prompts</h3>
              <p className="text-gray-600 mb-4">
                Learn as you browse with contextual tips and mini-lessons that build your digital literacy skills.
              </p>
              <ul className="space-y-2 text-sm text-gray-600">
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Interactive tutorials</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Fact-checking tips</span>
                </li>
                <li className="flex items-center space-x-2">
                  <CheckCircle className="h-4 w-4 text-green-500" />
                  <span>Earn KaDiWa Coins</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Installation Guide */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Easy Installation
            </h2>
            <p className="text-xl text-gray-600">
              Get protected in just 3 simple steps
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Click Install</h3>
              <p className="text-gray-600">
                Choose your browser and click the install button above
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-amber-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Grant Permissions</h3>
              <p className="text-gray-600">
                Allow KaDiWa to analyze web content for your protection
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Start Browsing</h3>
              <p className="text-gray-600">
                Browse with confidence knowing KaDiWa is protecting you
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              See It in Action
            </h2>
            <p className="text-xl text-gray-600">
              KaDiWa seamlessly integrates with your browsing experience
            </p>
          </div>

          <div className="bg-gray-100 rounded-xl p-8">
            <div className="bg-white rounded-lg shadow-lg p-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div className="bg-gray-200 rounded px-3 py-1 text-sm text-gray-600 flex-1 ml-4">
                  https://example-news-site.com/article
                </div>
              </div>
              <div className="border-2 border-amber-400 rounded-lg p-4 bg-amber-50">
                <div className="flex items-center space-x-2 mb-2">
                  <Shield className="h-5 w-5 text-amber-600" />
                  <span className="font-semibold text-amber-800">KaDiWa Alert</span>
                </div>
                <p className="text-amber-700 text-sm">
                  This article contains unverified claims. We found 2 potential issues with the sources cited.
                </p>
                <div className="mt-2 space-x-2">
                  <button className="bg-amber-600 text-white px-3 py-1 rounded text-sm hover:bg-amber-700">
                    Learn More
                  </button>
                  <button className="bg-white border border-amber-600 text-amber-600 px-3 py-1 rounded text-sm hover:bg-amber-50">
                    View Sources
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Your Privacy Matters
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              KaDiWa protects your data while protecting you from misinformation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Analyze content for misinformation patterns</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Verify sources and citations</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Provide educational context</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-green-500 mt-0.5" />
                  <span>Use encrypted, anonymous processing</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <h3 className="text-xl font-semibold text-gray-900 mb-4">What We Don't Do</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>Store your personal browsing history</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>Share your data with third parties</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>Track your online activity</span>
                </li>
                <li className="flex items-start space-x-2">
                  <CheckCircle className="h-5 w-5 text-red-500 mt-0.5" />
                  <span>Block content without explanation</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-900 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Browse Safely?
          </h2>
          <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
            Join millions of Filipinos who trust KaDiWa to keep them informed and protected online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-amber-500 text-blue-900 px-8 py-3 rounded-lg font-semibold hover:bg-amber-400 transition-colors inline-flex items-center space-x-2">
              <Chrome className="h-5 w-5" />
              <span>Add to Chrome</span>
            </button>
            <button className="bg-orange-500 text-white px-8 py-3 rounded-lg font-semibold hover:bg-orange-400 transition-colors inline-flex items-center space-x-2">
              <Firefox className="h-5 w-5" />
              <span>Add to Firefox</span>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Extension;