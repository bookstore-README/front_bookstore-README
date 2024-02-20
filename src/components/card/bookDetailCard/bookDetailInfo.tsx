import Image from 'next/image';

import BookCategory from '@/components/book/bookCategory/bookCategory';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import BookRating from '@/components/book/bookRating/bookRating';
import LikeButton from '@/components/button/likeButton';
import Spacing from '@/components/container/spacing/spacing';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import useFormatDate from '@/hooks/useFormatDate';

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
  const customedPublishedDate = useFormatDate(publishedDate);
  const handleBookmarkClick = () => {};

  return (
    <article
      role="info"
      className="flex max-w-[525px] grow flex-col items-start justify-start mobile:w-full">
      <BookCategory categories={categories} />
      <Spacing height={[4, 4, 4]} />
      <div className="flex w-full items-center justify-between gap-20">
        <h3 className="text-pretty text-[22px] font-bold text-gray-4">
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
          <button className="relative h-30 w-30">
            <Image src="/icons/ShareIcon.svg" fill alt="공유 버튼" />
          </button>
        </div>
      </div>
      <Spacing height={[12, 12, 12]} />
      <BookAuthor authorList={authors} />
      <div className="my-20 h-[1px] w-full max-w-[525px] bg-gray-1 mobile:my-12"></div>
      <div className="text-14 text-gray-3">
        {publisher} | {customedPublishedDate}
      </div>
      <Spacing height={[12, 12, 12]} />

      <div role="rating" className="flex gap-6">
        <BookRating rating={averageRating} size="md" />
        <span className="relative top-12 text-14 text-gray-3">
          ({reviewCount})
        </span>
        <span className="text-primary text-[24px] font-bold">
          {averageRating}
        </span>
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
