import { useRouter } from 'next/router';
import { useState } from 'react';

import { useGetBook } from '@/api/book';
import MainLayout from '@/components/layout/mainLayout';
import BookDetailCard from '@/components/card/bookDetailCard/bookDetailCard';
import BookDetailNav from '@/components/button/bookDetailNav';
import RefundTerm from '@/components/container/refundTerm/refundTerm';
import BookInformation from '@/components/book/bookInformation/bookInformation';
import Review from '@/components/review/review';
import Spacing from '@/components/container/spacing/spacing';
import SideOrderNavigator from '@/components/orderNavigator/sideOrderNavigator';
import FooterOrderNavitgator from '@/components/orderNavigator/footerOrderNavitgator';
import { BookDetailNavLocationType } from '@/types/bookDetailtype';

export default function BookDetailPage() {
  const router = useRouter();
  const { bookId } = router.query;
  // 페이지 하단 상품정보, 리뷰, 배송교환환불 탭을 나타내는 state
  const [location, setLocation] =
    useState<BookDetailNavLocationType>('information');
  // 책 구매 수량 state
  const [orderCount, setOrderCount] = useState(1);
  const {data, isLoading, isError} = useGetBook({
      endpoint: `${bookId}/detail`,
      params: {
        bookId: String(bookId)
      },
  })

  // TODO isLoading 에선 스켈레톤 ui 보여주게 할 것.
  // TODO 로그인 안된 경우 찜 버튼 못 누르게 혹은 로그인하라는 alert 창 뜨게
  // TODO 상품정보 이거 어쩌징
  // TODO 리뷰가 없을 때 보여줄 이미지 뭐 리뷰가 없어요! 이런거 만들기
  // TODO 로그인한경우 찜되게끔 찜 버튼 연결
  // TODO 로그인한경우 조회수 올라가게 조회수 api 연결
  // TODO 공유하기버튼 연결
  // TODO 장바구니, 구매하기 버튼 연결
  return (
    <MainLayout>
        <section className="flex flex-col w-full p-40 mobile:p-19 mobile:flex-center">
          <BookDetailCard
            bookId={bookId as string}
            bookImgUrl={data?.data.bookImgUrl ?? "/"}
            bookTitle={data?.data.bookTitle ?? ""}
            price={data?.data.price ?? 0}
            categories={data?.data.categories ?? ["",""]}
            authors={data?.data.authors ??[""]}
            bookmarkCount={data?.data.bookmarkCount ?? 0}
            isBookmarked={data?.data.isBookmarked ?? false}
            publishedAt={data?.data.publishedDate ?? ""}
            publisher={data?.data.publisher ?? ""}
            averageRating={data?.data?.averageRating ?? 0}
            reviewNum={data?.data.reviewCount ?? 0}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
          />
        </section>
        <Spacing height={[80, 80, 40]} />
        <BookDetailNav
          reviewNum={data?.data.reviewCount}
          location={location}
          setLocation={setLocation}
        />
        <div className="flex flex-col w-full">
          <section
            className="flex p-40 justify-start gap-30 pt-120 mobile:p-19 mobile:pt-40
              mobile:flex-center">
            <div className="flex flex-col w-full max-w-[710px] mobile:flex-center">
              {location === 'information' && <BookInformation />}
            {location === 'review' && <Review reviewNum={data?.data?.reviewCount} reviewList={data?.data?.reviews} />}
              {location === 'currency' && <RefundTerm />}
            </div>
            <div className="pc:pt-50 pc:flex hidden">
              <SideOrderNavigator
                isBookmarked={data?.data.isBookmarked ?? false}
                price={data?.data.price ?? 0}
                orderCount={orderCount}
                setOrderCount={setOrderCount}
              />
            </div>
          </section>
          <FooterOrderNavitgator
            isBookmarked={data?.data.isBookmarked ?? false}
            price={data?.data.price ?? 0}
            bookId={bookId as string}
            orderCount={orderCount}
            setOrderCount={setOrderCount}
          />
        </div>
      </MainLayout>
  );
}
