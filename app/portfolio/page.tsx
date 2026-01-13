import { Briefcase, BarChart3, ClipboardCheck, Settings, Cloud, Users } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const portfolioAreas = [
  {
    icon: Briefcase,
    title: "Agribusiness Investment & Feasibility",
    description: "Comprehensive feasibility studies, investment analysis, and business planning for agricultural ventures across Ghana.",
    highlights: ["Market opportunity analysis", "Financial projections", "Risk assessment", "Implementation roadmaps"],
  },
  {
    icon: BarChart3,
    title: "Surveys & Market/Value Chain Research",
    description: "Rigorous research methodologies delivering insights into market dynamics, value chain opportunities, and farmer behavior.",
    highlights: ["Baseline & endline surveys", "Value chain mapping", "Market price analysis", "Consumer studies"],
  },
  {
    icon: ClipboardCheck,
    title: "Monitoring & Evaluation",
    description: "Robust M&E frameworks and implementation to track programme performance and demonstrate impact.",
    highlights: ["Theory of change development", "Indicator frameworks", "Data collection systems", "Impact reporting"],
  },
  {
    icon: Settings,
    title: "Implementation & Coordination",
    description: "End-to-end programme management ensuring effective delivery of agricultural development initiatives.",
    highlights: ["Programme design", "Stakeholder coordination", "Field operations", "Quality assurance"],
  },
  {
    icon: Cloud,
    title: "Digital Tool Deployment",
    description: "Implementation of our climate-smart digital agriculture platform tailored to specific programme needs.",
    highlights: ["Platform customization", "Farmer onboarding", "Content development", "Analytics setup"],
  },
  {
    icon: Users,
    title: "Cooperative & Aggregation Support",
    description: "Strengthening farmer organizations through governance support, capacity building, and market linkages.",
    highlights: ["Governance structures", "Financial management", "Market access", "Collective bargaining"],
  },
];

const Portfolio = () => {
  return (
    <>
      <PageHero
        badge="Our Portfolio"
        title="Proven Expertise Across Agricultural Development"
        description="Explore our core competencies and the areas where we've delivered impactful results for our clients and partners."
      />

      {/* Portfolio Areas */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Core Competencies"
            title="Areas of Excellence"
            description="Our portfolio reflects years of hands-on experience across the agricultural value chain, delivering solutions that create lasting impact."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {portfolioAreas.map((area) => {
              const Icon = area.icon;
              return (
                <div key={area.title} className="card-elevated p-6 md:p-8 h-full flex flex-col">
                  <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-5">
                    <Icon className="w-6 h-6 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-xl font-semibold text-foreground mb-3">
                    {area.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">
                    {area.description}
                  </p>
                  <div className="mt-auto pt-4 border-t border-border">
                    <div className="flex flex-wrap gap-2">
                      {area.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="inline-block px-2 py-1 text-xs font-medium rounded-md bg-primary/10 text-primary"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Sectors */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Sectors"
            title="Industries We Serve"
            centered
          />

          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {[
              "Food Crops",
              "Cash Crops",
              "Horticulture",
              "Poultry",
              "Livestock",
              "Aquaculture",
              "Agro-processing",
              "Input Supply",
              "Agricultural Finance",
              "Climate Resilience",
            ].map((sector) => (
              <span
                key={sector}
                className="px-4 py-2 rounded-full bg-background border border-border text-sm font-medium text-foreground hover:bg-primary hover:text-primary-foreground hover:border-primary transition-colors cursor-default"
              >
                {sector}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Client Types */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Our Clients"
            title="Who We Work With"
            centered
          />

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { title: "Development Partners", desc: "NGOs & Foundations" },
              { title: "Government Agencies", desc: "Ministries & Departments" },
              { title: "Private Sector", desc: "Agribusinesses & Corporates" },
              { title: "Farmer Organizations", desc: "Cooperatives & Associations" },
            ].map((client) => (
              <div key={client.title} className="text-center p-6 rounded-xl bg-muted">
                <div className="font-display font-semibold text-foreground mb-1">
                  {client.title}
                </div>
                <div className="text-sm text-muted-foreground">{client.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Portfolio;
