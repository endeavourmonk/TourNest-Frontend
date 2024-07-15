import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";

import { FaQuoteLeft } from "react-icons/fa";
import { FaStar } from "react-icons/fa"; // full star

const ShimmerReviewCard: React.FC = () => {
  return (
    <Card className="w-80 lg:w-96 mx-auto rounded-xl shadow-md overflow-hidden border-none ">
      <CardContent className="p-2 animate-pulse">
        <CardHeader className="flex-row justify-between items-center">
          <FaQuoteLeft className="text-gray-300 text-4xl" />
          <div className="flex items-center space-x-4">
            <div className="bg-gray-300 h-12 w-12 rounded-full"></div>
            <div className="bg-gray-300 h-6 w-24 rounded"></div>
          </div>
        </CardHeader>
        <CardDescription className="px-6 text-card-foreground">
          <div className="bg-gray-300 h-6 w-2/3 rounded"></div>
        </CardDescription>
        <CardFooter className="mt-2">
          <div>
            <div className="flex space-x-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <div key={i} className=" h-4 w-4">
                  <FaStar className="text-gray-300" />
                </div>
              ))}
            </div>
            <div className="bg-gray-300 h-6 w-12 rounded"></div>
          </div>
        </CardFooter>
      </CardContent>
    </Card>
  );
};

export default ShimmerReviewCard;
