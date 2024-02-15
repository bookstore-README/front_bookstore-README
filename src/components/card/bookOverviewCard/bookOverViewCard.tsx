import { BookOverviewType2 } from '@/types/bookOverviewType';
import { THOUSAND_UNIT } from 'src/constants/price';
import LikeButton from '@/components/button/likeButton';
import { useState } from 'react';
import BookRating from '@/components/book/bookRating/bookRating';
import ActionButton from '@/components/button/actionButton';
import { notify } from '@/components/toast/toast';
import Link from 'next/link';
import { useRouter } from 'next/router';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookTitle from '@/components/book/bookTitle/bookTitle';
import formatDate from '@/hooks/useFormatDate';
import { usePostBasket } from '@/api/basket';

function BookOverviewCard({ book, rank }: BookOverviewType2) {
  const [isLiked, setIsLiked] = useState(false);
  const [likeCount, setIsLikeCount] = useState(book.bookmarkCount);
  const router = useRouter();
  const formattedDate = formatDate(book.publishedDate);

  // 임시로 제가 받은 토큰값을 넣어놨어요. 테스트시 교체해 주세용
  // TODO: 토큰관리 적용하기
  const mutation = usePostBasket({
    bookId: book.bookId,
    token:
      'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJBQ0NFU1NfVE9LRU4iLCJpYXQiOjE3MDc5NzI1MjEsImV4cCI6MTcwODA1ODkyMSwiZW1haWwiOiJ0ZXN0QHRlc3QuY29tIn0.cPnOU9qU2phcdWAQiiYc-kmzjS4f_o-MMLlAhzyTv-6G31Q7AcemGNg2bhaRWaXXbkBu-ok1ZFSC6SHpFwn9ww',
  });

  const handleLikeClick = () => {
    setIsLiked(!isLiked);
    if (!isLiked) setIsLikeCount((prevCount) => prevCount + 1);
    else setIsLikeCount((prevCount) => prevCount - 1);
  };

  const handleAddToCart = () => {
    const data = mutation.mutate();

    console.log(data);
    notify({
      type: 'success',
      text: '장바구니에 담았어요 🛒',
    });
  };

  const handleAddForPayment = () => {
    //TODO
    //1. 유저결제 정보에 저장(상품id 넘겨주기)
    router.push('/payment'); //결제페이지로 이동
  };

  return (
    <div
      role="card-container"
      className="relative flex h-220 flex-col justify-between rounded-xl border-2 border-gray-1
        p-30 mobile:h-251 mobile:w-330 mobile:p-15 mobile:pb-15 tablet:w-[511px]">
      <div role="book-info-container" className="relative flex">
        <Link
          role="book-img"
          href={`bookdetail/${book.bookId}`}
          className="h-170 bg-white mobile:h-134 mobile:min-w-93">
          <PreviewBookInfo
            size="sm"
            image={book.bookImgUrl}
            ranking={rank}
            itemsStart
          />
        </Link>

        <div
          role="book-info"
          className="relative ml-30 mr-auto flex flex-col items-start justify-start 
            gap-4 whitespace-pre-line mobile:ml-12 mobile:max-w-185 mobile:gap-2">
          <div
            role="book-title"
            className="text-overflow2 max-w-500 text-15 font-normal mobile:w-200 tablet:w-250">
            <BookTitle title={book.bookTitle} />
          </div>
          <div
            role="book-author-publisher"
            className="pc:flex-center gap-4 mobile:flex mobile:flex-col tablet:flex tablet:w-150 tablet:flex-col">
            <div className="text-overflow1">
              {book.authors?.map((author) => {
                return (
                  <span key={author} className="text-14 text-gray-3">
                    {author}
                  </span>
                );
              })}
            </div>
            <div className="text-overflow1 mobile:hidden tablet:hidden">
              {book.publisher && (
                <>
                  <span className="mobile:hidden tablet:hidden">| </span>
                  <span className="text-14 text-gray-3">{book.publisher}</span>
                </>
              )}
            </div>
          </div>
          <div>
            <span className="text-14 text-gray-3 mobile:hidden">
              {formattedDate}
            </span>
          </div>

          <div
            role="book-rating"
            className="flex-center mb-8 gap-4 mobile:mb-4">
            <BookRating rating={book.averageRating} size="md" />
            <span className="text-14 text-gray-3 mobile:hidden">
              ({book.reviewCount})
            </span>
          </div>

          <div role="book-category">
            <span className="text-[13px] text-gray-4 tablet:hidden pc:hidden">
              [{book.categories[1]}]
            </span>
          </div>

          <div
            role="book-price"
            className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
            <div role="price-div" className="text-14 font-bold text-black">
              {book.price.toString().replace(THOUSAND_UNIT, ',')}원
            </div>
          </div>
        </div>

        <div
          role="buttons-div"
          className="flex flex-col items-end gap-30 mobile:absolute mobile:bottom-16 mobile:right-0
            tablet:absolute tablet:right-0">
          <div role="like-button" className="flex-center flex-col gap-2">
            <LikeButton onClick={handleLikeClick} isLiked={isLiked} />
            <span className="text-12 text-black">{likeCount}</span>
          </div>
          <div
            role="cart-button"
            className="flex flex-col gap-12 mobile:hidden">
            <ActionButton
              label="장바구니"
              variant="primary"
              onClick={handleAddToCart}
            />
            <ActionButton
              label="구매하기"
              variant="secondary"
              onClick={handleAddForPayment}
            />
          </div>
        </div>
      </div>

      {/* 모바일에서만 보이는 컴포넌트(장바구니/구매하기 버튼)*/}
      <div role="mobile-section" className="pt-10 tablet:hidden pc:hidden">
        <div className="border-b-1 absolute bottom-70 left-0 w-328 border border-gray-1"></div>
        <div role="mobile-cart-button" className="flex gap-10">
          <ActionButton
            label="장바구니"
            variant="primary"
            mobile
            onClick={handleAddToCart}
          />
          <ActionButton
            label="구매하기"
            variant="secondary"
            mobile
            onClick={handleAddForPayment}
          />
        </div>
      </div>
    </div>
  );
}

export default BookOverviewCard;
