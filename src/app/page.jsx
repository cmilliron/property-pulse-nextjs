import Link from "next/link";

// Components
import Hero from "@/components/Hero";
import InfoBoxes from "@/components/InfoBoxes";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";

import { fetchProperties } from "@/utils/ requests";

async function HomePage() {
  const properties = await fetchProperties();
  const recentProperties = properties
    .sort(() => Math.random() - Math.random())
    .slice(0, 3);

  return (
    <>
      <Hero />
      <InfoBoxes />
      <section className="px-4 py-6">
        <div className="container-xl lg:container m-auto">
          <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
            Recent Properties
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {recentProperties.map((property) => (
              <PropertyCard property={property} key={property._id} />
            ))}
          </div>
        </div>
      </section>
      <section className="m-auto max-w-lg my-10 px-6">
        <Link
          href="/properties"
          className="block bg-black text-white text-center py-4 px-6 rounded-xl hover:bg-gray-700"
        >
          View All Properties
        </Link>
      </section>
      <Footer />
    </>
  );
}

export default HomePage;
