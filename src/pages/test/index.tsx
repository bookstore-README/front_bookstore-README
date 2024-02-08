import CommunityCard from '@/components/card/communityCard/communityCard';
import AddCommunityCard from '@/components/modal/addCommunityCard';
import AddReview from '@/components/modal/addReview';
import AlertModal from '@/components/modal/alertModal';
import FindAddress from '@/components/modal/findAddress';
import GetRefund from '@/components/modal/getRefund';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/card/bookOverviewCard/bookOverViewCard';
import SkeletonBookOverviewCard from '@/components/skeleton/bookOverviewCard/skeleton';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { useState } from 'react';
const bookOverviews = bookOverviewsMock;

function TestPage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isAddCommunityCardModalOpen, setIsAddCommunityCardModalOpen] =
    useState(false);
  const [isGetRefundFormModalOpen, setIsGetRefundFormModalOpen] =
    useState(false);

  const handleReviewModalOpen = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  };

  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  };

  const handleAlertModalOpen = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  const handleAddCommunityCardModalOpen = () => {
    setIsAddCommunityCardModalOpen(!isAddCommunityCardModalOpen);
  };

  const handleGetRefundFormModalOpen = () => {
    setIsGetRefundFormModalOpen(!isGetRefundFormModalOpen);
  };

  return (
    <div className="flex flex-col gap-20 p-20">
      <BookOverviewCard
        book={bookOverviews[0]?.book}
        like={bookOverviews[0]?.like}
      />
      {/* <SkeletonPreviewBookImage size="sm" />
      <SkeletonPreviewBookImage size="md" />
      <SkeletonPreviewBookImage size="lg" /> */}
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="sm"
        ranking={100}
        // itemsStart
      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="md"
        ranking={1}
        itemsStart
      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="lg"
        ranking={10}
        // itemsStart
      />

      <SkeletonBookOverviewCard />
      <div className="flex gap-10">
        <SkeletonPreviewBookImage size="lg" />
        <SkeletonPreviewBookImage size="md" />
        <SkeletonPreviewBookImage size="sm" />
      </div>

      <button
        onClick={handleReviewModalOpen}
        className="flex-center h-50 w-full border border-black bg-green">
        리뷰 모달 열려라
      </button>
      {isReviewModalOpen && <AddReview onClick={handleReviewModalOpen} />}

      <button
        onClick={handleFindAddressModalOpen}
        className="flex-center h-50 w-full border border-black bg-green">
        주소 검색하기 모달 열려라
      </button>
      {isFindAddressModalOpen && (
        <FindAddress onClick={handleFindAddressModalOpen} />
      )}

      <button
        onClick={handleAlertModalOpen}
        className="flex-center h-50 w-full border border-black bg-green">
        삭제하기 모달 열려라
      </button>
      {isAlertModalOpen && (
        <AlertModal
          title="정말 삭제하시겠습니까?"
          description="삭제한 글은 복구할 수 없습니다."
          onClick={handleAlertModalOpen}
        />
      )}

      <button
        onClick={handleAddCommunityCardModalOpen}
        className="flex-center h-50 w-full border border-black bg-green">
        커뮤니티 글쓰기 모달 열려라
      </button>
      {isAddCommunityCardModalOpen && (
        <AddCommunityCard onClick={handleAddCommunityCardModalOpen} />
      )}

      <button
        onClick={handleGetRefundFormModalOpen}
        className="flex-center h-50 w-full border border-black bg-green">
        환불 모달 열려라
      </button>
      {isGetRefundFormModalOpen && (
        <GetRefund onClick={handleGetRefundFormModalOpen} />
      )}
    </div>
  );
}

export default TestPage;
