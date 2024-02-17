/** 책 상세페이지에 들어갈 카드 컴포넌트 */

import BookDetailImg from './bookDetailImg';
import BookDetailInfo from './bookDetailInfo';
import StaticOrderNavigator from '@/components/orderNavigator/staticOrderNavigator';

interface BookDetailCardProps {
  bookId: string;
  bookImgUrl: string;
  bookTitle: string;
  price: number;
  categories: [string, string];
  authors: string[];
  bookmarkCount: number;
  isBookmarked: boolean;
  publishedDate: string;
  publisher: string;
  averageRating: number;
  reviewCount: number;
  orderCount: number;
  setOrderCount: (n: number) => void;
}

function BookDetailCard({
  bookId,
  bookImgUrl,
  bookTitle,
  price,
  categories,
  authors,
  bookmarkCount,
  isBookmarked,
  publishedDate,
  publisher,
  averageRating,
  reviewCount,
  orderCount,
  setOrderCount,
}: BookDetailCardProps) {
  return (
    <section className="flex justify-start gap-20 items-start mobile:flex-col mobile:flex-center">
      <BookDetailImg imageUrl={bookImgUrl} />
      <article
        role="info"
        className="flex flex-col gap-40 mobile:gap-30 justify-start items-start w-full max-w-[525px]">
        <BookDetailInfo
          bookTitle={bookTitle}
          categories={categories}
          authors={authors}
          isBookmarked={isBookmarked}
          bookmarkCount={bookmarkCount}
          publishedDate={publishedDate}
          publisher={publisher}
          averageRating={averageRating}
          reviewCount={reviewCount}
          price={price}
        />
        <StaticOrderNavigator
          bookId={bookId}
          price={price}
          orderCount={orderCount}
          setOrderCount={setOrderCount}
        />
      </article>
    </section>
  );
}

export default BookDetailCard;
