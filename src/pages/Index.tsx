import Header from "../components/Header";
import Hero from "../components/Hero";
import Projects from "../components/Projects";
import Footer from "../components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Projects />
        <iframe 
          src="your-mint-url" 
          className="w-full h-screen" 
          id="mint"
          title="Mint"
        />
        <iframe 
          src="your-itinerary-url" 
          className="w-full h-screen" 
          id="itinerary"
          title="Itinerary"
        />
      </main>
      <Footer />
    </div>
  );
};

export default Index;