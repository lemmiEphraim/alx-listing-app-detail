import { PropertyProps } from "@/interfaces/index";
import BookingSection from "./BookingSection";
import ReviewSection from "./ReviewSection";

const PropertyDetail: React.FC<{ property: PropertyProps }> = ({ property }) => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Left Column */}
        <div className="lg:w-2/3">
          <h1 className="text-3xl font-bold">{property.name}</h1>
          <div className="flex items-center space-x-2 mt-2">
            <span className="text-yellow-500">★ {property.rating}</span>
            <span>{property.address.city}, {property.address.country}</span>
          </div>

          {/* Image Grid */}
          <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
            <img 
              src={property.image} 
              alt={property.name} 
              className="w-full h-64 md:h-96 object-cover rounded-lg col-span-2" 
            />
            {property.images.slice(1).map((img, i) => (
              <img 
                key={i} 
                src={img} 
                alt={`Property ${i}`} 
                className="w-full h-64 object-cover rounded-lg" 
              />
            ))}
          </div>

          {/* Description */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">About this place</h2>
            <p className="mt-2 text-gray-700">{property.description}</p>
          </div>

          {/* Amenities */}
          <div className="mt-8">
            <h2 className="text-2xl font-semibold">What this place offers</h2>
            <div className="mt-4 grid grid-cols-2 md:grid-cols-3 gap-4">
              {property.category.map((amenity, index) => (
                <div key={index} className="flex items-center space-x-2">
                  <span className="text-green-500">✓</span>
                  <span>{amenity}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Reviews */}
          <ReviewSection reviews={property.reviews} />
        </div>

        {/* Right Column - Booking Section */}
        <div className="lg:w-1/3 lg:sticky lg:top-4 lg:self-start">
          <BookingSection price={property.price} />
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
