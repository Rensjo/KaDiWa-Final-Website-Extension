import React from 'react';
import { BarChart, TrendingUp, Users, Shield, Globe, Target, Award, Calendar, ArrowUp, ArrowDown } from 'lucide-react';

const Impact = () => {
  const impactStats = [
    {
      metric: 'Misinformation Reduction',
      value: '60%',
      change: '+15%',
      trend: 'up',
      description: 'Reduction in misinformation sharing among active users',
      icon: Shield
    },
    {
      metric: 'Active Users',
      value: '2.5M+',
      change: '+35%',
      trend: 'up',
      description: 'Monthly active users across all platforms',
      icon: Users
    },
    {
      metric: 'Content Flagged',
      value: '15.2M+',
      change: '+42%',
      trend: 'up',
      description: 'Pieces of misinformation successfully identified',
      icon: Target
    },
    {
      metric: 'Schools Partnered',
      value: '15,847',
      change: '+28%',
      trend: 'up',
      description: 'Educational institutions using KaDiWa',
      icon: Globe
    }
  ];

  const yearlyData = [
    { year: '2021', users: 50000, contentFlagged: 1200000, accuracy: 78 },
    { year: '2022', users: 450000, contentFlagged: 4500000, accuracy: 82 },
    { year: '2023', users: 1200000, contentFlagged: 8900000, accuracy: 85 },
    { year: '2024', users: 2500000, contentFlagged: 15200000, accuracy: 88 }
  ];

  const regionalData = [
    { region: 'Metro Manila', users: 750000, schools: 4200, impact: 'High' },
    { region: 'Calabarzon', users: 420000, schools: 3150, impact: 'High' },
    { region: 'Central Luzon', users: 380000, schools: 2800, impact: 'Medium' },
    { region: 'Central Visayas', users: 290000, schools: 2100, impact: 'Medium' },
    { region: 'Western Visayas', users: 220000, schools: 1750, impact: 'Medium' },
    { region: 'Northern Mindanao', users: 180000, schools: 1400, impact: 'Growing' }
  ];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Impact & Analytics
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Measuring our progress in the fight against misinformation and the advancement of digital literacy in the Philippines
            </p>
          </div>
        </div>
      </section>

      {/* Key Metrics */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {impactStats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div key={index} className="bg-white rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow">
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                      <Icon className="h-6 w-6 text-blue-600" />
                    </div>
                    <div className={`flex items-center space-x-1 text-sm font-medium ${
                      stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {stat.trend === 'up' ? <ArrowUp className="h-4 w-4" /> : <ArrowDown className="h-4 w-4" />}
                      <span>{stat.change}</span>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-gray-900 mb-2">{stat.value}</div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-1">{stat.metric}</h3>
                  <p className="text-sm text-gray-600">{stat.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Yearly Progress */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Growth Over Time</h2>
            <p className="text-xl text-gray-600">Our journey from launch to becoming the Philippines' leading digital literacy platform</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">User Growth</h3>
              <div className="space-y-4">
                {yearlyData.map((data, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-white rounded-lg">
                    <div className="flex items-center space-x-3">
                      <div className="w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center">
                        <span className="text-blue-600 font-semibold">{data.year}</span>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900">{data.users.toLocaleString()} users</div>
                        <div className="text-sm text-gray-600">{data.accuracy}% accuracy rate</div>
                      </div>
                    </div>
                    <div className="text-right">
                      <div className="text-lg font-bold text-blue-600">{(data.contentFlagged / 1000000).toFixed(1)}M</div>
                      <div className="text-sm text-gray-600">content flagged</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-gray-50 rounded-xl p-6">
              <h3 className="text-xl font-semibold text-gray-900 mb-6">Milestone Achievements</h3>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center mt-1">
                    <Award className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">UNICEF Innovation Award</h4>
                    <p className="text-sm text-gray-600">2024 - Recognized for innovative approach to digital literacy</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                    <Globe className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">UN SDG Partnership</h4>
                    <p className="text-sm text-gray-600">2023 - Official partnership for SDG 4: Quality Education</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                    <Users className="h-4 w-4 text-purple-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">1 Million Users</h4>
                    <p className="text-sm text-gray-600">2023 - Reached our first million active users</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center mt-1">
                    <Target className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">DepEd Integration</h4>
                    <p className="text-sm text-gray-600">2022 - Officially integrated into public school curriculum</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Regional Impact */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Regional Impact</h2>
            <p className="text-xl text-gray-600">How KaDiWa is making a difference across the Philippines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regionalData.map((region, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-gray-900">{region.region}</h3>
                  <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                    region.impact === 'High' ? 'bg-green-100 text-green-800' :
                    region.impact === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                    'bg-blue-100 text-blue-800'
                  }`}>
                    {region.impact}
                  </span>
                </div>
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Active Users</span>
                    <span className="font-semibold text-gray-900">{region.users.toLocaleString()}</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-gray-600">Partner Schools</span>
                    <span className="font-semibold text-gray-900">{region.schools.toLocaleString()}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className={`h-2 rounded-full ${
                        region.impact === 'High' ? 'bg-green-500' :
                        region.impact === 'Medium' ? 'bg-yellow-500' :
                        'bg-blue-500'
                      }`}
                      style={{ width: `${Math.min((region.users / 750000) * 100, 100)}%` }}
                    ></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Real-World Impact</h2>
            <p className="text-xl text-gray-600">Stories of how KaDiWa is making a difference in people's lives</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Student success"
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h3 className="font-semibold text-gray-900">Student Empowerment</h3>
              </div>
              <p className="text-gray-700 text-sm italic">
                "College students at UP Diliman using KaDiWa reported 75% improvement in identifying fake news during the election period."
              </p>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-green-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Teacher impact"
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h3 className="font-semibold text-gray-900">Teacher Transformation</h3>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Teachers using KaDiWa toolkit report 90% of their students now fact-check information before sharing on social media."
              </p>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-xl p-6">
              <div className="text-center mb-4">
                <img 
                  src="https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop"
                  alt="Community impact"
                  className="w-16 h-16 rounded-full mx-auto mb-2"
                />
                <h3 className="font-semibold text-gray-900">Community Protection</h3>
              </div>
              <p className="text-gray-700 text-sm italic">
                "Rural communities using KaDiWa saw 65% reduction in health misinformation sharing during the pandemic."
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Future Goals */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">2025 Goals</h2>
            <p className="text-xl text-blue-100">Our roadmap for expanding digital literacy across the Philippines</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-blue-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">5M+</div>
              <div className="text-blue-100">Active Users</div>
            </div>
            <div className="bg-blue-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">25K+</div>
              <div className="text-blue-100">Partner Schools</div>
            </div>
            <div className="bg-blue-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">80%</div>
              <div className="text-blue-100">Misinformation Reduction</div>
            </div>
            <div className="bg-blue-800 rounded-xl p-6 text-center">
              <div className="text-3xl font-bold text-amber-400 mb-2">17</div>
              <div className="text-blue-100">Regions Covered</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Impact;