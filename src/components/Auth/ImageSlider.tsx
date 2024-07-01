import { useRef } from "react"
// import 
import Autoplay from "embla-carousel-autoplay"
import {
    Carousel,
    CarouselContent,
    CarouselItem
} from "@/components/ui/carousel";

const ImageSlider = () => {
    const pulgin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: true })
    )
  return (
    <div>
        <Carousel
            plugins={[pulgin.current]}
            onMouseEnter={pulgin.current.stop}
            onMouseLeave={pulgin.current.reset}
        >
            <CarouselContent>
                {Array.from({ length: 3 }).map((_, index) => (
                    <CarouselItem key={index}>
                        <img className="h-screen w-screen " src={`/src/assets/images/pexels_${index + 1}.jpg`} alt={`Image ${index + 1}`} />
                    </CarouselItem>
                ))}
            </CarouselContent>
        </Carousel>
    </div>
  )
}

export default ImageSlider

