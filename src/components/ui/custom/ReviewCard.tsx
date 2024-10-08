import React, { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { FaQuoteLeft } from "react-icons/fa";
import { Review } from "@/types/Review";
import RatingStars from "./RatingStars";

interface ReviewCardProps {
  reviewData: Review;
}

const ReviewCard: React.FC<ReviewCardProps> = ({ reviewData }) => {
  const [isExpanded, setIsExpanded] = useState<boolean>(false);
  console.log("reviewData--------", reviewData);
  const { review, rating, user, createdAt } = reviewData;
  const { name, photo } = user;

  const toggleReview = () => {
    setIsExpanded(!isExpanded);
  };

  const truncateReview = (text: string, maxLength: number = 40): string => {
    if (text.length > maxLength) {
      return text.substring(0, maxLength) + "...";
    }
    return text;
  };

  return (
    <Card className="w-80 lg:w-96 mx-auto rounded-xl shadow-md overflow-hidden border-none">
      <CardContent className="p-2">
        <CardHeader className="flex-row justify-between items-center">
          <FaQuoteLeft className="text-4xl" />
          <div className="flex items-center space-x-4">
            <Avatar>
              <AvatarImage src={photo} />
              <AvatarFallback>{name.charAt(0)}</AvatarFallback>
            </Avatar>
            <CardTitle>{name}</CardTitle>
          </div>
        </CardHeader>

        <CardDescription className="px-6 text-card-foreground">
          {isExpanded ? review : truncateReview(review, 50)}
          {review.length > 50 && (
            <span
              onClick={toggleReview}
              className="pl-2 font-bold underline cursor-pointer"
            >
              {isExpanded ? "Read Less" : "Read More"}
            </span>
          )}
        </CardDescription>

        <CardFooter className="mt-2">
          <div>
            <RatingStars rating={rating} />
            <div className="text-gray-400 text-sm">
              {new Date(createdAt).toLocaleDateString()}
            </div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ReviewCard;
