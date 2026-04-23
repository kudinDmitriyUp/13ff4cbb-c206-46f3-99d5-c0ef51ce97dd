import React from "react";
import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered"; // Corrected import path
import HeroSplit from "@/components/sections/hero/HeroSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import TestimonialQuoteCards from "@/components/sections/testimonial/TestimonialQuoteCards";
import ContactCta from "@/components/sections/contact/ContactCta";
import FooterSimple from "@/components/sections/footer/FooterSimple";

const AboutPage: React.FC = () => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground">
      <NavbarCentered
        logo="Webild"
        navItems={routes.map((r) => ({ name: r.label, href: r.path }))}
        ctaButton={{ text: "Get Started", href: "/contact" }}
      />
      <main className="flex-grow">
        <HeroSplit
          title="About Our Company"
          description="We are a passionate team dedicated to building innovative solutions that empower businesses and individuals to thrive."
          primaryCta={{ text: "Our Mission", href: "#mission" }}
          secondaryCta={{ text: "Contact Us", href: "/contact" }}
          media={{ type: "image", src: "/placeholder-image.jpg", alt: "Our Team" }}
        />
        <AboutFeaturesSplit
          title="Our Mission & Values"
          description="To deliver exceptional value through cutting-edge technology, unparalleled customer service, and a commitment to continuous improvement."
          features={[
            { title: "Innovation", description: "Continuously pushing boundaries to create future-proof solutions for our clients." },
            { title: "Quality", description: "Commitment to excellence in every product and service we offer, ensuring reliability." },
            { title: "Integrity", description: "Operating with transparency, honesty, and strong ethical principles in all our dealings." },
          ]}
          media={{ type: "image", src: "/placeholder-image-2.jpg", alt: "Our Mission" }}
        />
        <TestimonialQuoteCards
          title="What Our Clients Say"
          testimonials={[
            { quote: "Webild transformed our workflow. Their team is incredibly skilled and responsive, delivering beyond expectations.", author: "Jane Doe", position: "CEO, Tech Solutions" },
            { quote: "An outstanding partner! The results exceeded our expectations, and their support was top-notch.", author: "John Smith", position: "Founder, Creative Agency" },
          ]}
        />
        <ContactCta
          title="Ready to Start Your Project?"
          description="Let's build something amazing together. Reach out to us today to discuss your next big idea!"
          primaryCta={{ text: "Get in Touch", href: "/contact" }}
        />
      </main>
      <FooterSimple
        logo="Webild"
        description="Building the future, one solution at a time. Empowering businesses with innovative technology."
        socialLinks={[
          { name: "Facebook", href: "#" },
          { name: "Twitter", href: "#" },
          { name: "LinkedIn", href: "#" },
        ]}
        copyright="© 2024 Webild. All rights reserved."
      />
    </div>
  );
};

export default AboutPage;