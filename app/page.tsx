import Layout from "@/components/Layout";
import Image from "next/image";


import { ArrowRight, Tractor, ClipboardList, BarChart3, FolderKanban, Cloud, Handshake, Newspaper } from "lucide-react";
import { Button } from "@/components/ui/button";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import ServiceCard from "@/components/ServiceCard";
import BlogCard from "@/components/BlogCard";
import { getLatestPosts } from "@/data/blogData";
import Link from "next/link";

export default function Home() {
 const latestPosts = getLatestPosts(3);

  const services = [
  {
    icon: Tractor,
    // title: "Farming Operations",
    title: "Research, Monitoring & Evaluation",
    // – Evidence for programme design and performance tracking
    description: "Evidence for programme design and performance tracking.",
    // items: ["Commercial crop production", "Demo farms", "Postharvest support", "Productivity planning"],
  },
  {
    icon: ClipboardList,
    // title: "Agribusiness Development Consultancy",
    title: "Market Research & Investment Advisory",
  
    // description: "Strategic guidance to transform agricultural ventures into sustainable, profitable enterprises.",
    description: "Market insights and investment-ready analysis.",
    // items: ["Feasibility & business plans", "Market strategies", "Cooperative/aggregation models"],
  },
  {
    icon: BarChart3,
    // title: "Research & Studies",
    title: "Business Development & Enterprise Support",
   
    // description: "Data-driven insights through comprehensive surveys, market analysis, and value chain studies.",
    description: "Business plans, diagnostics, and growth strategies.",
    
    // items: ["Baseline/midline/endline surveys", "Market & value chain studies", "Farmer profiling"],
  },
  {
    icon: FolderKanban,
    // title: "Project Management",
    title: "Project Design & Implementation Support",
    // Project Design & Implementation Support – From concept development to execution
    // description: "End-to-end programme delivery from planning through implementation to stakeholder engagement.",
    description: "From concept development to execution.",
    // items: ["Programme planning", "Implementation supervision", "Training & adoption support"],
  },
  {
    icon: Cloud,
    // title: "Climate-Smart Digital Tool",
    title: "Agronomic, Climate & Digital Advisory",
    // Agronomic, Climate & Digital Advisory – Soil testing, climate-smart solutions, and data-driven tools
    // description: "Advanced digital agriculture platform providing climate alerts, agronomic advisories, and farmer learning.",
    description: "Soil testing, climate-smart solutions, and data-driven tools.",
    // items: ["Climate forecasting", "Agronomic advisories", "Adoption tracking dashboards"],
  },
];



  return (
     <>
     {/* Hero Section */}
      <Hero />

      {/* What We Do Section */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <SectionHeader
             badge="What We Do"
            title="Research, Surveys and Data Intelligence"
            // description="We deliver integrated services across the agricultural value chain, 
            // combining deep expertise with innovative digital tools to drive measurable impact."
            description="We provide integrated services across research, advisory, and project implementation"
            centered
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {services.map((service) => (
              <ServiceCard key={service.title} {...service} />
            ))}
          </div>
        </div>
      </section>

      {/* Partnership Highlight */}
      <section className="section-padding hero-gradient">
        <div className="container-wide mx-auto">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1">
              <SectionHeader
                badge="Strategic Partnership"
                title="Partnering with eKutir for Digital Excellence"
                description="Our strategic partnership with eKutir enhances our capability to deliver cutting-edge digital agriculture solutions, combining local expertise with global innovation."
                light
              />
              <div className="flex items-center gap-4">
                <Button asChild className="btn-accent rounded-full px-6">
                  <Link href="/partnerships">
                    Learn More
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="flex-1 flex justify-center">
              <div className="w-64 h-64 rounded-full bg-primary-foreground/10 flex items-center justify-center border border-primary-foreground/20">
                <Handshake className="w-24 h-24 text-accent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Latest Blog Posts */}
      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4 mb-10">
            <SectionHeader
              badge="Insights & Stories"
              title="Latest from Our Blog"
              description="Stay updated with our latest insights on agribusiness, market trends, and success stories from the field."
            />
            <Button asChild variant="outline" className="w-fit">
              <Link href="/blog">
                View All Posts
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
            {latestPosts.map((post) => (
              <BlogCard key={post.id} post={post} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-muted">
        <div className="container-narrow mx-auto text-center">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
            Ready to Transform Your Agricultural Operations?
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's discuss how our expertise can help you achieve measurable outcomes in your agribusiness ventures.
          </p>
          <Button asChild size="lg" className="btn-accent rounded-full px-8">
            <Link href="/contact">
              Get Started Today
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
        </div>
      </section>
    </>
  );
}
