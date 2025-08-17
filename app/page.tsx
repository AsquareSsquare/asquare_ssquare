import Hero from "@/components/sections/hero";
import ServicesSection from "@/components/sections/services-section";
import MyTeam from "@/components/sections/my-team";
import Footer from "@/components/sections/footer";

export default function Home() {
  return (
    <>
      <Hero />
      <ServicesSection />
      <MyTeam />
      <div className="h-screen"></div>
      <Footer />
    </>
  );
}
