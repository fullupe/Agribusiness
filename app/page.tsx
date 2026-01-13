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
    title: "Farming Operations",
    description: "Commercial crop production and demonstration farms that showcase best practices and drive productivity.",
    items: ["Commercial crop production", "Demo farms", "Postharvest support", "Productivity planning"],
  },
  {
    icon: ClipboardList,
    title: "Agribusiness Development Consultancy",
    description: "Strategic guidance to transform agricultural ventures into sustainable, profitable enterprises.",
    items: ["Feasibility & business plans", "Market strategies", "Cooperative/aggregation models"],
  },
  {
    icon: BarChart3,
    title: "Research & Studies",
    description: "Data-driven insights through comprehensive surveys, market analysis, and value chain studies.",
    items: ["Baseline/midline/endline surveys", "Market & value chain studies", "Farmer profiling"],
  },
  {
    icon: FolderKanban,
    title: "Project Management",
    description: "End-to-end programme delivery from planning through implementation to stakeholder engagement.",
    items: ["Programme planning", "Implementation supervision", "Training & adoption support"],
  },
  {
    icon: Cloud,
    title: "Climate-Smart Digital Tool",
    description: "Advanced digital agriculture platform providing climate alerts, agronomic advisories, and farmer learning.",
    items: ["Climate forecasting", "Agronomic advisories", "Adoption tracking dashboards"],
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
            title="Comprehensive Agribusiness Solutions"
            description="We deliver integrated services across the agricultural value chain, combining deep expertise with innovative digital tools to drive measurable impact."
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
