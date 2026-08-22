import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { FeatureCards } from "./components/FeatureCards";
import { CourseTracks } from "./components/CourseTracks";
import { Experience } from "./components/Experience";
import { Testimonials } from "./components/Testimonials";
import { Instructors } from "./components/Instructors";
import { Newsletter } from "./components/Newsletter";
import { Footer } from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-sans overflow-x-hidden">
      <div className="bg-[#FDFBF7] pb-24 border-b border-gray-100">
        <Navbar />
        <Hero />
      </div>

      <div className="-mt-16 relative z-20">
        <FeatureCards />
      </div>

      <CourseTracks />
      <Experience />
      <Testimonials />
      <Instructors />
      <Newsletter />
      <Footer />
    </div>
  );
}

export default App;