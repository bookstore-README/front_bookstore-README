import Image, { StaticImageData } from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import BookLabel from '@/public/icons/BookLabelIcon.svg';
import { useRef, useState } from 'react';
import { IMAGE_SIZE } from 'src/constants/previewBookInfo';

interface PreviewBookInfoProps {
  image?: string | StaticImageData; // TODO: 테스트 후 수정하기(string타입 필요없을지도?)
  title?: string;
  alignCenter?: boolean;
  authorList?: string[];
  ranking?: number;
  size: 'sm' | 'md' | 'lg';
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
  const [imageLoaded, setImageLoaded] = useState(false);

  const imageSize = IMAGE_SIZE[size];

  const handleImageLoaded = () => {
    setImageLoaded(true);
    if ((bookImageRef.current?.height || 0) > imageSize.heightNumber) {
      setIsLabelMove(true);
    }
  };
  console.log(bookImageRef.current?.height);

  return (
    <div
      className={`flex ${imageSize.width} mobile:${imageSize.mobileWidth}
        tablet:${imageSize.tabletWidth} flex-col`}>
      <div
        className={`${imageSize.height} mobile:${imageSize.mobileWidth}
          tablet:${imageSize.tabletHeight} flex relative justify-center items-end`}>
        <div className="relative">
          <div
            className={`flex items-end h-${
              imageLoaded &&
              (bookImageRef.current?.height || 0) > imageSize.heightNumber
                ? `${imageSize.heightNumber - 2}`
                : `${bookImageRef.current?.height}`
            } overflow-hidden`}>
            <Image
              src={image || DefaultImage}
              alt="책 미리보기 이미지"
              ref={bookImageRef}
              onLoad={handleImageLoaded}
            />

            {ranking && (
              <div
                className={`absolute left-17 ${isLabelMove && size !== 'lg' ? 'top-[-3px]' : 'top-[-2px]'}`}>
                <Image
                  src={BookLabel}
                  alt="베스트셀러 라벨 아이콘"
                  width={26}
                  height={34}
                />
                <span
                  className={`text-white text-13 font-bold absolute top-0 left-10 ${
                    ranking > 9 && 'tracking-[-0.5px] left-5'
                  }`}>
                  {ranking}
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
      {title && (
        <p
          className={`text-black text-15 font-medium text-overflow2 mb-4 mt-12 ${
            alignCenter ? 'text-center font-bold' : ''
          }`}>
          {title}
        </p>
      )}
      {authorList && (
        <div className="text-gray-3 text-14 hover:text-gray-7 truncate">
          {authorList.join(', ')}
        </div>
      )}
    </div>
  );
}
export default PreviewBookInfo;
