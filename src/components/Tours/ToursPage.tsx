import React from "react";
import TourCard from "./TourCard";
import { useGetAllToursQuery } from "@/utils/api/tournestApi";
import { Tour } from "@/types/Tour";
import TourShimmerCard from "./TourShimmerCard";

const AllToursPage: React.FC = () => {
  const { data, error, isLoading } = useGetAllToursQuery();

  if (error) {
    return <div>Error</div>;
  }

  if (isLoading) {
    return (
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {Array(8)
          .fill(null)
          .map((_, i) => (
            <TourShimmerCard key={i} />
          ))}
      </div>
    );
  }
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {data?.data?.map((tour: Tour) => (
        <TourCard key={tour._id} {...tour} />
      ))}
    </div>
  );
};

export default AllToursPage;
