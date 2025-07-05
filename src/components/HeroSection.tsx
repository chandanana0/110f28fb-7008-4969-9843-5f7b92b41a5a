import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const HeroSection = () => {
  return (
    <section className="bg-brand-cream min-h-screen flex items-center">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-6xl font-bold text-brand-dark leading-tight">
                Take Control of Your{" "}
                <span className="text-brand-orange">Subscriptions</span>
              </h1>
              
              <p className="text-xl text-muted-foreground leading-relaxed max-w-lg">
                SubRok is your intelligent subscription manager that automatically 
                tracks, monitors, and helps cancel unwanted subscriptions using AI-powered automation.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/login">
                <Button variant="cta" size="xl" className="text-lg px-8 py-4">
                  Start Free Trial
                </Button>
              </Link>
              <Button variant="cta-outline" size="xl" className="text-lg px-8 py-4">
                Watch Demo
              </Button>
            </div>

            <div className="flex items-center space-x-8 text-sm text-muted-foreground">
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>No credit card required</span>
              </div>
              <div className="flex items-center space-x-2">
                <svg className="w-5 h-5 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
                <span>14-day free trial</span>
              </div>
            </div>
          </div>

          {/* Right Content - Subscription Cards */}
          <div className="space-y-4 animate-slide-up">
            <div className="bg-white rounded-2xl p-6 shadow-lg">
              <h3 className="text-lg font-semibold text-brand-dark mb-4">Your Subscriptions</h3>
              
              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-500 rounded-lg flex items-center justify-center text-white font-bold">
                      N
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">Netflix</div>
                      <Badge className="bg-green-100 text-green-800 text-xs">Active</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-brand-dark">₹15.99</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-green-500 rounded-lg flex items-center justify-center text-white font-bold">
                      S
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">Spotify</div>
                      <Badge className="bg-yellow-100 text-yellow-800 text-xs">Renewing Soon</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-brand-dark">₹9.99</div>
                  </div>
                </div>

                <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center text-white font-bold">
                      A
                    </div>
                    <div>
                      <div className="font-medium text-brand-dark">Adobe Creative</div>
                      <Badge className="bg-red-100 text-red-800 text-xs">Cancel Pending</Badge>
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="font-semibold text-brand-dark">₹52.99</div>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <span className="text-sm text-muted-foreground">Total Monthly Spend</span>
                  <span className="text-2xl font-bold text-brand-orange">₹78.97</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;