import PropertyCard from "@/components/PropertyCard";
import React from "react";
import User from "@/models/User";
import { getSessionUser } from "@/utils/getSessionUser";

async function SavedPropertyPage() {
  const { userId } = await getSessionUser();

  const { bookmarks } = await User.findById(userId).populate("bookmarks");

  return (
    <section className="px-4 py-6">
      <div className="container lg:container m-auto mp-4 py-6 ">
        <h1 className="text-2xl mb-4">Saved Properties</h1>
        {bookmarks.length === 0 ? (
          <NoProperties />
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 m-auto px-4 py-6 gap-4">
            {bookmarks.map((property) => (
              <PropertyCard key={property._id} property={property} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

const NoProperties = () => {
  return <h3>No Saved Properties</h3>;
};

export default SavedPropertyPage;
