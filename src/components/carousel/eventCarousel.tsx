import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface EventCarouselProps {
  eventImages?: (string | StaticImageData)[];
  eventLink?: string;
  classNames: string;
}

function EventCarousel({
  eventImages = [], // 기본값으로 빈 배열 설정
  eventLink = '/',
  classNames,
}: EventCarouselProps) {
  const [currIndex, setCurrIndex] = useState(1); // 시작 인덱스를 1로 설정
  const [currList, setCurrList] = useState<(string | StaticImageData)[]>([]);
  const carouselRef = useRef<HTMLUListElement>(null);

  const updateIndex = (index: number) => {
    setCurrIndex(index + 1);
  };

  useEffect(() => {
    if (eventImages.length) {
      const firstImage = eventImages[0];
      const lastImage = eventImages[eventImages.length - 1];
      // 양 끝에 버퍼 이미지 추가
      const newList = [lastImage, ...eventImages, firstImage];
      setCurrList(newList);
      setCurrIndex(1); // 버퍼 이미지를 고려하여 첫 번째 실제 이미지로 초기화
    }
  }, [eventImages]);

  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${currIndex * 100}%)`;
    }

    function transitionEndHandler() {
      if (carousel)
        if (currIndex === 0) {
          carousel.style.transition = 'none';
          setCurrIndex(eventImages.length);
        } else if (currIndex === eventImages.length + 1) {
          carousel.style.transition = 'none';
          setCurrIndex(1);
        }
    }

    carousel?.addEventListener('transitionend', transitionEndHandler);

    // 클린업 함수
    return () => {
      carousel?.removeEventListener('transitionend', transitionEndHandler);
    };
  }, [currIndex, eventImages.length]);

  console.log(currList);
  return (
    <div
      className={`relative flex flex-col items-center justify-end rounded-[10px] bg-gray-5 ${classNames} `}>
      <div className="flex-center left-30% absolute bottom-20 h-20 w-100 gap-10">
        {eventImages.map((_, idx) => (
          <button
            className="h-10 w-10 rounded-full bg-gray-1 hover:bg-primary active:bg-primary"
            onClick={() => updateIndex(idx)} // 인덱스 + 1로 설정 (첫 번째와 마지막 이미지가 버퍼 역할을 함)
            key={idx}
          />
        ))}
      </div>
      <ul className="flex h-full w-full" ref={carouselRef}>
        {currList.map((image, idx) => (
          <li key={idx} className="flex h-full w-full">
            <Image
              src={image}
              alt={`이벤트 이미지 ${idx}`}
              fill
              objectFit="cover"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default EventCarousel;
