import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Header = () => {
  const location = useLocation();
  const isLoggedIn = localStorage.getItem('subrok_user');

  return (
    <header className="bg-white shadow-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-brand-orange rounded-md flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="text-xl font-bold text-brand-dark">SubRok</span>
            </div>
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <Link 
              to="/features" 
              className="text-muted-foreground hover:text-brand-dark transition-colors"
            >
              Features
            </Link>
            <Link 
              to="/how-it-works" 
              className="text-muted-foreground hover:text-brand-dark transition-colors"
            >
              How It Works
            </Link>
            {isLoggedIn && (
              <Link 
                to="/dashboard" 
                className="text-muted-foreground hover:text-brand-dark transition-colors"
              >
                Dashboard
              </Link>
            )}
            <Link 
              to="/pricing" 
              className="text-muted-foreground hover:text-brand-dark transition-colors"
            >
              Pricing
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="flex items-center space-x-4">
            {isLoggedIn ? (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button variant="ghost">Dashboard</Button>
                </Link>
                <Button 
                  variant="outline" 
                  onClick={() => {
                    localStorage.removeItem('subrok_user');
                    window.location.href = '/';
                  }}
                >
                  Logout
                </Button>
              </div>
            ) : (
              <Link to="/login">
                <Button variant="cta" size="lg">
                  Get Started
                </Button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;