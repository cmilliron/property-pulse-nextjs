import Link from "next/link";

// Components
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Footer from "@/components/Footer";
import HomeProperties from "@/components/HomeProperties";

async function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
    </>
  );
}

export default HomePage;
