import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-cta text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-white rounded-md flex items-center justify-center">
                <span className="text-brand-orange font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold">SubRok</span>
            </div>
            <p className="text-white/80 text-sm leading-relaxed">
              Take control of your subscriptions with intelligent automation. 
              Save money, time, and never miss a cancellation again.
            </p>
            <div className="flex space-x-4 mt-6">
              {/* Social Icons */}
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-xs">f</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-xs">t</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-xs">in</span>
              </div>
              <div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors cursor-pointer">
                <span className="text-xs">ig</span>
              </div>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <div className="space-y-3 text-sm">
              <Link to="/features" className="block text-white/80 hover:text-white transition-colors">
                Features
              </Link>
              <Link to="/how-it-works" className="block text-white/80 hover:text-white transition-colors">
                How It Works
              </Link>
              <Link to="/pricing" className="block text-white/80 hover:text-white transition-colors">
                Pricing
              </Link>
              <Link to="/dashboard" className="block text-white/80 hover:text-white transition-colors">
                Dashboard
              </Link>
            </div>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <div className="space-y-3 text-sm">
              <Link to="/about" className="block text-white/80 hover:text-white transition-colors">
                About
              </Link>
              <Link to="/contact" className="block text-white/80 hover:text-white transition-colors">
                Contact
              </Link>
              <Link to="/privacy" className="block text-white/80 hover:text-white transition-colors">
                Privacy
              </Link>
              <Link to="/terms" className="block text-white/80 hover:text-white transition-colors">
                Terms
              </Link>
            </div>
          </div>

          {/* Support Links */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-3 text-sm">
              <Link to="/help" className="block text-white/80 hover:text-white transition-colors">
                Help Center
              </Link>
              <Link to="/faq" className="block text-white/80 hover:text-white transition-colors">
                FAQ
              </Link>
              <Link to="/guides" className="block text-white/80 hover:text-white transition-colors">
                Guides
              </Link>
              <Link to="/status" className="block text-white/80 hover:text-white transition-colors">
                Status
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/60">
              © 2024 SubRok. All rights reserved. Built with AI-powered automation.
            </p>
            <div className="flex space-x-6 text-sm text-white/60">
              <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
              <Link to="/terms" className="hover:text-white transition-colors">Terms of Service</Link>
              <Link to="/cookies" className="hover:text-white transition-colors">Cookies</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;