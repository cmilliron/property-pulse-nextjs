import React from "react";
import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";
import { convertToSerializableObject } from "@/utils/convertToObject";
import PropertyCard from "@/components/PropertyCard";
import PropertySearchForm from "@/components/PropertySearchForm";
import { FaArrowAltCircleLeft } from "react-icons/fa";
import Link from "next/link";
import BackLink from "@/components/BackLink";

async function SearchResultsPage({ searchParams }) {
  const { location, propertyType } = await searchParams;

  await connectDb();

  const locationPattern = new RegExp(location, "i");

  let query = {
    $or: [
      { name: locationPattern },
      { "location.street": locationPattern },
      { "location.city": locationPattern },
      { "location.state": locationPattern },
      { "location.zipcode": locationPattern },
    ],
  };

  if (propertyType && propertyType !== "All") {
    const typePattern = new RegExp(propertyType, "i");
    query.type = typePattern;
  }

  const propertiesQueryResults = await Property.find(query).lean();
  const properties = convertToSerializableObject(propertiesQueryResults);

  console.log(properties[0]);

  return (
    <>
      <section className="bg-blue-700 py-4">
        <div className="max-w-7xl mx-auto px-6 flex flex-col items-start sm:px-6 lg:px-8">
          <PropertySearchForm />
        </div>
      </section>
      <section className="px-4">
        <div className="container-xl lg:container m-auto px-4 py-6">
          <BackLink linkDestination="/properties" />
          {properties.length === 0 ? (
            <h3>No results match your query.</h3>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {properties.map((property) => (
                <PropertyCard key={property._id} property={property} />
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  );
}

export default SearchResultsPage;
