import Image from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover1.jpeg';
import BookLabel from '@/public/icons/BookLabelIcon.svg';
import BookAuthor from '../bookComponents/bookAuthor/bookAuthor';

interface PreviewBookInfoProps {
  image?: string;
  title: string;
  authorList: string[];
  ranking?: number;
  maxWidth: number;
  maxHeight: number;
}
//작가는 string
function PreviewBookInfo({
  image,
  title,
  authorList,
  ranking,
  maxWidth,
  maxHeight,
}: PreviewBookInfoProps) {
  return (
    <div className={`w-${maxWidth}`}>
      <div className={`flex flex-col h-${maxHeight} justify-end items-center`}>
        {ranking && (
          <div className="relative">
            <Image
              src={BookLabel}
              alt="베스트셀러 라벨 아이콘"
              width={26}
              height={34}
              className="absolute top-[-2px] left-8"
            />
            <div className="relative">
              <span className="text-white text-13 font-bold absolute left-17">
                {ranking}
              </span>
            </div>
          </div>
        )}
        <Image
          src={image || DefaultImage}
          alt="책 미리보기 이미지"
          objectFit="cover"
          width={maxWidth}
          height={maxHeight}
        />
      </div>

      {title && <p className="text-black text-15 font-medium">{title}</p>}
      <BookAuthor
        authorList={authorList}
        classNames={`flex flex-start w-${maxWidth}`}
      />
    </div>
  );
}
export default PreviewBookInfo;
