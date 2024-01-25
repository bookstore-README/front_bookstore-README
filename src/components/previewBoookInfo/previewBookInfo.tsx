import Image from 'next/image';
import DefaultImage from '@/public/images/SampleBookCover3.jpeg';
import DefaultImage2 from '@/public/images/SampleBookCover1.jpeg';
import BookLabel from '@/public/icons/BookLabelIcon.svg';

interface PreviewBookInfoProps {
  image?: string;
  title: string;
  author: string;
  ranking: number;
}

function PreviewBookInfo({
  image,
  title,
  author,
  ranking,
}: PreviewBookInfoProps) {
  return (
    <div className="w-200">
      <div className="flex flex-col h-303 justify-end">
        <div className="relative">
          <Image
            src={BookLabel}
            alt="책 라벨 아이콘"
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
        <Image
          src={image || DefaultImage}
          width={200}
          height={303}
          alt="책 미리보기 이미지"
        />
      </div>
      <p className="text-black text-15 font-medium">{title}</p>
      <p className="text-gray-3 text-14">{author}</p>
    </div>
  );
}
export default PreviewBookInfo;
