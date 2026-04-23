import ContactSplitForm from '@/components/sections/contact/ContactSplitForm';
import FaqSimple from '@/components/sections/faq/FaqSimple';
import FeaturesRevealCards from '@/components/sections/features/FeaturesRevealCards';
import FooterMinimal from '@/components/sections/footer/FooterMinimal';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import NavbarCentered from '@/components/ui/NavbarCentered';
import PricingLayeredCards from '@/components/sections/pricing/PricingLayeredCards';
import ProductVariantCards from '@/components/sections/product/ProductVariantCards';
import SocialProofMarquee from '@/components/sections/social-proof/SocialProofMarquee';
import TestimonialMarqueeCards from '@/components/sections/testimonial/TestimonialMarqueeCards';
import { Github, Linkedin, Twitter } from "lucide-react";


export default function HomePage() {
  return (
    <>
  <div id="nav" data-section="nav">
      <NavbarCentered
      logo="FlowSoft"
      navItems={[
        {
          name: "Features",
          href: "#features",
        },
        {
          name: "Pricing",
          href: "#pricing",
        },
        {
          name: "About",
          href: "#about",
        },
        { name: "About", href: "/about" },

      ]}
      ctaButton={{
        text: "Get Started",
        href: "#contact",
      }}
    />
  </div>

  <div id="hero" data-section="hero">
      <HeroSplitMediaGrid
      tag="Efficiency at Scale"
      title="Work smarter. Automate what slows you down."
      description="Our platform eliminates repetitive tasks and connects your entire workflow in minutes—no coding required. See results in your first week."
      primaryButton={{
        text: "Start Your Free Trial",
        href: "#contact",
      }}
      secondaryButton={{
        text: "Watch Demo",
        href: "#features",
      }}
      items={[
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/a-clean-modern-software-dashboard-interf-1776959350721-09864ef6.png",
        },
        {
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/floating-abstract-3d-elements-representi-1776959349202-e096b136.png",
        },
      ]}
    />
  </div>

  <div id="social-proof" data-section="social-proof">
      <SocialProofMarquee
      tag="Trusted by Leaders"
      title="Powering high-growth companies"
      description="See the teams that trust us to simplify their daily workflows."
      names={[
        "TechCorp",
        "Innovate",
        "DataGrid",
        "CloudSystem",
        "GlobalFlow",
        "NetPulse",
        "Streamline",
      ]}
    />
  </div>

  <div id="features" data-section="features">
      <FeaturesRevealCards
      tag="Key Capabilities"
      title="Everything you need to scale"
      description="Unlock advanced automation and workflow intelligence features."
      items={[
        {
          title: "Auto-Task Sequencing",
          description: "Seamlessly link repetitive tasks without writing a single line of code.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/iconographic-representation-of-fast-task-1776959349628-cff9407e.png",
        },
        {
          title: "Integrated Collaboration",
          description: "Bring your tools together in one unified, real-time dashboard view.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/visualization-of-team-collaboration-conn-1776959351447-0cf3798d.png",
        },
        {
          title: "Intelligent Data Insights",
          description: "Turn manual metrics into actionable intelligence for your team.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/data-analytics-insight-dashboard-view-mo-1776959352320-373c23a8.png",
        },
      ]}
    />
  </div>

  <div id="product" data-section="product">
      <ProductVariantCards
      tag="Our Solutions"
      title="Tailored automation workflows"
      description="Standardize your processes across every department."
      products={[
        {
          name: "Automation Suite",
          variant: "Core",
          price: "$49/mo",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/minimalist-product-screenshot-of-a-task--1776959350443-f780f5d3.png",
        },
        {
          name: "Workflow Analytics",
          variant: "Pro",
          price: "$99/mo",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/minimalist-product-screenshot-of-a-sched-1776959348519-b5e799c1.png",
        },
        {
          name: "Enterprise Sync",
          variant: "Scale",
          price: "$199/mo",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/minimalist-product-screenshot-of-a-repor-1776959351075-d2061da0.png",
        },
        {
          name: "Resource Planner",
          variant: "Lite",
          price: "$29/mo",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/minimalist-product-screenshot-showing-au-1776959350288-63737bee.png",
        },
        {
          name: "Integration Hub",
          variant: "Connect",
          price: "$59/mo",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/minimalist-product-screenshot-of-integra-1776959351024-7b8b289c.png",
        },
        {
          name: "Admin Control",
          variant: "Admin",
          price: "$129/mo",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/minimalist-product-screenshot-of-user-pe-1776959351999-def83e4c.png",
        },
      ]}
    />
  </div>

  <div id="pricing" data-section="pricing">
      <PricingLayeredCards
      tag="Pricing Plans"
      title="Simple pricing for all teams"
      description="Choose the right plan for your business needs."
      plans={[
        {
          tag: "Starter",
          price: "$49",
          description: "Perfect for individuals and small teams starting out.",
          primaryButton: {
            text: "Get Started",
            href: "#contact",
          },
          features: [
            "1 User",
            "Basic Integrations",
            "Email Support",
          ],
        },
        {
          tag: "Growth",
          price: "$149",
          description: "Best for scaling teams needing more power.",
          primaryButton: {
            text: "Get Started",
            href: "#contact",
          },
          features: [
            "5 Users",
            "All Integrations",
            "Priority Support",
            "Analytics",
          ],
        },
        {
          tag: "Enterprise",
          price: "$499",
          description: "Advanced solutions for large-scale operations.",
          primaryButton: {
            text: "Get Started",
            href: "#contact",
          },
          features: [
            "Unlimited Users",
            "Custom Security",
            "Dedicated Manager",
          ],
        },
      ]}
    />
  </div>

  <div id="metrics" data-section="metrics">
      <MetricsSimpleCards
      tag="Our Impact"
      title="Results speak for themselves"
      description="Our platform has helped teams reduce operational friction significantly."
      metrics={[
        {
          value: "45%",
          description: "Increase in team efficiency",
        },
        {
          value: "20 hrs",
          description: "Hours saved per week",
        },
        {
          value: "$10k+",
          description: "Average monthly ROI",
        },
      ]}
    />
  </div>

  <div id="testimonials" data-section="testimonials">
      <TestimonialMarqueeCards
      tag="Customer Stories"
      title="Used by industry leaders"
      description="Hear what our customers have to say about working with FlowSoft."
      testimonials={[
        {
          name: "Alice Chen",
          role: "CEO",
          quote: "FlowSoft transformed our chaotic processes into seamless workflows.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/professional-business-executive-headshot-1776959351800-bcd49c12.png",
        },
        {
          name: "Bob Smith",
          role: "CTO",
          quote: "The best integration engine we have tested. Highly recommend.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/friendly-tech-developer-headshot-warm-na-1776959351295-071bbf9c.png",
        },
        {
          name: "Carol White",
          role: "Marketing Director",
          quote: "Our productivity skyrocketed in the first two weeks.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/focused-marketing-manager-headshot-clean-1776959351311-30283d11.png",
        },
        {
          name: "David Young",
          role: "Ops Manager",
          quote: "Simplicity and power combined. An essential tool for us.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/calm-operations-manager-headshot-profess-1776959351666-8c8c7e40.png",
        },
        {
          name: "Eve Adams",
          role: "Project Lead",
          quote: "Workflow visibility improved overnight. Worth every penny.",
          imageSrc: "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/experienced-project-leader-headshot-conf-1776959351331-890d51ae.png",
        },
      ]}
    />
  </div>

  <div id="faq" data-section="faq">
      <FaqSimple
      tag="FAQ"
      title="Frequently Asked Questions"
      description="Everything you need to know about getting started."
      items={[
        {
          question: "Do I need coding skills?",
          answer: "No, our platform is entirely no-code and intuitive to use.",
        },
        {
          question: "Can I integrate with other apps?",
          answer: "Yes, we support integration with over 500+ apps via our API.",
        },
        {
          question: "Is there a free trial?",
          answer: "Yes, we offer a 14-day free trial on all plans.",
        },
      ]}
    />
  </div>

  <div id="contact" data-section="contact">
      <ContactSplitForm
      tag="Get in touch"
      title="Start your journey today"
      description="Fill out the form and our team will be in touch shortly."
      inputs={[
        {
          name: "name",
          type: "text",
          placeholder: "Your Name",
          required: true,
        },
        {
          name: "email",
          type: "email",
          placeholder: "Email Address",
          required: true,
        },
        {
          name: "company",
          type: "text",
          placeholder: "Company Name",
        },
      ]}
      textarea={{
        name: "message",
        placeholder: "How can we help?",
        rows: 4,
      }}
      buttonText="Submit Request"
      imageSrc="https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3CNPhIZITMXoY9ocAmcmrQYl9QP/a-minimalist-modern-office-workspace-sof-1776959351225-76b20c35.png"
    />
  </div>

  <div id="footer" data-section="footer">
      <FooterMinimal
      brand="FlowSoft"
      copyright="© 2024 FlowSoft. All rights reserved."
      socialLinks={[
        {
          icon: Twitter,
        },
        {
          icon: Github,
        },
        {
          icon: Linkedin,
        },
      ]}
    />
  </div>
    </>
  );
}
