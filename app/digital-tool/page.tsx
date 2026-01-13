// import { Link } from "react-router-dom";
import { ArrowRight, Cloud, Bell, BookOpen, BarChart3, Sprout, Users, Building2, Truck } from "lucide-react";
import { Button } from "@/components/ui/button";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import Link from "next/link";

const features = [
  {
    icon: Bell,
    title: "Climate Alerts & Forecasting",
    description: "Real-time weather alerts and seasonal forecasts to help farmers make informed planting and harvesting decisions.",
  },
  {
    icon: Sprout,
    title: "Agronomic Advisories",
    description: "Tailored crop management recommendations based on local conditions, crop type, and growth stage.",
  },
  {
    icon: BookOpen,
    title: "Digital Farmer Learning",
    description: "Interactive learning modules and video content accessible on mobile devices for continuous skill development.",
  },
  {
    icon: BarChart3,
    title: "Adoption Tracking & Dashboards",
    description: "Comprehensive analytics and reporting tools to monitor farmer engagement and programme impact.",
  },
];

const usageModels = [
  {
    icon: Sprout,
    title: "Farmer Productivity Programmes",
    description: "Equip smallholder farmers with climate-smart information to improve yields and reduce risk.",
  },
  {
    icon: Users,
    title: "Cooperative Strengthening",
    description: "Enable farmer cooperatives to coordinate activities and share resources effectively.",
  },
  {
    icon: Building2,
    title: "Outgrower Schemes",
    description: "Connect contract farmers with buyers through transparent, data-driven supply relationships.",
  },
  {
    icon: Truck,
    title: "Sourcing & Supply Models",
    description: "Streamline agricultural sourcing with farmer verification and production tracking.",
  },
];

const DigitalTool = () => {
  return (
    <>
      <PageHero
        badge="Digital Innovation"
        title="Climate-Smart Digital Agriculture Tool"
        description="Our advanced digital platform empowers farmers with real-time climate intelligence, agronomic guidance, and learning resources to build resilience and improve productivity."
      />

      {/* Features Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Platform Features"
            title="Powerful Tools for Agricultural Transformation"
            description="Our digital platform combines climate science, agronomic expertise, and mobile technology to deliver actionable insights directly to farmers."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div key={feature.title} className="card-elevated p-6 md:p-8">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-primary-foreground" />
                    </div>
                    <div>
                      <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                        {feature.title}
                      </h3>
                      <p className="text-muted-foreground leading-relaxed">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding hero-gradient">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="How It Works"
            title="Seamless Integration into Agricultural Programmes"
            description="Our platform is designed to integrate easily into existing agricultural initiatives, providing value at every stage of the farmer journey."
            centered
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              { step: "01", title: "Onboard", desc: "Register farmers and capture baseline data through simple mobile forms." },
              { step: "02", title: "Engage", desc: "Deliver targeted content, alerts, and advisories based on farmer profiles." },
              { step: "03", title: "Track", desc: "Monitor adoption, measure impact, and generate reports for stakeholders." },
            ].map((item) => (
              <div key={item.step} className="text-center">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-4">
                  <span className="font-display text-2xl font-bold text-accent">{item.step}</span>
                </div>
                <h4 className="font-display text-xl font-semibold text-primary-foreground mb-2">
                  {item.title}
                </h4>
                <p className="text-primary-foreground/70 text-sm">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Usage Models */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Applications"
            title="Flexible Deployment Models"
            description="Our platform adapts to diverse agricultural contexts and can be customized to meet the specific needs of your programme."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {usageModels.map((model) => {
              const Icon = model.icon;
              return (
                <div key={model.title} className="flex items-start gap-4 p-6 rounded-xl bg-muted hover:bg-muted/80 transition-colors">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-foreground mb-1">
                      {model.title}
                    </h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {model.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sponsorship Note */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent/10 mb-6">
            <Cloud className="w-8 h-8 text-accent" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Partner With Us
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Development partners can sponsor the deployment of our digital tool to reach more farmers 
            and amplify the impact of agricultural programmes across Ghana and West Africa.
          </p>
          <Button asChild size="lg" className="btn-accent rounded-full px-8">
            <Link href="/contact">
              Discuss Partnership
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
};

export default DigitalTool;
