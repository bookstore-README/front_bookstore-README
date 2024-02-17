import Image from 'next/image';

import BookCategory from '@/components/book/bookCategory/bookCategory';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import BookRating from '@/components/book/bookRating/bookRating';
import LikeButton from '@/components/button/likeButton';
import Spacing from '@/components/container/spacing/spacing';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';

interface BookDetailInfoProps {
  bookTitle: string;
  categories: [string, string];
  isBookmarked: boolean;
  bookmarkCount: number;
  authors?: string[];
  publisher?: string;
  publishedDate: string;
  averageRating: number;
  reviewCount: number;
  price: number;
}

function BookDetailInfo({
  bookTitle,
  categories,
  isBookmarked,
  bookmarkCount,
  authors,
  publishedDate,
  publisher,
  averageRating,
  reviewCount,
  price,
}: BookDetailInfoProps) {

  const handleBookmarkClick = () => {
  };

  return (
    <article
      role="info"
      className="flex flex-col max-w-[525px] justify-start items-start grow mobile:w-full">
      <BookCategory categories={categories} />
      <Spacing height={[4, 4, 4]} />
      <div className="flex justify-between items-center w-full gap-20">
        <h3 className="font-bold text-[22px] text-gray-4 text-pretty">
          {bookTitle}
        </h3>
        <div className="flex justify-center gap-24">
          <div className="flex-center flex-col">
            <LikeButton
              onClick={handleBookmarkClick}
              isLiked={isBookmarked}
              width={30}
              height={30}
            />
            {bookmarkCount}
          </div>
          <button className="relative w-30 h-30">
            <Image src="/icons/ShareIcon.svg" fill alt="공유 버튼" />
          </button>
        </div>
      </div>
      <Spacing height={[12, 12, 12]} />
      <BookAuthor authorList={authors} />
      <div className="h-[1px] w-full bg-gray-1 max-w-[525px] my-20 mobile:my-12"></div>
      <div className="text-14 text-gray-3">
        {publisher} | {publishedDate}
      </div>
      <Spacing height={[12, 12, 12]} />

      <div role="rating" className="flex gap-6">
        <BookRating rating={averageRating} size="md" />
        <span className="relative top-12 text-gray-3 text-14">
          ({reviewCount})
        </span>
        <span className="text-green font-bold text-[24px]">{averageRating}</span>
      </div>
      <Spacing height={[12, 12, 12]} />
      <BookPrice
        price={price}
        isBold={true}
        fontSize={32}
        fontColor="text-gray-4"
        hasUnit={true}
      />
    </article>
  );
}

export default BookDetailInfo;
