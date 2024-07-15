import { Review } from "@/types/Review";
import ReviewCard from "../ui/custom/ReviewCard";
import HeroSection from "./HeroSection";
import { ScrollArea, ScrollBar } from "@/components/ui/scroll-area";

import { useGetAllReviewsQuery } from "@/utils/api/tournestApi";
import Footer from "../ui/custom/Footer";
import ShimmerReviewCard from "../ui/custom/ShimmerReviewCard";

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
        <ScrollArea className="w-full m-4">
          <div className="flex space-x-4 py-4">
            {[...Array(8)].map((_, i) => (
              <ShimmerReviewCard key={i} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : data ? (
        <ScrollArea className="w-full m-4">
          <div className="flex space-x-4 py-4">
            {data?.data?.map((review: Review) => (
              <ReviewCard key={review?._id} reviewData={review} />
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      ) : null}
      {/* Footer */}
      <Footer />
    </div>
  );
}
