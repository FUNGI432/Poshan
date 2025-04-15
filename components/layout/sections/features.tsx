import { FileText, Search, Utensils, MessageSquare, Languages, Shield } from "lucide-react";

const features = [
  {
    title: "Medical Report Analysis",
    description: "Upload and get instant analysis of your medical reports with AI-powered insights.",
    icon: FileText,
  },
  {
    title: "Medicine Search",
    description: "Find detailed information about medications, their uses, and side effects.",
    icon: Search,
  },
  {
    title: "Nutrition Guide",
    description: "Get personalized nutrition recommendations and dietary plans.",
    icon: Utensils,
  },
  {
    title: "AI Assistant",
    description: "24/7 AI-powered healthcare assistant to answer your medical queries.",
    icon: MessageSquare,
  },
  {
    title: "Multi-language Support",
    description: "Access healthcare information in multiple regional languages.",
    icon: Languages,
  },
  {
    title: "Privacy & Security",
    description: "Your health data is protected with enterprise-grade security measures.",
    icon: Shield,
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-16 md:py-24 bg-muted/50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Comprehensive Healthcare Solutions
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need for better healthcare management, accessible from anywhere.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg bg-background border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center space-x-4 mb-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-semibold">{feature.title}</h3>
              </div>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 