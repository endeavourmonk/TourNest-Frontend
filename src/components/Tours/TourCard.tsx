import React from "react";

type TourProps = {
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
  startLocation: {
    city: string;
    state: string;
    country: string;
  };
  premium: boolean;
};

const TourCard: React.FC<TourProps> = ({
  name,
  duration,
  maxGroupSize,
  difficulty,
  price,
  discount,
  rating,
  totalRatings,
  summary,
  imageCover,
  startLocation,
  premium,
}) => {
  const discountedPrice = price - discount;

  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white">
      <img src={imageCover} alt={name} className="w-full h-48 object-cover" />
      <div className="p-4">
        {premium && <span className="text-sm text-yellow-500">Premium</span>}
        <h2 className="text-xl font-semibold">{name}</h2>
        <p className="text-gray-500">{summary}</p>

        <div className="mt-2 flex justify-between items-center">
          <p className="text-lg font-bold text-green-500">${discountedPrice}</p>
          {discount > 0 && (
            <p className="line-through text-sm text-gray-400">${price}</p>
          )}
        </div>

        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm text-gray-600">{duration} days</p>
          <p className="text-sm text-gray-600">Group: {maxGroupSize}</p>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <p className="text-sm text-gray-600">Difficulty: {difficulty}</p>
          <p className="text-sm text-gray-600">
            Rating: {rating} ({totalRatings} reviews)
          </p>
        </div>

        <div className="mt-2 text-sm text-gray-600">
          Location: {startLocation.city}, {startLocation.state},{" "}
          {startLocation.country}
        </div>
      </div>
    </div>
  );
};

export default TourCard;
