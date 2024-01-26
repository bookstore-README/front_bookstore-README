import Image from 'next/image';

import { BookOrderType } from '@/types/bookOrderType';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';

function BookOrderCard({ book, order }: BookOrderType) {
  return (
    <div
      role="card-container"
      className="w-full max-w-[1080px] min-w-330 border-gray-1 border-2 min-h-140 p-20 rounded-xl
        flex justify-start gap-12 relative mobile:p-0 mobile:border-none">
      <div
        role="book-img"
        className="min-w-102 h-102 bg-gray-1 text-center mobile:min-w-75 mobile:h-75">
        {book.imageUrl ? (
          <Image src={book.imageUrl} alt="책 표지 이미지" layout="fill" />
        ) : (
          <></>
        )}
      </div>
      <div className="flex flex-col justify-start items-start gap-4 w-full">
        <div
          role="book-title"
          className="text-15 font-normal truncate whitespace-nowrap min-w-250">
          {book.title}
        </div>
        <BookAuthor authorList={book.authors} />
        <div className="flex-center flex-col gap-10 whitespace-nowrap mobile:flex-row">
          <div role="price-div" className="text-gray-4 text-14">
            {book.price} 원
          </div>
          <div role="delivery-div" className="text-green text-14">
            {order.deliveryStatus}
          </div>
        </div>
      </div>

      <button
        className="text-gray-3 text-14 flex-center absolute right-20 top-20 mobile:top-50
          mobile:right-0">
        배송 조회
        <Image
          src="/icons/RightArrow.svg"
          width={15}
          height={15}
          alt="화살표 버튼"
        />
      </button>

      <div
        role="service-div"
        className="flex-center gap-12 absolute right-20 bottom-20 mobile:bottom-0 mobile:right-0
          mobile:left-0">
        <button
          className="bg-white border-green border-2 text-green w-130 h-40 flex-center rounded-md
            mobile:w-full">
          문의
        </button>
        <button
          className="bg-green border-green border-2 text-white w-130 h-40 flex-center rounded-md
            mobile:w-full">
          리뷰쓰기
        </button>
      </div>
    </div>
  );
}

export default BookOrderCard;
