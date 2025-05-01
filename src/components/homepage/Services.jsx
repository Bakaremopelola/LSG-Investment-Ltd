import salesImage from "../../assets/Frame76.png";
import developmentImage from "../../assets/Frame77.png";
import consultancyImage from "../../assets/Frame78.png";

const OurServices = () => {
  return (
    <section className="px-4 sm:px-6 lg:px-20 py-12 lg:py-20 bg-gray-50 w-full">
      {/* Title */}
      <div className="text-center mb-8 lg:mb-12 max-w-4xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          Our Services
        </h2>
        <p className="text-gray-600 text-base sm:text-lg lg:text-xl">
          At LSG Investment Limited, we offer comprehensive real estate solutions
          designed to empower our clients with the knowledge and support they need
          to achieve their property goals with confidence.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
        {/* Sales */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={salesImage}
              loading="lazy"
              alt="Sales"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Sales
            </h3>
          </div>
        </div>

        {/* Development */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={developmentImage}
              loading="lazy"
              alt="Development"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Development
            </h3>
          </div>
        </div>

        {/* Consultancy */}
        <div className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow duration-300">
          <div className="aspect-w-16 aspect-h-9">
            <img
              src={consultancyImage}
              loading="lazy"
              alt="Consultancy"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="p-6">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Consultancy
            </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;