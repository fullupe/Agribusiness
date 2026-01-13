"use client"

import { MapPin, Phone, Mail, MessageCircle } from "lucide-react";
import Layout from "@/components/Layout";
import PageHero from "@/components/PageHero";
import ContactForm from "@/components/ContactForm";

const Contact = () => {
  return (
    <>
      <PageHero
        badge="Get in Touch"
        title="Let's Discuss Your Agribusiness Needs"
        description="Whether you're looking for consultancy services, research support, or digital solutions, we're here to help you achieve measurable outcomes."
      />

      <section className="section-padding bg-background">
        <div className="container-wide mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16">
            {/* Contact Info */}
            <div className="lg:col-span-1">
              <h3 className="font-display text-2xl font-semibold text-foreground mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Location</div>
                    <p className="text-muted-foreground">
                      Accra, Ghana
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Phone</div>
                    <a
                      href="tel:+233248892123"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +233 248 892 123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <MessageCircle className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">WhatsApp</div>
                    <a
                      href="https://wa.me/233248892123"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +233 248 892 123
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <div className="font-semibold text-foreground mb-1">Email</div>
                    <a
                      href="mailto:goasare@gmail.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      goasare@gmail.com
                    </a>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="mt-10 pt-8 border-t border-border">
                <h4 className="font-display font-semibold text-foreground mb-4">
                  Office Hours
                </h4>
                <div className="space-y-2 text-sm text-muted-foreground">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span>8:00 AM - 5:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span>9:00 AM - 1:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span>Closed</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-muted rounded-2xl p-6 md:p-10">
                <h3 className="font-display text-2xl font-semibold text-foreground mb-2">
                  Send Us a Message
                </h3>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24-48 hours.
                </p>
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
