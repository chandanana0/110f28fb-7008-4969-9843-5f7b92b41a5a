import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Link } from "react-router-dom";

const CTASection = () => {
  const [email, setEmail] = useState("");

  const handleEmailSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Store email and redirect to login
    localStorage.setItem('signup_email', email);
    window.location.href = '/login';
  };

  return (
    <section className="bg-gradient-cta py-20 text-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="space-y-8">
          <h2 className="text-4xl md:text-5xl font-bold">
            Ready to Take Control?
          </h2>
          
          <p className="text-xl opacity-90 max-w-2xl mx-auto">
            Join thousands of users who are saving money with SubRok's intelligent subscription management
          </p>

          <form onSubmit={handleEmailSubmit} className="max-w-md mx-auto">
            <div className="flex flex-col sm:flex-row gap-4">
              <Input
                type="email"
                placeholder="Enter your email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="flex-1 bg-white/20 border-white/30 text-white placeholder-white/70 focus:bg-white/30"
                required
              />
              <Button 
                type="submit" 
                variant="cta-white" 
                size="lg"
                className="px-8"
              >
                Start Free Trial
              </Button>
            </div>
          </form>

          <div className="text-sm opacity-75 space-x-4">
            <span>No credit card required</span>
            <span>•</span>
            <span>14-day free trial</span>
            <span>•</span>
            <span>Cancel anytime</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;