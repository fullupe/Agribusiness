import { Handshake, Layers, BookOpen, Eye } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";

const partnerAreas = [
  {
    icon: Layers,
    title: "Soil Intelligence",
    description: "Leveraging advanced soil analysis and mapping technologies to provide precision agriculture recommendations tailored to local conditions.",
  },
  {
    icon: BookOpen,
    title: "Digital Learning Pathways",
    description: "Structured farmer education modules delivered through mobile platforms, combining visual content with interactive assessments.",
  },
  {
    icon: Eye,
    title: "Programme Transparency",
    description: "Real-time monitoring and reporting systems that provide visibility into programme activities and outcomes for all stakeholders.",
  },
];

const Partnerships = () => {
  return (
    <>
      <PageHero
        badge="Strategic Partnerships"
        title="Collaborating for Greater Impact"
        description="We believe in the power of partnerships to amplify impact. Our strategic alliances bring together complementary expertise to deliver comprehensive solutions."
      />

      {/* eKutir Partnership */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-accent/10 text-accent mb-4">
                Strategic Partner
              </span>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                eKutir Partnership
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6">
                eKutir is a global social enterprise and technology company that builds inclusive 
                agricultural ecosystems. Their expertise in digital agriculture solutions complements 
                our deep understanding of the Ghanaian agricultural landscape.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                Together, we combine eKutir's cutting-edge technology platforms with GM Green Ltd's 
                local expertise to deliver solutions that are both innovative and contextually 
                appropriate for Ghanaian farmers and agribusinesses.
              </p>
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full hero-gradient flex items-center justify-center">
                  <Handshake className="w-6 h-6 text-primary-foreground" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Strategic Alliance</div>
                  <div className="text-sm text-muted-foreground">Local + Global Expertise</div>
                </div>
              </div>
            </div>
            
            <div className="bg-muted rounded-2xl p-8 lg:p-12">
              <h3 className="font-display text-xl font-semibold text-foreground mb-6">
                Areas of Collaboration
              </h3>
              <div className="space-y-6">
                {partnerAreas.map((area) => {
                  const Icon = area.icon;
                  return (
                    <div key={area.title} className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-display font-semibold text-foreground mb-1">
                          {area.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">
                          {area.description}
                        </p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Benefits */}
      <section className="section-padding hero-gradient">
        <div className="container-wide mx-auto">
          <SectionHeader
            badge="Partnership Benefits"
            title="What Our Partnership Delivers"
            centered
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            {[
              {
                title: "Global Technology",
                desc: "Access to proven digital platforms and tools developed through international experience.",
              },
              {
                title: "Local Context",
                desc: "Deep understanding of Ghana's agricultural sector, markets, and farmer needs.",
              },
              {
                title: "Scalable Solutions",
                desc: "Ability to deploy at scale with robust infrastructure and support systems.",
              },
            ].map((benefit) => (
              <div key={benefit.title} className="text-center p-6 rounded-xl bg-primary-foreground/5 border border-primary-foreground/10">
                <h4 className="font-display text-lg font-semibold text-primary-foreground mb-2">
                  {benefit.title}
                </h4>
                <p className="text-sm text-primary-foreground/70">
                  {benefit.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Open to Partnerships */}
      <section className="section-padding bg-background">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
            Open to New Partnerships
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We are always exploring opportunities to collaborate with organizations that share 
            our commitment to agricultural development. If you're interested in partnering with 
            GM Green Ltd, we'd love to hear from you.
          </p>
        </div>
      </section>
    </>
  );
};

export default Partnerships;
