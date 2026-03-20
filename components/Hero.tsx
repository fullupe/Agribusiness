//import { Link } from "react-router-dom";
import { ArrowRight, TrendingUp, Users, Sprout } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const Hero = () => {
  return (
    <section className="relative min-h-[90vh] flex items-center hero-gradient overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-accent blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-primary-foreground blur-3xl" />
      </div>

      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 relative z-10">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/10 border border-primary-foreground/20 mb-8 animate-fade-in">
            <Sprout className="w-4 h-4 text-accent" />
            <span className="text-sm font-medium text-primary-foreground">
             A leading Research and Agribusiness Advisory Partner in Africa.
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-primary-foreground leading-tight mb-6 animate-slide-up">
            {/* Agribusiness Solutions That Deliver{" "} */}
            Research, Advisory and Digital Solutions That Deliver {" "} 
            <span className="text-accent">Measurable Outcomes</span>
          </h1>

          {/* Subtext */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-2xl mb-10 animate-slide-up" style={{ animationDelay: "0.1s" }}>
            {/* We strengthen agricultural performance through commercial farming, 
            agribusiness development consultancy, research, project management, 
            and climate-smart digital systems. */}

            {/* GM Green Solutions provides multi-sector research, surveys, feasibility studies, 
            business development services, agribusiness advisory, 
            and digital solution development to support organizations in making informed, 
            evidence-based decisions.  */}


            We deliver applied research, business intelligence, and technical advisory services that enable governments, 
            investors, and development partners to make informed decisions, structure viable investments, and achieve measurable impact.
          
              <br/>
            {/* Through these services, we help governments, 
            development partners, and private sector institutions design 
            effective programs, guide strategic investments, and formulate sound policies. */}

            GM Green Solutions combines quantitative and qualitative research, financial analysis, agronomic expertise, 
            and digital systems to support sustainable and scalable agricultural development across Africa.
           
  
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-slide-up" style={{ animationDelay: "0.2s" }}>
            <Button asChild size="lg" className="btn-accent rounded-full px-8 text-base">
              <Link href="/solutions">
                Explore Solutions
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 text-base bg-transparent border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10"
            >
              <Link href="/contact">Contact Us</Link>
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 max-w-lg animate-slide-up" style={{ animationDelay: "0.3s" }}>
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <TrendingUp className="w-5 h-5 text-accent" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                15+
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/60">
                Years Experience
              </div>
            </div>
            {/* <div className="text-center">
              <div className="flex justify-center mb-2">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                50+
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/60">
                Projects Delivered
              </div>
            </div> */}
            <div className="text-center">
              <div className="flex justify-center mb-2">
                <Sprout className="w-5 h-5 text-accent" />
              </div>
              <div className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
                100K+
              </div>
              <div className="text-xs md:text-sm text-primary-foreground/60">
                Farmers Reached
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
