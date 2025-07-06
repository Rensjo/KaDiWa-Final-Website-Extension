import React, { useState } from 'react';
import { BookOpen, Download, Video, Users, FileText, Globe, Search, Filter } from 'lucide-react';

const Resources = () => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const categories = [
    { id: 'all', label: 'All Resources', icon: Globe },
    { id: 'guides', label: 'Media Literacy Guides', icon: BookOpen },
    { id: 'teacher', label: 'Teacher Toolkit', icon: Users },
    { id: 'videos', label: 'Video Tutorials', icon: Video },
    { id: 'downloads', label: 'Downloads', icon: Download },
    { id: 'research', label: 'Research Papers', icon: FileText },
  ];

  const resources = [
    {
      id: 1,
      title: 'Complete Media Literacy Guide for Filipinos',
      category: 'guides',
      type: 'PDF Guide',
      description: 'A comprehensive guide covering all aspects of digital literacy, from basic concepts to advanced fact-checking techniques.',
      downloadCount: 45280,
      featured: true,
      tags: ['Beginner', 'Digital Literacy', 'Fact-Checking']
    },
    {
      id: 2,
      title: 'Teacher Toolkit: Combating Misinformation in the Classroom',
      category: 'teacher',
      type: 'Teaching Kit',
      description: 'Complete lesson plans, activities, and assessment tools for educators teaching digital literacy.',
      downloadCount: 12450,
      featured: true,
      tags: ['Education', 'Curriculum', 'Activities']
    },
    {
      id: 3,
      title: 'How to Spot Deepfakes: A Visual Guide',
      category: 'videos',
      type: 'Video Tutorial',
      description: 'Step-by-step video guide on identifying AI-generated content and manipulated media.',
      downloadCount: 28950,
      featured: false,
      tags: ['Deepfakes', 'AI', 'Visual Guide']
    },
    {
      id: 4,
      title: 'KaDiWa Extension User Manual',
      category: 'downloads',
      type: 'PDF Manual',
      description: 'Complete user guide for the KaDiWa browser extension with troubleshooting tips.',
      downloadCount: 67890,
      featured: false,
      tags: ['Extension', 'User Guide', 'Technical']
    },
    {
      id: 5,
      title: 'State of Misinformation in the Philippines 2024',
      category: 'research',
      type: 'Research Paper',
      description: 'Annual report on misinformation trends, patterns, and impact in the Philippines.',
      downloadCount: 8920,
      featured: true,
      tags: ['Research', 'Statistics', 'Trends']
    },
    {
      id: 6,
      title: 'Parent Guide: Protecting Children from Online Misinformation',
      category: 'guides',
      type: 'Parent Guide',
      description: 'Essential guide for parents on how to teach children critical thinking skills online.',
      downloadCount: 23450,
      featured: false,
      tags: ['Parents', 'Children', 'Safety']
    },
    {
      id: 7,
      title: 'Digital Citizenship Curriculum (Grades 7-12)',
      category: 'teacher',
      type: 'Curriculum',
      description: 'Comprehensive curriculum module for teaching digital citizenship and media literacy.',
      downloadCount: 15670,
      featured: false,
      tags: ['Curriculum', 'Digital Citizenship', 'High School']
    },
    {
      id: 8,
      title: 'Fact-Checking Tools and Techniques',
      category: 'videos',
      type: 'Video Series',
      description: 'Multi-part video series teaching professional fact-checking methods and tools.',
      downloadCount: 34560,
      featured: false,
      tags: ['Fact-Checking', 'Tools', 'Professional']
    }
  ];

  const filteredResources = resources.filter(resource => {
    const matchesCategory = activeCategory === 'all' || resource.category === activeCategory;
    const matchesSearch = resource.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         resource.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-green-600 to-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Educational Resources
            </h1>
            <p className="text-xl text-green-100 max-w-3xl mx-auto">
              Comprehensive tools and materials to build digital literacy skills across all ages
            </p>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search and Filter */}
        <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
          <div className="flex flex-col lg:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-5 w-5 text-gray-400" />
              <select 
                value={activeCategory}
                onChange={(e) => setActiveCategory(e.target.value)}
                className="px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              >
                {categories.map(category => (
                  <option key={category.id} value={category.id}>{category.label}</option>
                ))}
              </select>
            </div>
          </div>
        </div>

        {/* Category Tabs */}
        <div className="bg-white rounded-lg shadow-sm p-1 mb-8">
          <nav className="flex flex-wrap gap-1">
            {categories.map((category) => {
              const Icon = category.icon;
              return (
                <button
                  key={category.id}
                  onClick={() => setActiveCategory(category.id)}
                  className={`flex items-center space-x-2 px-4 py-2 rounded-lg font-medium transition-colors ${
                    activeCategory === category.id
                      ? 'bg-blue-600 text-white'
                      : 'text-gray-600 hover:text-blue-600 hover:bg-gray-50'
                  }`}
                >
                  <Icon className="h-4 w-4" />
                  <span>{category.label}</span>
                </button>
              );
            })}
          </nav>
        </div>

        {/* Featured Resources */}
        {activeCategory === 'all' && (
          <div className="mb-12">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Featured Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {resources.filter(r => r.featured).map((resource) => (
                <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4">
                    <div className="flex items-center justify-between">
                      <span className="bg-white bg-opacity-20 text-white px-2 py-1 rounded text-sm font-medium">
                        Featured
                      </span>
                      <span className="text-white text-sm">
                        {resource.downloadCount.toLocaleString()} downloads
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                    <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {resource.tags.map((tag, index) => (
                        <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                          {tag}
                        </span>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-gray-500">{resource.type}</span>
                      <button className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center space-x-2">
                        <Download className="h-4 w-4" />
                        <span>Download</span>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* All Resources */}
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-6">
            {activeCategory === 'all' ? 'All Resources' : categories.find(c => c.id === activeCategory)?.label}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredResources.map((resource) => (
              <div key={resource.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className="bg-gray-100 text-gray-800 px-2 py-1 rounded text-sm font-medium">
                      {resource.type}
                    </span>
                    <span className="text-gray-500 text-sm">
                      {resource.downloadCount.toLocaleString()} downloads
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{resource.title}</h3>
                  <p className="text-gray-600 text-sm mb-4">{resource.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {resource.tags.map((tag, index) => (
                      <span key={index} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-xs">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors flex items-center justify-center space-x-2">
                    <Download className="h-4 w-4" />
                    <span>Download</span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Empty State */}
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Search className="h-8 w-8 text-gray-400" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">No resources found</h3>
            <p className="text-gray-600">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Resources;