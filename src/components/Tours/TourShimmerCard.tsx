import React from "react";

const TourShimmerCard: React.FC = () => {
  return (
    <div className="shadow-lg rounded-lg overflow-hidden bg-white animate-pulse">
      <div className="bg-gray-200 h-48 w-full"></div>
      <div className="p-4 space-y-2">
        <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        <div className="h-4 bg-gray-200 rounded w-3/4"></div>

        <div className="mt-2 flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/6"></div>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
        </div>

        <div className="mt-2 flex justify-between items-center">
          <div className="h-4 bg-gray-200 rounded w-1/4"></div>
          <div className="h-4 bg-gray-200 rounded w-1/3"></div>
        </div>

        <div className="mt-2 h-4 bg-gray-200 rounded w-2/3"></div>
      </div>
    </div>
  );
};

export default TourShimmerCard;
