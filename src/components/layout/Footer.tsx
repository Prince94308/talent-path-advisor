
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

export function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 pt-12 pb-8">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h3 className="text-base font-semibold text-blue-800 mb-4">PathFinder</h3>
            <p className="text-sm text-gray-600 mb-4">
              Empowering your career journey with AI-driven guidance and personalized path planning.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-blue-700" aria-label="Twitter">
                <Twitter size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700" aria-label="Facebook">
                <Facebook size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700" aria-label="Instagram">
                <Instagram size={18} />
              </a>
              <a href="#" className="text-gray-400 hover:text-blue-700" aria-label="LinkedIn">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Product</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">AI Career Assessment</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Career Path Planning</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Skill Gap Analysis</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Mentorship</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Company</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">About Us</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Careers</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Blog</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Contact</a></li>
            </ul>
          </div>

          <div className="col-span-1">
            <h3 className="text-sm font-semibold text-gray-900 mb-4">Resources</h3>
            <ul className="space-y-3">
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Documentation</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Help Center</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Privacy</a></li>
              <li><a href="#" className="text-sm text-gray-600 hover:text-blue-700">Terms</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-200 pt-6">
          <p className="text-sm text-gray-500 text-center">
            © {new Date().getFullYear()} PathFinder. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
