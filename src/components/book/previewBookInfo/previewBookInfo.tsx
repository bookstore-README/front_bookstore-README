import Image from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover4.jpeg';
import BookLabel from '@/public/icons/BookLabelIcon.svg';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';

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
  const IMAGE_SIZE = {
    lg: {
      width: 'w-192',
      height: 'h-291',
    },
    md: {
      width: 'w-163',
      height: 'h-246',
    },
  };
  return (
    <div className={`flex ${IMAGE_SIZE[size].width} flex-col`}>
      <div
        className={`${IMAGE_SIZE[size].height} flex relative justify-center items-end border
          border-1 border-black`}>
        <div className="relative">
          {ranking && (
            <div className="absolute top-[-2px] left-17">
              <Image
                src={BookLabel}
                alt="베스트셀러 라벨 아이콘"
                width={26}
                height={34}
                className="z-20"
              />
              <span className="text-white text-13 font-bold absolute top-0 left-9 z-20">
                {ranking}
              </span>
            </div>
          )}
          <Image src={image || DefaultImage} alt="책 미리보기 이미지" />
        </div>
      </div>
      {title && (
        <p className="text-black text-15 font-medium text-overflow2 mb-4 mt-12">
          {title}
        </p>
      )}
      {authorList && (
        <div className="text-overflow2">
          <BookAuthor
            authorList={authorList}
            classNames={`flex flex-start ${IMAGE_SIZE[size].width} text-overflow2`}
          />
        </div>
      )}
    </div>
  );
}
export default PreviewBookInfo;
