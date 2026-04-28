import HeroSplit from "@/components/sections/hero/HeroSplit";
import AboutFeaturesSplit from "@/components/sections/about/AboutFeaturesSplit";
import TestimonialQuoteCards from "@/components/sections/testimonial/TestimonialQuoteCards";

export default function AboutPage() {
  return (
    <>
      <HeroSplit
        tag="About Us"
        title="FlowSoft: Pioneering Effortless Automation for Every Business"
        description="At FlowSoft, we believe productivity shouldn't be complex. Our mission is to empower businesses of all sizes to work smarter by eliminating repetitive tasks and seamlessly connecting workflows. We deliver powerful, no-code automation solutions that provide tangible results, often within your first week, transforming how you operate without requiring technical expertise."
        primaryButton={{"text":"Explore Our Automation Suite","href":"/automation-suite"}}
        secondaryButton={{"text":"Request a Personalized Demo","href":"/contact"}}
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dd30cb28?auto=format&fit=crop&q=80&w=1974&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      />
      <AboutFeaturesSplit
        tag="About FlowSoft"
        title="Empowering Your Business with Seamless Automation"
        description="At FlowSoft, we believe that every business, regardless of size or technical expertise, deserves the power of efficient automation. We're dedicated to building intuitive solutions that eliminate repetitive tasks, connect disparate systems, and free your team to focus on what truly matters: innovation and growth. Our commitment is to deliver tangible results, fast, transforming how you work and accelerating your success."
        primaryButton={{"text":"Start Your Free Trial","href":"/signup"}}
        secondaryButton={{"text":"Explore Our Features","href":"/features"}}
        items={[{"icon":"Sparkles","title":"No-Code Automation","description":"Build powerful workflows with drag-and-drop ease. No technical skills required, just pure productivity from day one."},{"icon":"Rocket","title":"Rapid Deployment & Results","description":"Go from idea to automated workflow in minutes and see measurable impact within your first week."},{"icon":"Link","title":"Seamless Workflow Integration","description":"Connect all your essential apps and services, creating a unified and intelligent operational ecosystem."},{"icon":"Target","title":"Empower Your Team","description":"Free your employees from mundane tasks, allowing them to dedicate their talents to strategic initiatives and innovation."}]}
        imageSrc="https://images.unsplash.com/photo-1556761175-5973dd0fd069?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1920&q=80"
      />
      <TestimonialQuoteCards
        tag="Customer Success"
        title="See How FlowSoft Empowers Businesses Like Yours"
        description="Don't just take our word for it. Read how FlowSoft's intuitive automation platform has helped our clients streamline operations, eliminate manual tasks, and achieve significant productivity gains, often within their first week. Experience the tangible benefits of smart automation."
        primaryButton={{"text":"Start Your Free Trial","href":"/signup"}}
        secondaryButton={{"text":"Explore All Case Studies","href":"/case-studies"}}
        testimonials={[{"name":"Sarah Chen","role":"Operations Manager, Apex Solutions","quote":"FlowSoft transformed our onboarding process. What used to take days of manual data entry now happens automatically in minutes. The best part? We saw results in our first week, and I didn't write a single line of code!","imageSrc":"https://images.unsplash.com/photo-1573496359142-b862b8ce0146?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEzfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDB8fHx8MTcwOTQ1NjU3Nnww&ixlib=rb-4.0.3&q=80&w=1080"},{"name":"David Miller","role":"Head of Marketing, InnovateX","quote":"Integrating our marketing tools with FlowSoft was a game-changer. We've automated lead nurturing and reporting, freeing up countless hours for our team to focus on strategy. It's incredibly powerful yet surprisingly simple to use.","imageSrc":"https://images.unsplash.com/photo-1568602471122-7832951cc4c5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDEwfHxwcm9mZXNzaW9uYWwlMjBtYW58ZW58MHx8fHwxNzA5NDU2NTc2fDA&ixlib=rb-4.0.3&q=80&w=1080"},{"name":"Emily Rodriguez","role":"Finance Director, GlobalTech","quote":"Our financial reporting used to be a bottleneck. FlowSoft allowed us to automate data consolidation and report generation, drastically reducing errors and speeding up our monthly close. It's an indispensable tool for our team now.","imageSrc":"https://images.unsplash.com/photo-1544005313-94ddf0286df2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w0NTMzNXwwfDF8c2VhcmNofDIyfHxwcm9mZXNzaW9uYWwlMjB3b21hbiUyMGhlYWRzaG90fGVufDB8fHx8MTcwOTQ1NjU3Nnww&ixlib=rb-4.0.3&q=80&w=1080"}]}
      />
    </>
  );
}
