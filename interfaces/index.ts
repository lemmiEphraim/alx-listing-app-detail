export interface PropertyProps {
  id: string;
  name: string;
  description: string;
  rating: number;
  price: number;
  image: string;
  images: string[];
  category: string[];
  reviews: {
    name: string;
    avatar: string;
    rating: number;
    comment: string;
  }[];
  address: {
    city: string;
    country: string;
  };
}
