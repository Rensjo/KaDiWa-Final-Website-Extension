import React, { useState } from 'react';
import { User, Book, Trophy, Coins, Target, CheckCircle, Play, Lock } from 'lucide-react';

const Dashboard = () => {
  const [selectedAgeGroup, setSelectedAgeGroup] = useState('teens');

  const ageGroups = {
    kids: {
      title: 'Kids (7-12)',
      color: 'bg-green-500',
      lessons: [
        { title: 'What is the Internet?', completed: true, coins: 50 },
        { title: 'Safe vs Unsafe Websites', completed: true, coins: 75 },
        { title: 'Asking Adults for Help', completed: false, coins: 100 },
        { title: 'Fun Facts vs Fake Facts', completed: false, coins: 125 },
      ]
    },
    teens: {
      title: 'Teens (13-17)',
      color: 'bg-blue-500',
      lessons: [
        { title: 'Social Media Fact-Checking', completed: true, coins: 100 },
        { title: 'Identifying Deepfakes', completed: true, coins: 150 },
        { title: 'Source Verification', completed: false, coins: 200 },
        { title: 'Digital Footprint Awareness', completed: false, coins: 175 },
      ]
    },
    adults: {
      title: 'Adults (18-59)',
      color: 'bg-purple-500',
      lessons: [
        { title: 'Advanced Fact-Checking Techniques', completed: true, coins: 200 },
        { title: 'Political Misinformation Detection', completed: false, coins: 250 },
        { title: 'Health Misinformation Awareness', completed: false, coins: 300 },
        { title: 'Teaching Digital Literacy', completed: false, coins: 275 },
      ]
    },
    seniors: {
      title: 'Seniors (60+)',
      color: 'bg-amber-500',
      lessons: [
        { title: 'Internet Safety Basics', completed: true, coins: 100 },
        { title: 'Common Online Scams', completed: false, coins: 150 },
        { title: 'Verifying Health Information', completed: false, coins: 200 },
        { title: 'Safe Social Media Use', completed: false, coins: 175 },
      ]
    }
  };

  const userStats = {
    level: 12,
    coins: 1250,
    streak: 7,
    completedLessons: 15,
    totalLessons: 48,
    rank: 'Digital Detective'
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center">
                <User className="h-6 w-6 text-blue-900" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Learning Dashboard</h1>
                <p className="text-gray-600">Welcome back, Digital Detective!</p>
              </div>
            </div>
            <div className="flex items-center space-x-6">
              <div className="text-center">
                <div className="flex items-center space-x-1 text-amber-600">
                  <Coins className="h-5 w-5" />
                  <span className="font-bold text-lg">{userStats.coins}</span>
                </div>
                <p className="text-xs text-gray-500">KaDiWa Coins</p>
              </div>
              <div className="text-center">
                <div className="flex items-center space-x-1 text-blue-600">
                  <Trophy className="h-5 w-5" />
                  <span className="font-bold text-lg">{userStats.level}</span>
                </div>
                <p className="text-xs text-gray-500">Level</p>
              </div>
              <div className="text-center">
                <div className="text-green-600 font-bold text-lg">{userStats.streak}</div>
                <p className="text-xs text-gray-500">Day Streak</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Age Group Selection */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Choose Your Path</h2>
              <div className="space-y-3">
                {Object.entries(ageGroups).map(([key, group]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedAgeGroup(key)}
                    className={`w-full text-left p-4 rounded-lg border-2 transition-all ${
                      selectedAgeGroup === key
                        ? 'border-blue-500 bg-blue-50'
                        : 'border-gray-200 hover:border-gray-300'
                    }`}
                  >
                    <div className="flex items-center space-x-3">
                      <div className={`w-3 h-3 rounded-full ${group.color}`}></div>
                      <span className="font-medium text-gray-900">{group.title}</span>
                    </div>
                  </button>
                ))}
              </div>
            </div>

            {/* Progress Overview */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Progress Overview</h2>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between text-sm mb-1">
                    <span className="text-gray-600">Lessons Completed</span>
                    <span className="text-gray-900">{userStats.completedLessons}/{userStats.totalLessons}</span>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div 
                      className="bg-blue-600 h-2 rounded-full"
                      style={{ width: `${(userStats.completedLessons / userStats.totalLessons) * 100}%` }}
                    ></div>
                  </div>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-900">{userStats.rank}</div>
                  <p className="text-sm text-gray-600">Current Rank</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lessons */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl shadow-lg p-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-6">
                {ageGroups[selectedAgeGroup].title} Lessons
              </h2>
              <div className="space-y-4">
                {ageGroups[selectedAgeGroup].lessons.map((lesson, index) => (
                  <div key={index} className="border rounded-lg p-4 hover:shadow-md transition-shadow">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-3">
                        <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                          lesson.completed 
                            ? 'bg-green-100 text-green-600' 
                            : 'bg-gray-100 text-gray-400'
                        }`}>
                          {lesson.completed ? <CheckCircle className="h-5 w-5" /> : <Lock className="h-5 w-5" />}
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900">{lesson.title}</h3>
                          <div className="flex items-center space-x-2 text-sm text-gray-500">
                            <Coins className="h-4 w-4 text-amber-500" />
                            <span>{lesson.coins} coins</span>
                          </div>
                        </div>
                      </div>
                      <button className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                        lesson.completed
                          ? 'bg-green-100 text-green-700 hover:bg-green-200'
                          : 'bg-blue-600 text-white hover:bg-blue-700'
                      }`}>
                        {lesson.completed ? 'Review' : 'Start'}
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Quick Tools */}
            <div className="bg-white rounded-xl shadow-lg p-6 mt-6">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Quick Tools</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-red-50 p-4 rounded-lg text-center">
                  <Target className="h-8 w-8 text-red-500 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900">Fake News Detector</h3>
                  <p className="text-sm text-gray-600 mt-1">Check if content is reliable</p>
                </div>
                <div className="bg-purple-50 p-4 rounded-lg text-center">
                  <Play className="h-8 w-8 text-purple-500 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900">Deepfake Analyzer</h3>
                  <p className="text-sm text-gray-600 mt-1">Detect manipulated videos</p>
                </div>
                <div className="bg-blue-50 p-4 rounded-lg text-center">
                  <Book className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <h3 className="font-medium text-gray-900">Citation Helper</h3>
                  <p className="text-sm text-gray-600 mt-1">Create proper citations</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;