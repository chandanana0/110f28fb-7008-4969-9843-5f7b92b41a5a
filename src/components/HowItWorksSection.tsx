import { Link2, Lightbulb, Bell, Zap } from "lucide-react";

const HowItWorksSection = () => {
  const steps = [
    {
      number: "1",
      icon: <Link2 className="w-8 h-8 text-brand-orange" />,
      title: "Connect Your Accounts",
      description: "Securely link your bank accounts, email, and SMS to let SubRok discover your subscriptions."
    },
    {
      number: "2", 
      icon: <Lightbulb className="w-8 h-8 text-brand-orange" />,
      title: "AI Detection",
      description: "Our intelligent system scans and identifies all your active subscriptions automatically."
    },
    {
      number: "3",
      icon: <Bell className="w-8 h-8 text-brand-orange" />,
      title: "Smart Monitoring", 
      description: "Get alerts before renewals and recommendations for subscriptions you rarely use."
    },
    {
      number: "4",
      icon: <Zap className="w-8 h-8 text-brand-orange" />,
      title: "Automated Cancellation",
      description: "Let our AI handle the cancellation process through forms, emails, or direct web automation."
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-orange-50 to-orange-100/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-brand-dark mb-4">
            How SubRok Works
          </h2>
          <p className="text-xl text-muted-foreground">
            Four simple steps to take complete control of your subscriptions
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 animate-fade-in">
          {steps.map((step, index) => (
            <div key={index} className="text-center group">
              {/* Step Circle */}
              <div className="relative mb-6">
                <div className="w-20 h-20 bg-white rounded-full shadow-lg flex items-center justify-center mx-auto mb-4 group-hover:shadow-xl transition-shadow duration-300">
                  {step.icon}
                </div>
                <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2">
                  <div className="w-8 h-8 bg-brand-orange text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {step.number}
                  </div>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-3">
                <h3 className="text-xl font-bold text-brand-dark">
                  {step.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>

              {/* Connecting Line (hidden on last item) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-full w-full h-0.5 bg-gray-300 transform -translate-y-1/2" 
                     style={{ width: 'calc(100% - 2.5rem)', left: 'calc(50% + 2.5rem)' }}>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-muted-foreground mb-8">
            Ready to get started? Join thousands of users saving money with intelligent subscription management.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;