import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Product } from "@/data/productData";

interface ProductCardProps {
  product: Product;
  whatsappNumber: string;
}

const ProductCard = ({ product, whatsappNumber }: ProductCardProps) => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      `Hello ARC Ltd,\n\nI'm interested in ordering:\n\n*${product.name}*\nPrice: ${product.price}\n\nPlease provide more details and availability.\n\nThank you!`
    );
    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${message}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="bg-card rounded-xl border border-border overflow-hidden hover:shadow-lg transition-all duration-300 group">
      <div className="aspect-[4/3] overflow-hidden bg-muted">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-5">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full mb-3">
          {product.category}
        </span>
        <h3 className="font-display font-semibold text-lg text-foreground mb-2">
          {product.name}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="font-bold text-primary text-lg">{product.price}</span>
          <Button
            onClick={handleWhatsAppClick}
            className="bg-[#25D366] hover:bg-[#128C7E] text-white gap-2"
          >
            <MessageCircle className="w-4 h-4" />
            Order Now
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
