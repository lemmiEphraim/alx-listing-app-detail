export const PROPERTYLISTINGSAMPLE: PropertyProps[] = [
  {
    id: "1",
    name: "Modern Beachfront Villa",
    description: "Beautiful villa with ocean view and private beach access...",
    rating: 4.8,
    price: 250,
    image: "/images/beach-villa.jpg",
    images: ["/images/beach-villa.jpg", "/images/living-room.jpg", "/images/bedroom.jpg"],
    category: ["Wifi", "Pool", "Kitchen", "Parking"],
    reviews: [
      {
        name: "John Doe",
        avatar: "/avatars/john.jpg",
        rating: 5,
        comment: "Amazing place with stunning views!"
      }
    ],
    address: {
      city: "Malibu",
      country: "USA"
    }
  }
];
