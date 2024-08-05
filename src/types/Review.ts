import { User } from "./User";

export interface Review {
  _id: string;
  review: string;
  rating: number;
  tour: string;
  user: User;
  createdAt: string;
  isEdited: boolean;
  updatedAt: string;
}
