import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';
import { useQuery, useQueryClient } from '@tanstack/react-query';

import { useGetBook, usePutBook } from '@/api/book';
import { getIsBookmarked } from '@/api/bookmark';
import MainLayout from '@/components/layout/mainLayout';
import BookDetailCard from '@/components/card/bookDetailCard/bookDetailCard';
import BookDetailNav from '@/components/button/bookDetailNav';
import RefundTerm from '@/components/container/refundTerm/refundTerm';
import BookInformation from '@/components/book/bookInformation/bookInformation';
import Review from '@/components/review/review';
import Spacing from '@/components/container/spacing/spacing';
import SideOrderNavigator from '@/components/orderNavigator/sideOrderNavigator';
import FooterOrderNavitgator from '@/components/orderNavigator/footerOrderNavitgator';
import SkeletonBookDetailCard from '@/components/skeleton/bookDetailCard/skeleton';
import { useUpdateBookmark } from '@/hooks/api/useUpdateBookmark';
import { useAtom } from 'jotai';
import { CurrentPageArrayIndexAtom, CurrentPageStateAtom } from '@/store/state';

type BookDetailNavLocationType = 'information' | 'review' | 'currency';

export default function BookDetailPage() {
  const router = useRouter();
  const { status } = useSession();
  const { bookId } = router.query;

  // 페이지 하단 상품정보, 리뷰, 배송교환환불 탭을 나타내는 state
  const [location, setLocation] =
    useState<BookDetailNavLocationType>('information');
  // 책 구매 수량 state
  const [orderCount, setOrderCount] = useState(1);
  const [currentPageArray, setCurrentPageArray] = useAtom(
    CurrentPageArrayIndexAtom,
  );
  const [currentPageState, setCurrentPageState] = useAtom(CurrentPageStateAtom);
  setCurrentPageArray(0);
  setCurrentPageState(1);
  const queryClient = useQueryClient();

  const { data, isLoading, isError } = useGetBook({
    endpoint: `${bookId}/detail`,
    params: {
      bookId: String(bookId),
    },
    enabled: !!bookId,
  });

  // 로그인 한 상태라면 찜 여부 체크하기
  const { data: bookmarkData } = useQuery({
    queryKey: ['book', 'bookmark'],
    queryFn: () => getIsBookmarked(String(bookId)),
    enabled: !!(status === 'authenticated' && bookId),
  });

  let bookData = data?.data;
  const [isBookmarked, setIsBookMarked] = useState(bookmarkData?.marked);
  const [bookmarkCount, setBookmarkCount] = useState(bookData?.bookmarkCount);

  const { updateBookmark, isBookmarkPending } = useUpdateBookmark({
    bookId: Number(bookId),
    onChangeBookmarkCount: () => {
      if (isBookmarked) {
        setBookmarkCount(bookmarkCount - 1);
      } else {
        setBookmarkCount(bookmarkCount + 1);
      }
    },
    onChangeBookmarked: (prevState) => setIsBookMarked(prevState),
  });

  const { mutate: handleViewCountMutate } = usePutBook({
    bookId: Number(bookId),
  });

  useEffect(() => {
    if (isError) {
      router.push('/404');
    }
    if (status === 'authenticated') {
      // 로그인 한 상태라면 조회수 1 증가
      handleViewCountMutate();
    }
    queryClient.invalidateQueries({
      queryKey: ['book'],
    });
  }, [status, isError]);

  return (
    <MainLayout>
      <section className="flex-center flex w-full max-w-[1200px] gap-34 p-40 mobile:flex-col mobile:p-19">
        {isLoading || isError || !data ? (
          <SkeletonBookDetailCard />
        ) : (
          <BookDetailCard
            bookId={bookId as string}
            isBookmarkPending={isBookmarkPending}
            bookImgUrl={bookData.bookImgUrl}
            bookTitle={bookData.bookTitle}
            price={bookData.price}
            categories={bookData.categories}
            authors={bookData.authors}
            bookmarkCount={
              bookmarkCount > 0 ? bookmarkCount : bookData.bookmarkCount
            }
            isBookmarked={isBookmarked}
            handleBookmarkClick={updateBookmark}
            publishedDate={bookData.publishedDate}
            publisher={bookData.publisher}
            averageRating={bookData.averageRating}
            reviewCount={bookData.reviewCount}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
            isDetail={true}
          />
        )}
      </section>

      <Spacing height={[80, 80, 40]} />
      <BookDetailNav
        reviewNum={data?.data.reviewCount}
        location={location}
        setLocation={setLocation}
      />

      <div className="flex-center w-full max-w-[1200px] flex-col">
        <section className="tablet:flex-center mobile:flex-center mb-100 flex w-full gap-30 p-40 pt-120 mobile:p-19 mobile:pt-40">
          <div className="w-[100%] min-w-330 max-w-[710px]">
            {location === 'information' && (
              <BookInformation
                bookImgUrl={bookData?.bookImgUrl}
                description={bookData?.description}
              />
            )}
            {location === 'review' && (
              <Review
                bookId={bookId as string}
                ratingDist={bookData.ratingDist}
                averageRating={bookData.averageRating}
                reviewCount={bookData.reviewCount}
              />
            )}
            {location === 'currency' && <RefundTerm />}
          </div>

          <div className="hidden pc:flex pc:pt-50">
            {location === 'information' && (
              <SideOrderNavigator
                bookId={bookId as string}
                bookImgUrl={bookData?.bookImgUrl ?? './'}
                bookTitle={bookData?.bookTitle}
                authors={bookData?.authors}
                isBookmarked={isBookmarked}
                isBookmarkPending={isBookmarkPending}
                handleBookmarkClick={updateBookmark}
                price={bookData?.price ?? 0}
                orderCount={orderCount}
                setOrderCount={setOrderCount}
              />
            )}
          </div>
        </section>

        <FooterOrderNavitgator
          bookId={bookId as string}
          bookImgUrl={bookData?.bookImgUrl ?? './'}
          bookTitle={bookData?.bookTitle}
          authors={bookData?.authors}
          isBookmarked={isBookmarked}
          isBookmarkPending={isBookmarkPending}
          handleBookmarkClick={updateBookmark}
          price={bookData?.price ?? 0}
          orderCount={orderCount}
          setOrderCount={setOrderCount}
        />
      </div>
    </MainLayout>
  );
}
