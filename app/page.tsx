import NavBar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Body from "./components/Body/Body";
import Footer from "./components/Footer/Footer";

export default function Home() {
  return (
    <main>
      <NavBar />
      <Hero />
      <Body />
      <Footer />
    </main>
  );
}