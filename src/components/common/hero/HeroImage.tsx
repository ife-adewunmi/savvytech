import React from 'react'
import { ImageInterface } from '@/data/hero/heroData'
import clsx from 'clsx';

interface HeroImageProps {
  images: Array<ImageInterface>
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
            className={`h-full rounded-2xl bg-no-repeat ${image.image} ${ image.position || 'bg-contain bg-right'}`}
          />
        ))}
      </div>
    </div>
  )
}

export default HeroImage
