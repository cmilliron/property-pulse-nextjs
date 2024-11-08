import PropertyEditForm from "@/components/PropertyEditForm";
import React from "react";
import connectDb from "@/config/database";
import Property from "@/models/PropetySchema";
import { convertToSerializableObject } from "@/utils/convertToObject";

async function EditPage({ params }) {
  await connectDb();

  const propertydoc = await Property.findById(await params.id).lean();
  const property = convertToSerializableObject(propertydoc);

  if (!property) {
    return (
      <h1 className="text-center text-2xl font-bold mt-10">
        Property Not Found
      </h1>
    );
  }
  return (
    <section className="bg-blue-50">
      <div className="container m-auto max-2-2xl py-24">
        <div className="bg-white px-6 py-8 mb-4 shadow-md rounded-md">
          <PropertyEditForm property={property} />
        </div>
      </div>
    </section>
  );
}

export default EditPage;
