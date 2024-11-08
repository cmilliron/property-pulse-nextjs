import React from "react";
import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";
import { convertToSerializableObject } from "@/utils/convertToObject";

async function SearchResultsPage({ searchParams }) {
  const { location, propertyType } = await searchParams;

  await connectDb;

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

  return <div>SearchResultsPage</div>;
}

export default SearchResultsPage;
