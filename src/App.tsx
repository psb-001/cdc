import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { Discover } from "./components/Discover";
import { Programs } from "./components/Programs";
import { Community } from "./components/Community";
import { Recap } from "./components/Recap";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <Discover />
      <Programs />
      <Community />
      <Recap />
      <Footer />
    </div>
  );
}
