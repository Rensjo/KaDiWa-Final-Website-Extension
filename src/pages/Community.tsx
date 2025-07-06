import React, { useState } from 'react';
import { Trophy, Users, Flag, MessageCircle, Star, Award, TrendingUp, Coins } from 'lucide-react';

const Community = () => {
  const [activeTab, setActiveTab] = useState('leaderboard');

  const leaderboardData = [
    { rank: 1, name: 'Maria Santos', coins: 15420, level: 'Master Detective', avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { rank: 2, name: 'Juan dela Cruz', coins: 14230, level: 'Expert Analyzer', avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { rank: 3, name: 'Anna Reyes', coins: 13890, level: 'Expert Analyzer', avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { rank: 4, name: 'Carlos Mendoza', coins: 12560, level: 'Digital Detective', avatar: 'https://images.pexels.com/photos/1121796/pexels-photo-1121796.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
    { rank: 5, name: 'Isabel Garcia', coins: 11890, level: 'Digital Detective', avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop' },
  ];

  const achievements = [
    { title: 'First Fact-Check', description: 'Successfully identified your first piece of misinformation', icon: Flag, color: 'bg-green-500' },
    { title: 'Streak Master', description: 'Maintained a 30-day learning streak', icon: TrendingUp, color: 'bg-blue-500' },
    { title: 'Community Hero', description: 'Helped 100 people avoid misinformation', icon: Users, color: 'bg-purple-500' },
    { title: 'Citation Expert', description: 'Generated 50+ proper citations', icon: Award, color: 'bg-amber-500' },
  ];

  const communityStats = {
    totalMembers: '2.5M+',
    misinformationFlagged: '15.2M+',
    lessonsCompleted: '8.7M+',
    coinsEarned: '450M+'
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-purple-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              KaDiWa Community
            </h1>
            <p className="text-xl text-purple-100 max-w-3xl mx-auto">
              Join the movement of critical thinkers protecting the Philippines from misinformation
            </p>
          </div>
        </div>
      </section>

      {/* Community Stats */}
      <section className="py-12 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{communityStats.totalMembers}</div>
              <div className="text-gray-600">Community Members</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{communityStats.misinformationFlagged}</div>
              <div className="text-gray-600">Misinformation Flagged</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{communityStats.lessonsCompleted}</div>
              <div className="text-gray-600">Lessons Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-900 mb-2">{communityStats.coinsEarned}</div>
              <div className="text-gray-600">KaDiWa Coins Earned</div>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-1 mb-8">
          <nav className="flex space-x-1">
            {[
              { id: 'leaderboard', label: 'Leaderboard', icon: Trophy },
              { id: 'achievements', label: 'Achievements', icon: Award },
              { id: 'reports', label: 'Community Reports', icon: Flag },
              { id: 'testimonials', label: 'Success Stories', icon: MessageCircle },
            ].map((tab) => {
              const Icon = tab.icon;
              return (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeTab === tab.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-5 w-5" />
                  <span>{tab.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Tab Content */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {activeTab === 'leaderboard' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Trophy className="h-6 w-6 text-amber-500" />
                  <span>Community Leaderboard</span>
                </h2>
                <div className="space-y-4">
                  {leaderboardData.map((user, index) => (
                    <div key={index} className={`flex items-center space-x-4 p-4 rounded-lg ${
                      index < 3 ? 'bg-gradient-to-r from-amber-50 to-amber-100' : 'bg-gray-50'
                    }`}>
                      <div className={`w-8 h-8 rounded-full flex items-center justify-center font-bold ${
                        index === 0 ? 'bg-amber-500 text-white' :
                        index === 1 ? 'bg-gray-400 text-white' :
                        index === 2 ? 'bg-amber-600 text-white' : 'bg-gray-300 text-gray-700'
                      }`}>
                        {user.rank}
                      </div>
                      <img src={user.avatar} alt={user.name} className="w-12 h-12 rounded-full" />
                      <div className="flex-1">
                        <h3 className="font-semibold text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-600">{user.level}</p>
                      </div>
                      <div className="text-right">
                        <div className="flex items-center space-x-1 text-amber-600">
                          <Coins className="h-4 w-4" />
                          <span className="font-bold">{user.coins.toLocaleString()}</span>
                        </div>
                        <p className="text-sm text-gray-600">KaDiWa Coins</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'achievements' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Award className="h-6 w-6 text-purple-500" />
                  <span>Achievements & Badges</span>
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {achievements.map((achievement, index) => {
                    const Icon = achievement.icon;
                    return (
                      <div key={index} className="border rounded-lg p-6 hover:shadow-md transition-shadow">
                        <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${achievement.color}`}>
                          <Icon className="h-6 w-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-gray-900 mb-2">{achievement.title}</h3>
                        <p className="text-gray-600 text-sm">{achievement.description}</p>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {activeTab === 'reports' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <Flag className="h-6 w-6 text-red-500" />
                  <span>Community Reports</span>
                </h2>
                <div className="space-y-4">
                  {[
                    { title: 'Fake COVID-19 Cure Claims', reports: 1247, status: 'Verified False' },
                    { title: 'Manipulated Election Video', reports: 892, status: 'Under Review' },
                    { title: 'Misleading Health Statistics', reports: 634, status: 'Verified False' },
                    { title: 'False Celebrity Death News', reports: 567, status: 'Verified False' },
                  ].map((report, index) => (
                    <div key={index} className="border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-gray-900">{report.title}</h3>
                        <span className={`px-2 py-1 rounded text-xs font-medium ${
                          report.status === 'Verified False' ? 'bg-red-100 text-red-800' : 'bg-yellow-100 text-yellow-800'
                        }`}>
                          {report.status}
                        </span>
                      </div>
                      <p className="text-sm text-gray-600">{report.reports} community reports</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div className="bg-white rounded-xl shadow-lg p-6">
                <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
                  <MessageCircle className="h-6 w-6 text-green-500" />
                  <span>Success Stories</span>
                </h2>
                <div className="space-y-6">
                  {[
                    {
                      name: 'Rosa Martinez',
                      role: 'Senior Citizen, Baguio',
                      story: 'KaDiWa helped me avoid sharing fake health news that could have harmed my family. The extension is so easy to use!',
                      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
                    },
                    {
                      name: 'Miguel Santos',
                      role: 'College Student, UP Diliman',
                      story: 'As a journalism student, KaDiWa has become essential for my fact-checking workflow. It\'s like having a research assistant!',
                      avatar: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
                    },
                    {
                      name: 'Teacher Linda Cruz',
                      role: 'High School Teacher, Cebu',
                      story: 'I use KaDiWa to teach my students about media literacy. They love earning coins while learning critical thinking skills!',
                      avatar: 'https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop'
                    }
                  ].map((testimonial, index) => (
                    <div key={index} className="border rounded-lg p-6">
                      <div className="flex items-start space-x-4">
                        <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full" />
                        <div>
                          <div className="flex items-center space-x-2 mb-2">
                            <h3 className="font-semibold text-gray-900">{testimonial.name}</h3>
                            <div className="flex text-amber-400">
                              {[...Array(5)].map((_, i) => (
                                <Star key={i} className="h-4 w-4 fill-current" />
                              ))}
                            </div>
                          </div>
                          <p className="text-sm text-gray-600 mb-2">{testimonial.role}</p>
                          <p className="text-gray-700 italic">"{testimonial.story}"</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Your Rank */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Your Rank</h3>
              <div className="text-center">
                <div className="text-3xl font-bold text-blue-900 mb-2">#47</div>
                <div className="text-gray-600 mb-3">Digital Detective</div>
                <div className="flex items-center justify-center space-x-1 text-amber-600">
                  <Coins className="h-5 w-5" />
                  <span className="font-bold">1,250</span>
                </div>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Recent Activity</h3>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <Flag className="h-4 w-4 text-green-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Reported fake news</p>
                    <p className="text-xs text-gray-500">2 hours ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <Award className="h-4 w-4 text-blue-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Earned new badge</p>
                    <p className="text-xs text-gray-500">1 day ago</p>
                  </div>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-amber-100 rounded-full flex items-center justify-center">
                    <Coins className="h-4 w-4 text-amber-600" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-900">Earned 150 coins</p>
                    <p className="text-xs text-gray-500">2 days ago</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Quick Actions */}
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Quick Actions</h3>
              <div className="space-y-3">
                <button className="w-full bg-red-600 text-white py-2 rounded-lg hover:bg-red-700 transition-colors flex items-center justify-center space-x-2">
                  <Flag className="h-4 w-4" />
                  <span>Report Content</span>
                </button>
                <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                  <MessageCircle className="h-4 w-4" />
                  <span>Share Story</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Community;