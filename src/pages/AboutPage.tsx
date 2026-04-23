import { routes } from "@/routes";
import NavbarCentered from "@/components/ui/NavbarCentered";
import AboutTextSplit from "@/components/sections/about/AboutTextSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import FooterSimple from "@/components/sections/footer/FooterSimple";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-background text-foreground">
      <NavbarCentered
        logo="FlowSoft"
        navItems={[{"name":"Features","href":"/features"},{"name":"Pricing","href":"/pricing"},{"name":"About","href":"/about"},{"name":"Automation Suite","href":"/automation-suite"},{"name":"Contact","href":"/contact"}]}
        ctaButton={{"text":"Start Free Trial","href":"/signup"}}
      />
      <AboutTextSplit
        title="FlowSoft: Empowering Your Business Through Intelligent Automation"
        descriptions={["At FlowSoft, we believe that your time is best spent on innovation, not repetition. Our mission is to empower businesses of all sizes to work smarter by providing an intuitive, powerful automation platform that eliminates tedious tasks and streamlines complex workflows. We're dedicated to transforming how teams operate, enabling them to achieve more with less effort and focus on what truly matters.","Born from a vision to simplify the intricate world of business processes, FlowSoft delivers a no-code solution that connects your entire operational ecosystem in minutes. We focus on tangible results, helping you see significant improvements in productivity and efficiency within your first week. Our platform is designed for clarity, confidence, and rapid value delivery, ensuring you can focus on strategic growth without technical hurdles.","We are committed to continuous innovation, ensuring our platform remains at the forefront of automation technology. FlowSoft is more than just a tool; it's a partner in your journey towards enhanced productivity, offering the flexibility and power you need to adapt and thrive in a fast-evolving market. Join us in building a future where every workflow is optimized, and every team member is empowered."]}
        primaryButton={{"text":"Start Your Free Trial","href":"/signup"}}
        secondaryButton={{"text":"Explore Features","href":"/features"}}
      />
      <AboutFeaturesSplit
        tag="About FlowSoft"
        title="Empowering Your Business with Seamless Automation"
        description="At FlowSoft, we believe that work should be smart, not hard. Our mission is to free businesses from repetitive tasks and complex workflows, enabling teams to focus on innovation and growth. We've built a powerful, intuitive platform that connects your entire operation, automates critical processes, and delivers measurable results—all without a single line of code. Join us in shaping a future where efficiency is effortless."
        primaryButton={{"text":"Request a Demo","href":"/contact#demo"}}
        secondaryButton={{"text":"Explore Features","href":"/features"}}
        items={[{"icon":"Zap","title":"No-Code Simplicity","description":"Build powerful automations and integrate your favorite apps with an intuitive drag-and-drop interface. No technical expertise required."},{"icon":"Rocket","title":"Boost Productivity","description":"Eliminate manual data entry, streamline approvals, and automate routine tasks to reclaim valuable time for strategic initiatives."},{"icon":"Link","title":"Seamless Integration","description":"Connect all your essential business tools and applications, creating a unified and efficient workflow across your entire organization."},{"icon":"BarChart2","title":"Data-Driven Insights","description":"Gain real-time visibility into your automated processes with comprehensive analytics, helping you make informed decisions and optimize performance."}]}
        imageSrc="https://images.unsplash.com/photo-1556761175-5973ddf32d8f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <FooterSimple
        brand="FlowSoft"
        columns={[{"title":"Solutions","items":[{"label":"Automation Suite","href":"/automation-suite"},{"label":"Workflow Analytics","href":"/workflow-analytics"},{"label":"Integrations","href":"/integrations"},{"label":"Process Optimization","href":"/process-optimization"}]},{"title":"Company","items":[{"label":"About Us","href":"/about"},{"label":"Careers","href":"/careers"},{"label":"Blog","href":"/blog"},{"label":"Partners","href":"/partners"}]},{"title":"Resources","items":[{"label":"Help Center","href":"/help"},{"label":"Contact Sales","href":"/contact-sales"},{"label":"Privacy Policy","href":"/privacy"},{"label":"Terms of Service","href":"/terms"}]}]}
        copyright="© 2024 FlowSoft. All rights reserved."
        links={[{"label":"Features","href":"/features"},{"label":"Pricing","href":"/pricing"},{"label":"About","href":"/about"},{"label":"Contact","href":"/contact"}]}
      />
    </div>
  );
}
