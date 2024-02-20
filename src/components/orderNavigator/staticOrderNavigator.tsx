import BookPrice from '@/components/book/bookPrice/bookPrice';
import OrderBookCount from '@/components/cart/orderBookCount';
import usePayNowItem from '@/hooks/usePayNowItem';
import useAddItemBasket from '@/hooks/useAddItemBasket';

/** 상품 상세페이지의 상품 정보 옆에 있는 구매하기 컴포넌트 */
interface OrderNavigatorProps {
  bookId: string;
  price: number;
  bookImgUrl: string;
  bookTitle: string;
  authors: string[];
  orderCount: number;
  setOrderCount: (s: number) => void;
}
function StaticOrderNavigator({
  orderCount,
  setOrderCount,
  bookImgUrl,
  bookTitle,
  authors,
  price,
  bookId,
}: OrderNavigatorProps) {
  // 구매하기 버튼 함수
  const { handlePayNowButton } = usePayNowItem({
    bookId: Number(bookId),
    bookImgUrl,
    bookTitle,
    authors,
    price,
    count: orderCount,
  });
  //장바구니 버튼 함수
  const { handleAddToBasket } = useAddItemBasket({
    bookId: Number(bookId),
    count: orderCount,
  });

  return (
    <div
      className="flex h-154 w-full min-w-[525px] max-w-[525px] flex-col gap-20 rounded-[10px] bg-gray-5
        p-20 mobile:mx-auto mobile:h-130 mobile:min-w-330 mobile:gap-10 mobile:p-15 tablet:h-150 tablet:min-w-330">
      <div className="flex justify-between">
        <OrderBookCount
          count={orderCount}
          plusFunc={() => setOrderCount(orderCount + 1)}
          minusFunc={() =>
            setOrderCount(orderCount - 1 > 0 ? orderCount - 1 : 1)
          }
        />
        <BookPrice isBold fontSize={20} price={price * orderCount} hasUnit />
      </div>
      <div className="flex-center grow gap-10">
        <button
          className="flex-center text-primary border-primary h-54 w-full rounded-[5px] border-2 bg-white
            text-[17px] font-bold"
          onClick={handleAddToBasket}>
          장바구니
        </button>
        <button
          className="flex-center border-primary bg-primary h-54 w-full rounded-[5px] border-2 text-[17px]
            font-bold text-white"
          onClick={handlePayNowButton}>
          구매하기
        </button>
      </div>
    </div>
  );
}

export default StaticOrderNavigator;
