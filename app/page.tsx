import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services-section";
import MyTeam from "@/components/sections/my-team";
import Footer from "@/components/sections/footer";
import Testimonials from "@/components/sections/testimonials";

export default function Home() {
  console.log(navigator.userAgent.toLowerCase());
  return (
    <>
      <Hero />
      <ServicesSection />
      <MyTeam />
      <Testimonials />
      <Footer />
    </>
  );
}
