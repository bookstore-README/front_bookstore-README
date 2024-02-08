import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookOverviewCard from '@/components/card/bookOverviewCard/bookOverViewCard';
import CommunityCard from '@/components/card/communityCard/communityCard';
import AddCommunityCard from '@/components/modal/addCommunityCard';
import AddReview from '@/components/modal/addReview';
import AlertModal from '@/components/modal/alertModal';
import FindAddress from '@/components/modal/findAddress';
import GetRefund from '@/components/modal/getRefund';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';
import { bookOverviewsMock } from '@/pages/api/mock/bestSellerMock';
import { useState } from 'react';
const bookOverviews = bookOverviewsMock;

function TestPage() {
  const [isReviewModalOpen, setIsReviewModalOpen] = useState(false);
  const [isFindAddressModalOpen, setIsFindAddressModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);
  const [isAddCommunityCardModalOpen, setIsAddCommunityCardModalOpen] = useState(false);
  const [isGetRefundFormModalOpen, setIsGetRefundFormModalOpen] = useState(false);

  const handleReviewModalOpen = () => {
    setIsReviewModalOpen(!isReviewModalOpen);
  }

  const handleFindAddressModalOpen = () => {
    setIsFindAddressModalOpen(!isFindAddressModalOpen);
  }

  const handleAlertModalOpen = () => {
    setIsAlertModalOpen(!isAlertModalOpen)
  }

  const handleAddCommunityCardModalOpen = () => {
    setIsAddCommunityCardModalOpen(!isAddCommunityCardModalOpen)
  }

  const handleGetRefundFormModalOpen = () => {
    setIsGetRefundFormModalOpen(!isGetRefundFormModalOpen)
  }

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
        ranking={20}
        // itemsStart
      />
      <PreviewBookInfo
        title="하이용"
        authorList={['얌얌', '능이버섯']}
        image={bookOverviews[0]?.book.bookImgUrl}
        size="lg"
        ranking={10}
        // itemsStart
      />
      <BookOverviewCard
        book={bookOverviews[4]?.book}
        like={bookOverviews[4]?.like}
      />
      <button onClick={handleReviewModalOpen} className='border border-black w-full h-50 bg-green flex-center'>리뷰 모달 열려라</button>
      {isReviewModalOpen && <AddReview onClick={handleReviewModalOpen} />}

      <button onClick={handleFindAddressModalOpen} className='border border-black w-full h-50 bg-green flex-center'>주소 검색하기 모달 열려라</button>
      {isFindAddressModalOpen && <FindAddress onClick={handleFindAddressModalOpen} />}
      
      <button onClick={handleAlertModalOpen} className='border border-black w-full h-50 bg-green flex-center'>삭제하기 모달 열려라</button>
      {isAlertModalOpen && <AlertModal title="정말 삭제하시겠습니까?" description="삭제한 글은 복구할 수 없습니다." onClick={handleAlertModalOpen} />}
      
      <button onClick={handleAddCommunityCardModalOpen} className='border border-black w-full h-50 bg-green flex-center'>커뮤니티 글쓰기 모달 열려라</button>
      {isAddCommunityCardModalOpen && <AddCommunityCard onClick={handleAddCommunityCardModalOpen} />}

      <button onClick={handleGetRefundFormModalOpen} className='border border-black w-full h-50 bg-green flex-center'>커뮤니티 글쓰기 모달 열려라</button>
      {isGetRefundFormModalOpen && <GetRefund onClick={handleGetRefundFormModalOpen} />}
      
      
      <PreviewBookInfo
        size="lg"
        image={bookOverviews[1]?.book.bookImgUrl}
        ranking={bookOverviews[1]?.book.rank}
        title="야오호로어옹"
        authorList={['하이', '이작가']}
      />
      <PreviewBookInfo
        size="md"
        image={bookOverviews[1]?.book.bookImgUrl}
        ranking={bookOverviews[1]?.book.rank}
        title="야오호로어옹"
        authorList={['하이', '이작가']}
      />
      <PreviewBookInfo
        size="sm"
        image={bookOverviews[1]?.book.bookImgUrl}
        ranking={bookOverviews[1]?.book.rank}
        title="야오호로어옹"
        authorList={['하이', '이작가']}
        alignCenter
      />
    </div>
  );
}

export default TestPage;
