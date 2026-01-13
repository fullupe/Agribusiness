//import { Link } from "react-router-dom";

import { Leaf, Phone, Mail, MapPin } from "lucide-react";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container-wide mx-auto section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center">
                <Leaf className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <span className="font-display font-bold text-lg">ARC Ltd</span>
                <p className="text-xs text-primary-foreground/70">
                  Agribusiness & Research Consultancy
                </p>
              </div>
            </Link>
            <p className="text-sm text-primary-foreground/80 leading-relaxed">
              Agribusiness solutions that deliver measurable outcomes. Strengthening agricultural performance across Ghana and West Africa.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {[
                { name: "About Us", path: "/about" },
                { name: "Our Solutions", path: "/solutions" },
                { name: "Digital Tool", path: "/digital-tool" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Blog", path: "/blog" },
              ].map((link) => (
                <li key={link.path}>
                  <Link
                    href={link.path}
                    className="text-sm text-primary-foreground/70 hover:text-primary-foreground transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2">
              {[
                "Farming Operations",
                "Agribusiness Consultancy",
                "Research & Studies",
                "Project Management",
              ].map((service) => (
                <li key={service}>
                  <span className="text-sm text-primary-foreground/70">
                    {service}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display font-semibold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 mt-1 text-accent" />
                <span className="text-sm text-primary-foreground/80">
                  Accra, Ghana
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-accent" />
                <a
                  href="tel:+233248892123"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  +233 248 892 123
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-accent" />
                <a
                  href="mailto:goasare@gmail.com"
                  className="text-sm text-primary-foreground/80 hover:text-primary-foreground transition-colors"
                >
                  goasare@gmail.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-primary-foreground/20">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-primary-foreground/60">
              © {new Date().getFullYear()} Agribusiness and Research Consultancy Ltd. All rights reserved.
            </p>
            <div className="flex items-center gap-4">
              <span className="text-xs text-primary-foreground/40">
                Accra, Ghana
              </span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
