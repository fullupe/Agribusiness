import { Target, Eye, Award, Shield, Sparkles, Users, Handshake } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import ValueCard from "@/components/ValueCard";

const values = [
  {
    icon: Award,
    title: "Professionalism",
    description: "We maintain the highest standards of professional conduct in all our engagements.",
  },
  {
    icon: Shield, 
    title: "Integrity",
    description: "Honesty and transparency guide every decision and interaction with our stakeholders.",
  },
  {
    icon: Sparkles,
    title: "Quality",
    description: "We deliver excellence in every project, ensuring outcomes that exceed expectations.",
  },
  {
    icon: Target,
    title: "Accountability",
    description: "We take responsibility for our commitments and deliver on our promises.",
  },
  {
    icon: Sparkles,
    title: "Innovation",
    description: "We embrace new technologies and approaches to solve complex agricultural challenges.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description: "We build lasting relationships based on mutual respect and shared success.",
  },
];

const About = () => {
  return (
    <>
      <PageHero
        badge="About Us"
        title="Driving Agricultural Transformation in Ghana"
        description="Agribusiness and Research Consultancy Ltd is a leading Ghanaian firm dedicated to strengthening agricultural performance through innovative solutions and strategic partnerships."
      />

      {/* Company Description */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <SectionHeader
                badge="Who We Are"
                title="A Trusted Partner in Agribusiness Excellence"
              />
              <div className="space-y-4 text-muted-foreground leading-relaxed">
                <p>
                  Agribusiness and Research Consultancy Ltd (ARC Ltd) is a Ghana-based firm 
                  that strengthens agricultural performance through commercial farming, 
                  agribusiness development consultancy, research, project management, and 
                  climate-smart digital systems.
                </p>
                <p>
                  With over 15 years of combined experience in the agricultural sector, 
                  our team brings deep expertise in value chain development, farmer 
                  engagement, and data-driven decision making to help our clients achieve 
                  measurable outcomes.
                </p>
                <p>
                  We work with development partners, government agencies, private sector 
                  companies, and farmer organizations to design and implement programmes 
                  that drive sustainable agricultural growth across Ghana and West Africa.
                </p>
              </div>
            </div>
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <div className="space-y-8">
                {/* Vision */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                      <Eye className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">Our Vision</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    To be the leading agribusiness solutions provider in West Africa, 
                    recognized for delivering transformative outcomes that enhance 
                    food security and agricultural prosperity.
                  </p>
                </div>

                {/* Mission */}
                <div>
                  <div className="flex items-center gap-3 mb-3">
                    <div className="w-10 h-10 rounded-lg hero-gradient flex items-center justify-center">
                      <Target className="w-5 h-5 text-primary-foreground" />
                    </div>
                    <h3 className="font-display text-xl font-semibold text-foreground">Our Mission</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed pl-13">
                    To deliver innovative, research-driven agribusiness solutions that 
                    empower farmers, strengthen value chains, and create sustainable 
                    impact for our clients and communities.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Our Values"
            title="Principles That Guide Our Work"
            description="Our values reflect our commitment to excellence and our dedication to creating lasting positive impact in the agricultural sector."
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {values.map((value) => (
              <ValueCard key={value.title} {...value} />
            ))}
          </div>
        </div>
      </section>

      {/* Team Note */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
            <Users className="w-8 h-8 text-primary" />
          </div>
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Our Team
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Led by experienced professionals with deep roots in Ghana's agricultural sector, 
            our team combines technical expertise with practical field experience to deliver 
            results-oriented solutions.
          </p>
        </div>
      </section>
    </>
  );
};

export default About;
