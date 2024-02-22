/** 마이페이지에 들어갈 내가 쓴 리뷰 컴포넌트 */

import { useState } from 'react';
import Image from 'next/image';

import BookRating from '@/components/book/bookRating/bookRating';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import { MyReviewType } from '@/types/bookReviewType';
import KebabButton from '@/components/button/kebab/kebabButton';
import AlertModal from '@/components/modal/alertModal';
import AddCommunityCard from '@/components/modal/addCommunityCard';

function MyReviewCard({ book, review }: MyReviewType) {
  const [isSummarized, setIsSummarized] = useState(true);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAlertModalOpen, setIsAlertModalOpen] = useState(false);

  const handleEditModalOpenClick = () => {
    setIsEditModalOpen(!isEditModalOpen);
  };

  const handleAlertModalOpenClick = () => {
    setIsAlertModalOpen(!isAlertModalOpen);
  };

  return (
    <div className="flex min-h-140 w-full max-w-[1080px] flex-col mobile:min-h-115 mobile:w-330 ">
      <div
        role="card-container"
        className="relative flex justify-start gap-12
        rounded-xl border-2 border-gray-1 p-20 mobile:border-none
        mobile:p-0">
        <div className="flex w-full gap-12">
          <div
            role="book-img"
            className="relative h-102 min-w-102 bg-gray-1 text-center mobile:h-75 mobile:min-w-75">
            {book.imageUrl ? (
              <Image
                src={book.imageUrl}
                alt="book sample image"
                layout="fill"
              />
            ) : null}
          </div>
          <div className="flex w-4/5 flex-col items-start justify-start gap-4">
            <div
              role="book-title"
              className="min-w-250 truncate whitespace-nowrap text-15 font-normal">
              {book.title}
            </div>
            <BookAuthor authorList={book.authors} />
            <div className="absolute right-0 top-0 h-18 w-18 mobile:-right-10 mobile:-top-20">
              <KebabButton title1="수정하기" title2="삭제하기" />
            </div>
            <div className="flex-center gap-10 whitespace-nowrap">
              <BookRating rating={review.reviewRating} />
              <span className="text-14 text-gray-2">{review.createdAt}</span>
            </div>
            <div
              role="content-div"
              className={`top-10 flex mobile:relative mobile:-left-87 mobile:w-full ${
                isSummarized ? 'w-[90%]' : 'w-full mobile:w-[120%]'
              }`}>
              <div
                role="content"
                className={`text-14 text-gray-3 ${isSummarized ? `truncate` : ''}`}>
                {review.reviewContent}
              </div>
            </div>
            {isSummarized && (
              <button
                onClick={() => setIsSummarized(false)}
                className="text-primary absolute bottom-23 right-20 whitespace-nowrap text-14
                mobile:-bottom-3 mobile:right-0">
                더보기
              </button>
            )}
          </div>
        </div>
      </div>
      <div className="pt-32">
        <div className="h-1 w-full border border-gray-1 tablet:hidden pc:hidden"></div>
      </div>
      {isEditModalOpen && (
        <AddCommunityCard onClick={handleEditModalOpenClick} />
      )}
      {isAlertModalOpen && (
        <AlertModal
          title='정말 삭제하시겠습니까?'
          description='삭제한 글은 복구할 수 없습니다.'
          onClick={handleAlertModalOpenClick}
        />
      )}
    </div>
  );
}

export default MyReviewCard;
