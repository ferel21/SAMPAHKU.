import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import MaterialCategories from "@/components/home/MaterialCategories";
import HowItWorks from "@/components/home/HowItWorks";
import SellMaterial from "@/components/home/SellMaterial";
import FactoryPartners from "@/components/home/FactoryPartners";
import Testimonials from "@/components/home/Testimonials";
import TeamMembers from "@/components/home/TeamMembers";
import AboutUs from "@/components/home/AboutUs";
import ContactForm from "@/components/home/ContactForm";

export default function Home() {
  return (
    <div>
      <Hero />
      <Stats />
      <MaterialCategories />
      <HowItWorks />
      <SellMaterial />
      <FactoryPartners />
      <Testimonials />
      <TeamMembers />
      <AboutUs />
      <ContactForm />
    </div>
  );
}
