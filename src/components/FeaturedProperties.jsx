import connectDb from "@/config/database";
import React from "react";
import Property from "@/models/PropetySchema";
import FeaturedPropertyCard from "./FeaturedPropertyCard";

async function FeaturedProperties() {
  await connectDb();

  const properties = await Property.find({ is_Featured: true }).lean();

  return (
    <section className="bg-blue-50 px-4 pt-6 pb-10">
      <div className="container-xl lg:container m-auto">
        <h2 className="text-3xl font-bold text-blue-500 mb-6 text-center">
          Featured Properties
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {properties.map((property) => (
            <FeaturedPropertyCard key={property._id} property={property} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default FeaturedProperties;
