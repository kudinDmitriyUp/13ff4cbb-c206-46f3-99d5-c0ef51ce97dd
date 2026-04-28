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
          title="Our Story: Building the Future, Together"
          description="At Webild, we empower creators and businesses with innovative tools to bring their visions to life. Discover our journey and commitment to excellence."
          primaryCta={{ text: "Learn More", href: "#mission" }}
          secondaryCta={{ text: "Get in Touch", href: "/contact" }}
          media={{ type: "image", src: "/placeholder-team.jpg", alt: "Our Team" }}
        />
        <AboutFeaturesSplit
          id="mission"
          title="Our Mission & Values"
          description="We're driven by a passion for innovation, a commitment to quality, and a belief in collaborative success."
          features={[
            { name: "Innovation", description: "Continuously pushing boundaries.", icon: "💡" },
            { name: "Quality", description: "Delivering excellence in every detail.", icon: "✨" },
            { name: "Collaboration", description: "Achieving more together.", icon: "🤝" },
          ]}
          media={{ type: "image", src: "/placeholder-mission.jpg", alt: "Mission" }}
        />
        <TestimonialQuoteCards
          title="What Our Partners Say"
          description="Hear from those who've experienced the Webild difference."
          testimonials={[
            { quote: "Webild transformed our workflow!", name: "Jane Doe", title: "CEO, TechCorp", avatar: "/placeholder-avatar-1.jpg" },
            { quote: "Outstanding support and innovative solutions.", name: "John Smith", title: "Founder, InnovateX", avatar: "/placeholder-avatar-2.jpg" },
          ]}
        />
        <ContactCta
          title="Ready to Start Your Project?"
          description="Connect with us today to discuss how we can help you achieve your goals."
          primaryCta={{ text: "Contact Sales", href: "/contact" }}
          secondaryCta={{ text: "View Services", href: "/services" }}
        />
      </main>
      <FooterSimple
        logo="Webild"
        links={[
          { name: "About", href: "/about" },
          { name: "Services", href: "/services" },
          { name: "Contact", href: "/contact" },
          { name: "Privacy", href: "/privacy" },
        ]}
      />
    </div>
  );
};

export default AboutPage;