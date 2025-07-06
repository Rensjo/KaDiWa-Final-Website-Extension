import React from 'react';
import { Shield, Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-8 w-8 text-amber-400" />
              <span className="text-2xl font-bold">KaDiWa</span>
            </div>
            <p className="text-blue-100">
              Your shield against misinformation. Empowering digital literacy in the Philippines.
            </p>
            <div className="flex space-x-4">
              <Facebook className="h-6 w-6 text-blue-100 hover:text-white cursor-pointer" />
              <Twitter className="h-6 w-6 text-blue-100 hover:text-white cursor-pointer" />
              <Instagram className="h-6 w-6 text-blue-100 hover:text-white cursor-pointer" />
              <Youtube className="h-6 w-6 text-blue-100 hover:text-white cursor-pointer" />
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/about" className="text-blue-100 hover:text-white">About KaDiWa</a></li>
              <li><a href="/extension" className="text-blue-100 hover:text-white">Browser Extension</a></li>
              <li><a href="/dashboard" className="text-blue-100 hover:text-white">Learning Dashboard</a></li>
              <li><a href="/community" className="text-blue-100 hover:text-white">Community</a></li>
              <li><a href="/resources" className="text-blue-100 hover:text-white">Resources</a></li>
            </ul>
          </div>

          {/* Support */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Support</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-blue-100 hover:text-white">Help Center</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Report Content</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">Teacher Toolkit</a></li>
              <li><a href="/partnership" className="text-blue-100 hover:text-white">Partnerships</a></li>
              <li><a href="#" className="text-blue-100 hover:text-white">API Access</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-400">Contact</h3>
            <div className="space-y-2">
              <div className="flex items-center space-x-2">
                <Mail className="h-5 w-5 text-blue-100" />
                <span className="text-blue-100">info@kadiwa.ph</span>
              </div>
              <div className="flex items-center space-x-2">
                <Phone className="h-5 w-5 text-blue-100" />
                <span className="text-blue-100">+63 2 8123 4567</span>
              </div>
              <div className="flex items-center space-x-2">
                <MapPin className="h-5 w-5 text-blue-100" />
                <span className="text-blue-100">Quezon City, Philippines</span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-blue-800 mt-12 pt-8 text-center">
          <p className="text-blue-100">
            © 2024 KaDiWa. All rights reserved. | Aligned with UN SDG 4: Quality Education
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;