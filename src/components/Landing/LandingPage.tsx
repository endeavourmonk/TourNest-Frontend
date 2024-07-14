import { Review } from "@/types/Review";
import ReviewCard from "../ui/custom/ReviewCard";
import HeroSection from "./HeroSection";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useGetAllReviewsQuery } from "@/utils/api/tournestApi";

export default function LandingPage() {
  const { data, error, isLoading } = useGetAllReviewsQuery();
  return (
    <div>
      {/* Hero Section */}
      <HeroSection />
      {/* Review Cards */}
      {error ? (
        <>Oh no, there was an error</>
      ) : isLoading ? (
        <>Loading...</>
      ) : data ? (
        <ScrollArea className="w-full whitespace-nowrap">
          <div className="flex space-x-4 p-4">
            {data?.data?.map((review: Review) => (
              <ReviewCard key={review?._id} reviewData={review} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : null}
    </div>
  );
}
