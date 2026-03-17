
"use client"
import { useState } from "react";
import PageHero from "@/components/PageHero";
import { products, categories } from "@/data/productData";
import { Button } from "@/components/ui/button";
import ProductCard from "@/components/ProductCard";

const WHATSAPP_NUMBER = "233248892123";

const Store = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredProducts = activeCategory === "All"
    ? products
    : products.filter(product => product.category === activeCategory);

  return (
    <main>
      <>
        <title>Agro Store | ARC Ltd - Quality Agricultural Inputs</title>
        <meta
          name="description"
          content="Shop quality agricultural products including seedlings, seeds, fertilizers, and agrochemicals from ARC Ltd Ghana."
        />
        <meta property="og:title" content="Agro Store | ARC Ltd" />
        <meta
          property="og:description"
          content="Quality agricultural inputs for commercial farming - seedlings, seeds, fertilizers, and agrochemicals."
        />
        <meta property="og:type" content="website" />
        <link rel="canonical" href="/store" />
      </>

      <PageHero
        title="Agro Store"
        description="Quality agricultural inputs for your farming success. Order directly via WhatsApp."
      />

      <section className="section-padding bg-background">
        <div className="container-wide">
          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                onClick={() => setActiveCategory(category)}
                className="rounded-full"
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Products Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredProducts.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                whatsappNumber={WHATSAPP_NUMBER}
              />
            ))}
          </div>

          {/* WhatsApp Info */}
          <div className="mt-16 text-center p-8 bg-primary/5 rounded-2xl border border-primary/10">
            <h3 className="font-display font-semibold text-xl text-foreground mb-3">
              How to Order
            </h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Click the "Order Now" button on any product to open WhatsApp with your order details pre-filled. 
              Our team will respond promptly with availability, delivery options, and payment details.
            </p>
            <p className="text-sm text-muted-foreground mt-4">
              WhatsApp: <span className="text-primary font-medium">+233 248 892 123</span>
            </p>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Store;
