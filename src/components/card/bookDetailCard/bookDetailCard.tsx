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
  publishedAt: string;
  publisher: string;
  averageRating: number;
  reviewNum: number;
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
  publishedAt,
  publisher,
  averageRating,
  reviewNum,
  orderCount,
  setOrderCount,
}: BookDetailCardProps) {
  return (
    <section className="flex justify-start gap-20 items-start mobile:flex-col mobile:flex-center">
      <BookDetailImg imageUrl={bookImgUrl} />
      <article
        role="info"
        className="flex flex-col gap-57 justify-start items-start mobile:w-full">
        <BookDetailInfo
          title={bookTitle}
          categoryList={categories}
          authors={authors}
          isBookmarked={isBookmarked}
          bookmarkNum={bookmarkCount}
          publishedAt={publishedAt}
          publisher={publisher}
          rating={averageRating}
          reviewNum={reviewNum}
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
