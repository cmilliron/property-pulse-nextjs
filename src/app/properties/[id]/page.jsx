async function PropertyDetails({ params }) {
  const { id } = await params;
  return (
    <div>
      <h1>Propoerty Details {id}</h1>
    </div>
  );
}

export default PropertyDetails;
