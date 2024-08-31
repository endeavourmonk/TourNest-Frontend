import { User } from "./User";

export interface Tour {
  _id: string;
  name: string;
  duration: number;
  maxGroupSize: number;
  difficulty: string;
  price: number;
  discount: number;
  rating: number;
  totalRatings: number;
  description: string;
  summary: string;
  imageCover: string;
  images: string[];
  startDates: string[];
  createdAt: string;
  premium: boolean;
  startLocation: Location;
  locations: Location[];
  guides: User[];
  slug: string;
  durationWeeks: number;
  id?: string; // Alias for _id (optional)
}

interface Location {
  type: "Point";
  coordinates: number[]; // [longitude, latitude]
  address: string;
  city: string;
  state: string;
  country: string;
  description: string;
  day: number;
  _id?: string; // Optional property
}
