import Image from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import BookLabel from '@/public/icons/BookLabelIcon.svg';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { useRef, useState } from 'react';
import { IMAGE_SIZE } from 'src/constants/bookInfo';

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
  const imageSize = IMAGE_SIZE[size];

  return (
    <div className={`flex ${imageSize.width} flex-col`}>
      <div
        className={`${imageSize.height} flex relative justify-center items-end border border-1
          overflow-hidden`}>
        <div className="relative">
          {ranking && (
            <div
              className={`absolute  left-17 ${isLabelMove ? 'top-29 ' : 'top-[-2px]'}`}>
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
            size === 'md' ? 'text-center font-bold' : ''
          }`}>
          {title}
        </p>
      )}
      {authorList && (
          <BookAuthor
            authorList={authorList}
            classNames={`flex ${size === 'md' ? 'flex-center' : ''} ${imageSize.width} text-overflow2`}
          />
      )}
    </div>
  );
}
export default PreviewBookInfo;
