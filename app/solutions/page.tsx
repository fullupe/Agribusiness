import { Tractor, ClipboardList, BarChart3, FolderKanban } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const solutionCategories = [
  {
    icon: Tractor,
    title: "Farming Operations",
    description: "End-to-end agricultural production services that maximize yield and quality through modern practices.",
    items: [
      "Commercial crop production at scale",
      "Demonstration farms for technology showcase",
      "Postharvest handling and storage support",
      "Productivity planning and optimization",
    ],
  },
  {
    icon: ClipboardList,
    title: "Agribusiness Development Consultancy",
    description: "Strategic advisory services to build competitive, sustainable agricultural enterprises.",
    items: [
      "Feasibility studies and business plans",
      "Market entry and growth strategies",
      "Cooperative and aggregation models",
      "Investment readiness support",
    ],
  },
  {
    icon: BarChart3,
    title: "Research & Studies",
    description: "Rigorous research methodologies delivering actionable insights for evidence-based decisions.",
    items: [
      "Baseline, midline, and endline surveys",
      "Market and value chain studies",
      "Farmer profiling and segmentation",
      "Qualitative research and reporting",
    ],
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "Comprehensive programme delivery ensuring objectives are met on time and within budget.",
    items: [
      "Programme design and planning",
      "Implementation supervision",
      "Stakeholder engagement and coordination",
      "Training delivery and adoption support",
    ],
  },
];

const Solutions = () => {
  return (
    <>
      <PageHero
        badge="Our Solutions"
        title="Integrated Agribusiness Services"
        description="We offer a comprehensive suite of services designed to address the full spectrum of agricultural development needs, from farm-level operations to strategic consultancy."
      />

      {/* Solutions Grid */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="space-y-16">
            {solutionCategories.map((category, index) => {
              const Icon = category.icon;
              const isEven = index % 2 === 0;
              
              return (
                <div
                  key={category.title}
                  className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center ${
                    !isEven ? "lg:flex-row-reverse" : ""
                  }`}
                >
                  <div className={!isEven ? "lg:order-2" : ""}>
                    <div className="inline-flex items-center gap-3 mb-4">
                      <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center">
                        <Icon className="w-6 h-6 text-primary-foreground" />
                      </div>
                      <span className="text-sm font-medium text-primary">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {category.description}
                    </p>
                    <ul className="space-y-3">
                      {category.items.map((item) => (
                        <li key={item} className="flex items-start gap-3">
                          <span className="w-2 h-2 rounded-full bg-accent mt-2 flex-shrink-0" />
                          <span className="text-foreground">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className={`${!isEven ? "lg:order-1" : ""}`}>
                    <div className="aspect-[4/3] rounded-2xl bg-muted flex items-center justify-center">
                      <Icon className="w-24 h-24 text-primary/20" />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Why Choose ARC Ltd"
            title="The ARC Ltd Advantage"
            centered
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-muted-foreground">Years of Combined Experience</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-primary mb-2">Local</div>
              <div className="text-muted-foreground">Deep Ghana Market Knowledge</div>
            </div>
            <div className="text-center">
              <div className="font-display text-4xl font-bold text-primary mb-2">Global</div>
              <div className="text-muted-foreground">International Best Practices</div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Solutions;
