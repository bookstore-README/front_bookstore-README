import Image from 'next/image';

import { BookOrderType } from '@/types/bookOrderType';
import BookAuthor from '@/components/book/bookAuthor/bookAuthor';
import BookPrice from '@/components/book/bookPrice/bookPrice';
import BookTitle from '@/components/book/bookTitle/bookTitle';

function BookOrderCard({ book, order }: BookOrderType) {
  if (!book || !order) return;

  return (
    <div
      role="card-container"
      className="relative flex min-h-140 w-full min-w-330 max-w-[1080px] justify-start gap-12
        rounded-xl border-2 border-gray-1 p-20 mobile:border-none mobile:p-0">
      <div
        role="book-img"
        className="h-102 relative min-w-102 bg-gray-1 text-center mobile:h-75 mobile:min-w-75">
        {book.imageUrl ? (
          <Image src={book.imageUrl} alt="책 표지 이미지" layout="fill" />
        ) : (
          <></>
        )}
      </div>
      <div className="flex w-full flex-col items-start justify-start gap-12 relative">
        <div className='flex flex-col items-start justify-start gap-4 w-full'>
          <BookTitle title={book.title} fontSize={15} classNames="w-[80%] truncate whitespace-nowrap" />
          <BookAuthor authorList={book.authors} />
          <div className='flex gap-8'>
            <span className='text-gray-3 text-14'>
              {order.orderCount} 개
            </span>
            <BookPrice price={book.cost} fontSize={14} fontColor='text-gray-3'/>
          </div>
        </div>
          <div role="delivery-div" className="text-14 text-green mobile:absolute mobile:right-0 mobile:bottom-65">
            {order.deliveryStatus}
          </div>
      </div>
      <div
        role="service-div"
        className="flex-center absolute bottom-20 right-20 gap-12 mobile:bottom-0 mobile:left-0
          mobile:right-0">
        {order.deliveryStatus !== "구매 확정" &&
          <button
          className="flex-center h-40 w-130 rounded-md border-2 border-green bg-white text-green
          mobile:w-full">
          교환/환불
        </button>
            }
        <button
          className="flex-center h-40 w-130 rounded-md border-2 border-green bg-green text-white
            mobile:w-full">
          리뷰쓰기
        </button>
      </div>
    </div>
  );
}

export default BookOrderCard;
