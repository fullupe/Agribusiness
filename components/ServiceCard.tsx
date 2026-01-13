import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  items?: string[];
}

const ServiceCard = ({ icon: Icon, title, description, items }: ServiceCardProps) => {
  return (
    <div className="card-elevated p-6 md:p-8 h-full flex flex-col">
      <div className="w-12 h-12 rounded-lg hero-gradient flex items-center justify-center mb-5">
        <Icon className="w-6 h-6 text-primary-foreground" />
      </div>
      <h3 className="font-display text-xl font-semibold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">
        {description}
      </p>
      {items && items.length > 0 && (
        <ul className="space-y-2 mt-auto">
          {items.map((item, index) => (
            <li key={index} className="flex items-start gap-2 text-sm text-muted-foreground">
              <span className="w-1.5 h-1.5 rounded-full bg-accent mt-2 flex-shrink-0" />
              {item}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ServiceCard;
