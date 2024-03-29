import { basketItemList } from '@/store/state';
import { useAtomValue } from 'jotai';
interface useGetTotalPriceProps {
  delivery: number;
  discount: number;
  Price?: number;
}
function useCalculateTotalPrice({
  delivery,
  discount,
  Price,
}: useGetTotalPriceProps) {
  const items = useAtomValue(basketItemList);
  const updatedItems = items.map((item) => ({
    ...item,
    price: item.price * (item.quantity || 1), // 만약 clicked 값이 없으면 1로 설정하여 기본값을 사용
  }));

  const bookPrice = Price
    ? Price
    : updatedItems.reduce((total, item) => total + (item.price || 0), 0);
  if (bookPrice < 10000) {
    const totalPrice = bookPrice + delivery - discount; //구매 금액이 3만원 이상일 경우 배송비 무료
    return totalPrice;
  } else {
    const totalPrice = bookPrice - discount;
    return totalPrice;
  }
}

export default useCalculateTotalPrice;
