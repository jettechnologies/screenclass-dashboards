import {
  HeroSection,
  GradeLevel,
  VideoLibrary,
  PersonalizedSection,
  TestimonialSection,
  Features,
  Services,
  PartnersSection,
  FooterSection,
} from "../../sections/home";
// import PartnersSection from "../sections/new-partners-section";
export const Home = () => {
  return (
    <section className="min-h-screen w-full font-poppins">
      <HeroSection />
      <GradeLevel />
      <VideoLibrary />
      <PersonalizedSection />
      <TestimonialSection />
      <Features />
      <Services />
      <PartnersSection />
      <FooterSection />
    </section>
  );
};
