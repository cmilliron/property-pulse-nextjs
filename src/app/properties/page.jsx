// import properties from "@/properties.json";
import PropertyCard from "@/components/PropertyCard";

async function fetchProperties() {
  try {
    const res = await fetch("http://localhost:3000/api/properties", {
      cache: "no-store",
    });
    console.log(res);
    if (!res.ok) {
      throw new Error("Failed to fect data");
    }
    console.log("** in fetchProperties **");
    // console.log(await res.json());
    return await res.json();
  } catch (error) {
    console.log(error);
  }
}

async function ProperitiesPage() {
  const properties = await fetchProperties();
  console.log("** in PropertiesPage funcation after call **");
  console.log(properties);
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
