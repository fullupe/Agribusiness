interface SectionHeaderProps {
  badge?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

const SectionHeader = ({ badge, title, description, centered = false, light = false }: SectionHeaderProps) => {
  return (
    <div className={`max-w-3xl mb-12 md:mb-16 ${centered ? "mx-auto text-center" : ""}`}>
      {badge && (
        <span className={`inline-block px-3 py-1 text-xs font-medium rounded-full mb-4 ${
          light 
            ? "bg-primary-foreground/10 text-primary-foreground" 
            : "bg-primary/10 text-primary"
        }`}>
          {badge}
        </span>
      )}
      <h2 className={`font-display text-3xl md:text-4xl font-bold leading-tight mb-4 ${
        light ? "text-primary-foreground" : "text-foreground"
      }`}>
        {title}
      </h2>
      {description && (
        <p className={`text-base md:text-lg leading-relaxed ${
          light ? "text-primary-foreground/80" : "text-muted-foreground"
        }`}>
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeader;
