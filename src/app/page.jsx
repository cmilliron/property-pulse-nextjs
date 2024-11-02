import Link from "next/link";

// Components
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import HomeProperties from "@/components/HomeProperties";

import { fetchProperties } from "@/utils/ requests";

async function HomePage() {
  return (
    <>
      <Hero />
      <InfoBoxes />
      <HomeProperties />
      <Footer />
    </>
  );
}

export default HomePage;
