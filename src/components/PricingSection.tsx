import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const plans = [
    {
      name: "Starter",
      description: "Perfect for individuals getting started",
      monthlyPrice: 499,
      annualPrice: 4990,
      features: [
        "Up to 10 subscriptions",
        "Basic AI detection", 
        "Email alerts",
        "Monthly reports"
      ],
      popular: false
    },
    {
      name: "Pro",
      description: "Best for active subscription users",
      monthlyPrice: 999,
      annualPrice: 9990,
      features: [
        "Unlimited subscriptions",
        "Advanced AI automation",
        "Smart cancellation",
        "Real-time alerts",
        "Detailed analytics"
      ],
      popular: true
    },
    {
      name: "Family",
      description: "For families and small teams",
      monthlyPrice: 1999,
      annualPrice: 19990,
      features: [
        "Everything in Pro",
        "Up to 5 family members",
        "Shared family dashboard",
        "Parental controls",
        "Budget management",
        "Custom alerts"
      ],
      popular: false
    }
  ];

  const formatPrice = (price: number) => {
    return `₹${price.toLocaleString()}`;
  };

  return (
    <section className="py-20 bg-brand-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Choose Your Plan
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Start your free trial today. No credit card required.
          </p>

          {/* Billing Toggle */}
          <div className="flex items-center justify-center space-x-4 mb-12">
            <span className={`text-lg ${!isAnnual ? 'text-brand-dark font-semibold' : 'text-muted-foreground'}`}>
              Monthly
            </span>
            <Switch
              checked={isAnnual}
              onCheckedChange={setIsAnnual}
              className="data-[state=checked]:bg-brand-orange"
            />
            <span className={`text-lg ${isAnnual ? 'text-brand-dark font-semibold' : 'text-muted-foreground'}`}>
              Annual
            </span>
            {isAnnual && (
              <Badge className="bg-green-100 text-green-800 ml-2">
                Save 17%
              </Badge>
            )}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <Card 
              key={index} 
              className={`relative bg-white border-2 hover:shadow-2xl transition-all duration-300 ${
                plan.popular 
                  ? 'border-brand-orange shadow-xl scale-105' 
                  : 'border-gray-200 hover:border-brand-orange/50'
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-brand-orange text-white px-4 py-1 text-sm font-semibold">
                    Most Popular
                  </Badge>
                </div>
              )}

              <CardHeader className="text-center pb-4">
                <CardTitle className="text-2xl font-bold text-brand-dark">
                  {plan.name}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {plan.description}
                </CardDescription>
                
                <div className="pt-4">
                  <div className="text-4xl font-bold text-brand-dark">
                    {formatPrice(isAnnual ? plan.annualPrice : plan.monthlyPrice)}
                  </div>
                  <div className="text-muted-foreground">
                    /{isAnnual ? 'year' : 'month'}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <Link to="/login">
                  <Button 
                    variant={plan.popular ? "cta" : "cta-outline"} 
                    className="w-full" 
                    size="lg"
                  >
                    Start Free Trial
                  </Button>
                </Link>

                <div className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center space-x-3">
                      <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                      <span className="text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            All plans include a 14-day free trial. No credit card required.
          </p>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;