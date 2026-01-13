interface PageHeroProps {
  badge?: string;
  title: string;
  description?: string;
}

const PageHero = ({ badge, title, description }: PageHeroProps) => {
  return (
    <section className="hero-gradient py-20 md:py-28">
      <div className="container-wide mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          {badge && (
            <span className="inline-block px-3 py-1 text-xs font-medium rounded-full bg-primary-foreground/10 text-primary-foreground mb-4 animate-fade-in">
              {badge}
            </span>
          )}
          <h1 className="font-display text-3xl md:text-4xl lg:text-5xl font-bold text-primary-foreground leading-tight mb-4 animate-slide-up">
            {title}
          </h1>
          {description && (
            <p className="text-lg text-primary-foreground/80 leading-relaxed animate-slide-up" style={{ animationDelay: "0.1s" }}>
              {description}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default PageHero;
