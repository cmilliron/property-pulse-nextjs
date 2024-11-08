import PropertySearchForm from "./propertySearchForm";

const Hero = () => {
  return (
    <section className="bg-blue-700 py-20 mb-4">
      <div className="max-w7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        <div className="text-center">
          <h1 className="text-4xl font-extrabold text-white sm:text-4xl md:text-6xl">
            Find the Perfect Rental
          </h1>
          <p className="my-4 text-xl text-white">
            Discover the perfect property that suits your needs.
          </p>
        </div>
      </div>
      {/* <!-- Form Component --> */}
      <PropertySearchForm />
    </section>
  );
};

export default Hero;
