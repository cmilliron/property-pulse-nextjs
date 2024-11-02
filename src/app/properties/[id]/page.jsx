import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";
import PropertyHeaderImage from "@/components/PropertyHeaderImage";

const PropertyPage = async ({ params }) => {
  await connectDb();
  const property = await Property.findById(await params.id).lean();

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <section>{property.name}</section>
    </>
  );
};

export default PropertyPage;
