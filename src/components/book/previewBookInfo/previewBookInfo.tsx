import Image from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import BookLabel from '@/public/icons/BookLabelIcon.svg';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { useRef, useState } from 'react';

interface PreviewBookInfoProps {
  image?: string;
  title: string;
  authorList: string[];
  ranking?: number;
  size: 'md' | 'lg';
}

function PreviewBookInfo({
  image,
  title,
  authorList,
  ranking,
  size = 'md',
}: PreviewBookInfoProps) {
  const bookImageRef = useRef<HTMLImageElement>(null);
  const [isLabelMove, setIsLabelMove] = useState(false);
  const IMAGE_SIZE = {
    lg: {
      width: 'w-192',
      height: 'h-291',
      heightNumber: 291,
    },
    md: {
      width: 'w-163',
      height: 'h-246',
      heightNumber: 246,
    },
  };
  const imageSize = IMAGE_SIZE[size];

  return (
    <div className={`flex ${imageSize.width} flex-col`}>
      <div
        className={`${imageSize.height} flex relative justify-center items-end border border-1
          overflow-hidden`}>
        <div className="relative">
          {ranking && (
            <div
              className={`absolute top-[-2px] left-17 ${isLabelMove ? 'top-29 left-17' : ''}`}>
              <Image
                src={BookLabel}
                alt="베스트셀러 라벨 아이콘"
                width={26}
                height={34}
                ref={bookImageRef}
                onLoad={() => {
                  if (
                    (bookImageRef.current?.height || 0) > imageSize.heightNumber
                  ) {
                    setIsLabelMove(true);
                  }
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
            size === 'md' ? 'text-center font-bold' : ''
          }`}>
          {title}
        </p>
      )}
      {authorList && (
        <div className={`text-overflow2 ${size === 'md' ? 'text-center' : ''}`}>
          <BookAuthor
            authorList={authorList}
            classNames={`flex flex-start ${imageSize.width} text-overflow2`}
          />
        </div>
      )}
    </div>
  );
}
export default PreviewBookInfo;
