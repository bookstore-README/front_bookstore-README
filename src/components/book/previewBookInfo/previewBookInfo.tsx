import Image, { StaticImageData } from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import BookLabel from '@/public/icons/BookLabelIcon.svg';
import { useRef, useState } from 'react';

interface PreviewBookInfoProps {
  image?: string | StaticImageData; // TODO: 테스트 후 수정하기(string타입 필요없을지도?)
  title?: string;
  alignCenter?: boolean;
  authorList?: string[];
  ranking?: number;
  size: 'sm' |'md' | 'lg';
}

function PreviewBookInfo({
  image,
  title,
  authorList,
  ranking,
  alignCenter,
  size = 'md',
}: PreviewBookInfoProps) {
  const bookImageRef = useRef<HTMLImageElement>(null);
  const [isLabelMove, setIsLabelMove] = useState(false);
  const IMAGE_SIZE = {

  lg: {
    width: 'w-192',
    height: 'h-291',
    tabletWidth: 'w-157',
    tabletHeight: 'h-237',
    mobileWidth: 'w-160',
    mobileHeight: 'h-228',
    heightNumber: 291,
    tabletHeightNumber: 237,
    mobileHeightNumber: 228
     
  },
  md: {
    width: 'w-163',
    height: 'h-246',
    tabletWidth: 'w-122',
    tabletHeight: 'h-184',
    mobileWidth: 'w-142',
    mobileHeight: 'h-202',
    heightNumber: 246,
    tabletHeightNumber: 184,
    mobileHeightNumber: 202
  },
  sm: {
    width: 'w-112',
    height: 'h-170',
    tabletWidth: 'w-122',
    tabletHeight: 'h-165',
    mobileWidth: 'w-93',
    mobileHeight: 'h-141',
    heightNumber: 170,
    tabletHeightNumber: 165,
    mobileHeightNumber: 141
  },
};
  const imageSize = IMAGE_SIZE[size];
  
  return (
    <div className={`flex ${imageSize.width} mobile:${imageSize.mobileWidth} tablet:${imageSize.tabletWidth} flex-col`}>
      <div
        className={`${imageSize.height} mobile:${imageSize.mobileWidth} tablet:${imageSize.tabletHeight} flex relative justify-center items-end
          overflow-hidden`}>
        <div className="relative">
          {ranking && (
            <div
              className={`absolute  left-17 ${(isLabelMove && size === 'sm') ? 'top-18' : size === 'md' ? 'top-29 ':'top-[-2px]'}`}>
              <Image
                src={BookLabel}
                alt="베스트셀러 라벨 아이콘"
                width={26}
                height={34}
                ref={bookImageRef}
                onLoad={() => {
                  if (
                    (bookImageRef.current?.height || 0) > imageSize.heightNumber
                  ) setIsLabelMove(true);
                }}
              />
              <span className="text-white text-13 font-bold absolute top-0 left-9">
                {ranking}
              </span>
            </div>
          )}
          <Image
            src={image || DefaultImage}
            alt="책 미리보기 이미지"
            ref={bookImageRef}
          />
        </div>
      </div>
      {title && (
        <p
          className={`text-black text-15 font-medium text-overflow2 mb-4 mt-12 ${
            alignCenter ? 'text-center font-bold' : '' }`}>
          {title}
        </p>
      )}
      {authorList && (
        <>
          <div className='text-gray-3 text-14 hover:text-gray-7 truncate'>
            {authorList.join(', ')}
          </div>
        </>


      )}
    </div>
  );
}
export default PreviewBookInfo;
