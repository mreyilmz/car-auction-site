import React from "react";
import CountdownTimer from "./CountdownTimer";
import CarImage from "./CarImage";
import { Auction } from "@/types";

type Props = {
  auction: Auction;
};

export default function AuctionCard({ auction }: Props) {
  // Wwe can apply styling for this group inside another component so that when we hover over anything inside this "a" tag, that styling for this group will apply and we're going to use it inside our car image.
  return (
    <a href="" className="group">
      <div className="w-full bg-gray-200 aspect-w-16 aspect-h-10 rounded-lg overflow-hidden">
        <div>
          <CarImage imageUrl={auction.imageUrl} />
          <div className="absolute bottom-2 left-2">
            <CountdownTimer auctionEnd={auction.auctionEnd} />
          </div>
        </div>
      </div>
      <div className="flex justify-between items-center mt-4">
        <h3 className="text-gray-700">
          {auction.make} {auction.model}
        </h3>
        <p className="font-semibold text-sm">{auction.year}</p>
      </div>
    </a>
  );
}
