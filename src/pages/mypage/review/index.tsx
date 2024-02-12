import MyReviewCardList from '@/components/card/bookReviewCard/myReviewCardList';
import MainLayout from '@/components/layout/mainLayout';
import { myReviews } from '@/pages/api/mock/myReviewMock';

export default function MyReviewPage() {
  // TODO: 내리뷰 데이터 서버에서 받아온 뒤 mock 데이터 교환
  return (
    <MainLayout>
      <div className="mx-auto flex w-full flex-col justify-center px-60 py-20 mobile:px-15 mobile:py-0 tablet:px-40">
        <MyReviewCardList myReviewData={myReviews} />
      </div>
    </MainLayout>
  );
}
