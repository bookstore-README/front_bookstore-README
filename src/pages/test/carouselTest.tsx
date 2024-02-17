import Carousel from '@/components/carousel/carousel'
import CategoryCarousel from '@/components/carousel/categoryCarousel'
import { carouselMockData, testData } from '@/pages/api/mock/carouselMock'
import { categoryResponsive, responsive } from '@/utils/checkResponsiveEnv'

import React from 'react'

function CarouselTest() {
  return (
    <div>
      {/* <Carousel data={carouselMockData} responsive={responsive}/>
      <Carousel data={testData} responsive={responsive} />      
      <CategoryCarousel data={carouselMockData} responsive={categoryResponsive}></CategoryCarousel>  
      <CategoryCarousel data={testData} responsive={categoryResponsive}></CategoryCarousel> */}
    </div>
  )
}

export default CarouselTest
