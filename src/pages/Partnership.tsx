import React, { useState } from 'react';
import { Building, School, Users, Globe, CheckCircle, ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

const Partnership = () => {
  const [selectedPartnerType, setSelectedPartnerType] = useState('government');

  const partnerTypes = {
    government: {
      title: 'Government & LGUs',
      description: 'Partner with us to implement digital literacy programs at the local and national level',
      icon: Building,
      benefits: [
        'Customized digital literacy curriculum',
        'API integration for government platforms',
        'Training programs for public servants',
        'Real-time misinformation monitoring',
        'Policy consultation and research support'
      ],
      examples: [
        'DepEd Partnership Program',
        'DILG Digital Literacy Initiative',
        'DOST Innovation Grant Program',
        'Local Government Unit Training'
      ]
    },
    education: {
      title: 'Schools & Universities',
      description: 'Integrate KaDiWa into your educational curriculum and empower students with critical thinking skills',
      icon: School,
      benefits: [
        'Age-appropriate learning modules',
        'Teacher training and certification',
        'Student progress tracking',
        'Classroom management tools',
        'Educational resource library'
      ],
      examples: [
        'UP Diliman Media Literacy Program',
        'Ateneo Digital Citizenship Initiative',
        'Public High School Integration',
        'Private School Partnership Program'
      ]
    },
    organizations: {
      title: 'NGOs & Civil Society',
      description: 'Collaborate with us to reach underserved communities and promote digital literacy',
      icon: Users,
      benefits: [
        'Community outreach programs',
        'Grassroots education initiatives',
        'Volunteer training programs',
        'Impact measurement tools',
        'Grant application support'
      ],
      examples: [
        'UNICEF Philippines Partnership',
        'UNESCO Media Literacy Initiative',
        'Local Community Groups',
        'International NGO Collaboration'
      ]
    },
    enterprise: {
      title: 'Enterprise & Media',
      description: 'Corporate partnerships for responsible technology and media literacy initiatives',
      icon: Globe,
      benefits: [
        'Corporate social responsibility programs',
        'Employee digital literacy training',
        'Brand safety and reputation management',
        'Media partnership opportunities',
        'Technology integration support'
      ],
      examples: [
        'Facebook Philippines Partnership',
        'Google for Education Initiative',
        'Media Companies Collaboration',
        'Technology Firms Integration'
      ]
    }
  };

  const [formData, setFormData] = useState({
    organizationType: '',
    organizationName: '',
    contactName: '',
    email: '',
    phone: '',
    partnershipType: '',
    message: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    alert('Thank you for your interest! We will contact you within 24 hours.');
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Header */}
      <section className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Partnership Opportunities
            </h1>
            <p className="text-xl text-indigo-100 max-w-3xl mx-auto">
              Join us in building a more informed Philippines. Partner with KaDiWa to expand digital literacy across institutions and communities.
            </p>
          </div>
        </div>
      </section>

      {/* Partnership Types */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Partnership Types</h2>
            <p className="text-xl text-gray-600">Choose the partnership model that best fits your organization</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {Object.entries(partnerTypes).map(([key, partner]) => {
              const Icon = partner.icon;
              return (
                <button
                  key={key}
                  onClick={() => setSelectedPartnerType(key)}
                  className={`p-6 rounded-xl border-2 transition-all text-left ${
                    selectedPartnerType === key
                      ? 'border-blue-500 bg-blue-50 shadow-lg'
                      : 'border-gray-200 bg-white hover:border-gray-300 hover:shadow-md'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-lg flex items-center justify-center mb-4 ${
                    selectedPartnerType === key ? 'bg-blue-600' : 'bg-gray-100'
                  }`}>
                    <Icon className={`h-6 w-6 ${selectedPartnerType === key ? 'text-white' : 'text-gray-600'}`} />
                  </div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">{partner.title}</h3>
                  <p className="text-sm text-gray-600">{partner.description}</p>
                </button>
              );
            })}
          </div>

          {/* Selected Partner Details */}
          <div className="bg-white rounded-xl shadow-lg p-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  {partnerTypes[selectedPartnerType].title}
                </h3>
                <p className="text-gray-600 mb-6">{partnerTypes[selectedPartnerType].description}</p>
                
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Partnership Benefits</h4>
                <ul className="space-y-3">
                  {partnerTypes[selectedPartnerType].benefits.map((benefit, index) => (
                    <li key={index} className="flex items-start space-x-3">
                      <CheckCircle className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-700">{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="text-lg font-semibold text-gray-900 mb-4">Success Stories</h4>
                <div className="space-y-4">
                  {partnerTypes[selectedPartnerType].examples.map((example, index) => (
                    <div key={index} className="bg-gray-50 p-4 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                          <ArrowRight className="h-4 w-4 text-blue-600" />
                        </div>
                        <span className="font-medium text-gray-900">{example}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Start Your Partnership</h2>
            <p className="text-xl text-gray-600">Fill out the form below and we'll get back to you within 24 hours</p>
          </div>

          <form onSubmit={handleSubmit} className="bg-gray-50 rounded-xl p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Type *
                </label>
                <select
                  name="organizationType"
                  value={formData.organizationType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select organization type</option>
                  <option value="government">Government Agency</option>
                  <option value="lgu">Local Government Unit</option>
                  <option value="school">School/University</option>
                  <option value="ngo">NGO/Civil Society</option>
                  <option value="enterprise">Enterprise/Corporation</option>
                  <option value="media">Media Organization</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Organization Name *
                </label>
                <input
                  type="text"
                  name="organizationName"
                  value={formData.organizationName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Contact Person *
                </label>
                <input
                  type="text"
                  name="contactName"
                  value={formData.contactName}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Partnership Type *
                </label>
                <select
                  name="partnershipType"
                  value={formData.partnershipType}
                  onChange={handleInputChange}
                  required
                  className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="">Select partnership type</option>
                  <option value="pilot">Pilot Program</option>
                  <option value="full">Full Implementation</option>
                  <option value="training">Training & Capacity Building</option>
                  <option value="api">API Integration</option>
                  <option value="research">Research Collaboration</option>
                  <option value="funding">Funding Partnership</option>
                </select>
              </div>
            </div>

            <div className="mt-6">
              <label className="block text-sm font-medium text-gray-700 mb-2">
                Message
              </label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleInputChange}
                rows={4}
                placeholder="Tell us about your organization and partnership goals..."
                className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>

            <div className="mt-8 text-center">
              <button
                type="submit"
                className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors inline-flex items-center space-x-2"
              >
                <span>Submit Partnership Request</span>
                <ArrowRight className="h-5 w-5" />
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Get in Touch</h2>
            <p className="text-xl text-blue-100">
              Ready to partner with us? Contact our partnerships team directly
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Email Us</h3>
              <p className="text-blue-100">partnerships@kadiwa.ph</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Call Us</h3>
              <p className="text-blue-100">+63 2 8123 4567</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-700 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
              <p className="text-blue-100">Quezon City, Philippines</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Partnership;