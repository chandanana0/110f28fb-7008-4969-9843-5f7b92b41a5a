import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Brain, 
  Bell, 
  Zap, 
  DollarSign, 
  Shield, 
  TrendingUp 
} from "lucide-react";

const FeaturesSection = () => {
  const features = [
    {
      icon: <Brain className="w-8 h-8 text-brand-orange" />,
      title: "Smart Detection",
      description: "Automatically identifies subscriptions from bank transactions, emails, and SMS messages using advanced AI.",
      link: "Learn more →"
    },
    {
      icon: <Bell className="w-8 h-8 text-brand-orange" />,
      title: "Renewal Alerts",
      description: "Get notified before your subscriptions renew so you can make informed decisions about keeping or canceling.",
      link: "Learn more →"
    },
    {
      icon: <Zap className="w-8 h-8 text-brand-orange" />,
      title: "AI-Powered Cancellation",
      description: "Our AI handles the cancellation process by filling forms, sending emails, and even navigating websites for you.",
      link: "Learn more →"
    },
    {
      icon: <DollarSign className="w-8 h-8 text-brand-orange" />,
      title: "Expense Tracking",
      description: "Track your subscription spending patterns and get insights on where your money goes each month.",
      link: "Learn more →"
    },
    {
      icon: <Shield className="w-8 h-8 text-brand-orange" />,
      title: "Bank-Level Security",
      description: "Your financial data is protected with enterprise-grade encryption and security protocols.",
      link: "Learn more →"
    },
    {
      icon: <TrendingUp className="w-8 h-8 text-brand-orange" />,
      title: "Instant Automation",
      description: "Set up once and let SubRok work automatically in the background, saving you time and money.",
      link: "Learn more →"
    }
  ];

  return (
    <section className="py-20 bg-brand-cream-light">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            Powerful Features for Smart Subscription Management
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            SubRok combines advanced AI with intuitive design to give you complete control over your subscriptions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white border-0 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="pb-4">
                <div className="mb-4">
                  {feature.icon}
                </div>
                <CardTitle className="text-xl font-bold text-brand-dark">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-muted-foreground mb-4 text-base">
                  {feature.description}
                </CardDescription>
                <Button variant="link" className="text-brand-orange p-0 font-medium">
                  {feature.link}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;