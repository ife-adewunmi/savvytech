import React from 'react'
import {ImageInterface} from "@/data/hero/heroData";

interface HeroImageProps {
  images: Array<ImageInterface>
  imagePosition?: string
  gridCols?: number
}

const HeroImage = ({ images, gridCols }: HeroImageProps) => {
  const gridCol = gridCols || 2

  return (
    <div className="h-full">
      <div className={`grid h-full grid-cols-${gridCol} gap-4`}>
        {images.map((image, index) => (
          <div
            key={index}
            className={`h-full rounded-2xl ${image.img} bg-contain ${image.pos}  bg-no-repeat`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroImage
