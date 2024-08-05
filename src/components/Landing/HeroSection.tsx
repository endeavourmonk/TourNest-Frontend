import TourSelectionCard from "./TourSelectionCard";

export default function HeroSection() {
  return (
    <div className="bg-card-card-foreground border-2 md:border-4 rounded-lg md:rounded-xl m-2 md:m-4 p-4 md:p-8">
      <h1 className="mb-2 font-extralight">Travel With Us</h1>
      <h2 className="font-extralight italic md:text-4xl">
        <span className="font-extrabold">DISCOVER</span> THE WORLD
      </h2>
      <TourSelectionCard />
    </div>
  );
}
