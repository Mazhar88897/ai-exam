import Hero from "@/components/Hero";
import PopularCourses from "@/components/PopularCourses";
import Testimonial from "@/components/Testimonial";
import TopBar from "@/components/TopBar";
import Contact from "@/components/Contact";
import Faq from "@/components/Faq";
import TestCase from "@/components/TestCase";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#ffc928]">
      <TopBar />
      <Hero />
      <PopularCourses />
      <TestCase />
      <Testimonial />
      <Contact />
      <Faq />
      <Footer />
    </main>
  );
}
