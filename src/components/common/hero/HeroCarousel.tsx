import React from 'react';
import Carousel from "@/components/Carousel";

interface HeroCarouselProps {
    autoplay: boolean;
    interval?: number;
}

const HeroCarousel = ({ autoplay, interval }: HeroCarouselProps) => {

    const prevButton = (
        <button className={`m-4 h-8 w-8 rounded-full bg-slate-200`}>
            {'<'}
        </button>
    );

    const nextButton = (
        <button className={"m-4 h-8 w-8 rounded-full bg-slate-200"}>
            {'>'}
        </button>
    );

    return (
        <Carousel
            autoplay={autoplay}
            interval={interval}
            controlClassName={'absolute w-full items-center flex bottom-0'}
            showIndicators={false}
            prevButton={prevButton}
            nextButton={nextButton}
        >
            <div key={1} className="p-4 bg-red-200">
                <h2 className="text-2xl font-bold">Item 1</h2>
                <p>This is the content 1.</p>
            </div>
            <div key={2} className="p-4 bg-green-200">
                <h2 className="text-2xl font-bold">Item 2</h2>
                <p>This is the content 2.</p>
            </div>
            <div key={3} className="p-4 bg-blue-200">
                <h2 className="text-2xl font-bold">Item 3</h2>
                <p>This is the content 3.</p>
            </div>
        </Carousel>
    )
}

export default HeroCarousel;
