// import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";
import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";

async function ProperitiesPage() {
  // const properties = await fetchProperties();
  await connectDb();
  const properties = await Property.find({}).lean();
  console.log(`Returned ${properties.length} properties`);
  properties.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
  return (
    <section className="px-4 py-6">
      <div className="container-xl lg:container m-auto px-4 py-6">
        {properties.length === 0 ? (
          <p>No Properties Found</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {properties.map((property) => (
              <PropertyCard property={property} key={property._id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}

export default ProperitiesPage;
