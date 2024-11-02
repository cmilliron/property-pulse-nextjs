import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";
import Link from "next/link";
import { FaArrowLeft } from "react-icons/fa";

import PropertyHeaderImage from "@/components/PropertyHeaderImage";
import PropertyDetails from "@/components/PropertyDetails";
import BackLink from "@/components/BackLink";

const PropertyPage = async ({ params }) => {
  const { id: propertId } = await params;
  await connectDb();

  const property = await Property.findById(propertId).lean();

  return (
    <>
      <PropertyHeaderImage image={property.images[0]} />
      <BackLink linkDestination="properties" />

      <section className="bg-blue-50">
        <div className="container m-auto py-10 px-6">
          <div className="grid grid-cols-1 md:grid-cols-70/30 w-full gap-6">
            <PropertyDetails property={property} />
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyPage;
