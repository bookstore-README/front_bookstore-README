import { MyReviewType } from '@/types/bookReviewType';
import MyReviewCard from './myReviewCard';

interface MyReviewCardListProps {
  myReviewData: MyReviewType[];
}

function MyReviewCardList({ myReviewData }: MyReviewCardListProps) {
  return (
    <div className="flex flex-col gap-20 mobile:gap-25">
      {myReviewData.map((review) => (
        <div className="flex-center">
          <MyReviewCard book={review.book} review={review.review} />
        </div>
      ))}
    </div>
  );
}
export default MyReviewCardList;
