import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';

interface EventCarouselProps {
  eventImages?: (string | StaticImageData)[];
  classNames: string;
}

function EventCarousel({ eventImages = [], classNames }: EventCarouselProps) {
  const [currIndex, setCurrIndex] = useState(1); // 시작 인덱스를 1로 설정
  const [currList, setCurrList] = useState<(string | StaticImageData)[]>([]);
  const [ButtonActiveIndex, setButtonActiveIndex] = useState(-1);
  const carouselRef = useRef<HTMLUListElement>(null);

  const updateIndex = (index: number) => {
    setCurrIndex(index + 1);
    setButtonActiveIndex(index);
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

  // 이미지 부드럽게 이동시키기
  useEffect(() => {
    const carousel = carouselRef.current;

    if (carousel) {
      carousel.style.transition = 'transform 0.5s ease-in-out';
      carousel.style.transform = `translateX(-${currIndex * 100}%)`;
    }
    // 첫 이미지와 마지막 이미지 일때
    // function transitionEndHandler() {
    //   if (carousel)
    //     if (currIndex === 0) {
    //       carousel.style.transition = 'none';
    //       setCurrIndex(eventImages.length);
    //     } else if (currIndex === eventImages.length + 1) {
    //       carousel.style.transition = 'none';
    //       setCurrIndex(1);
    //     }
    // }

    // carousel?.addEventListener('transitionend', transitionEndHandler);

    // // 클린업 함수
    // return () => {
    //   carousel?.removeEventListener('transitionend', transitionEndHandler);
    // };
  }, [currIndex, eventImages.length]);

  return (
    <div
      className={`relative flex flex-col items-center justify-end rounded-[10px] bg-gray-5 ${classNames} overflow-x-hidden`}>
      <div className="flex-center left-30% absolute bottom-20 z-10 h-20 w-100 gap-10">
        {eventImages.map((_, idx) => (
          <button
            className={`h-10 w-10 rounded-full bg-gray-1 hover:bg-primary active:bg-primary ${ButtonActiveIndex === idx ? 'bg-primary' : ''}`}
            onClick={() => updateIndex(idx)}
            key={idx}
          />
        ))}
      </div>
      <ul
        className="relative flex h-full w-full scroll-smooth transition-transform"
        ref={carouselRef}>
        {currList.map((image, idx) => (
          <li key={idx} className="relative flex w-full flex-shrink-0">
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
