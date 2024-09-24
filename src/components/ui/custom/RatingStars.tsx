import React from "react";
import { FaRegStar } from "react-icons/fa"; // empty star
import { FaStar } from "react-icons/fa"; // full star
import { FaRegStarHalfStroke } from "react-icons/fa6"; // half star

const RatingStars: React.FC<{ rating: number }> = ({ rating }) => {
  const totalStars = 5;
  const stars = [];

  for (let i = 0; i < totalStars; i++) {
    if (i < Math.floor(rating)) {
      // rendering full ratings
      stars.push(<FaStar key={i} />);
    } else if (i < rating) {
      // rendering half stars
      stars.push(<FaRegStarHalfStroke />);
    } else {
      // rendering emtpy stars
      stars.push(<FaRegStar key={i} />);
    }
  }

  return <div className="flex space-x-1 text-yellow-500 mb-4">{stars}</div>;
};

export default RatingStars;
