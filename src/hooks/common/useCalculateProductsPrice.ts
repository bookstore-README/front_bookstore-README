import { basketItemList } from '@/store/state';
import { useAtomValue } from 'jotai';

function useCalculateProductsPrice() {
  const items = useAtomValue(basketItemList);
  const updatedItems = items.map((item) => ({
    ...item,
    price: item.price * (item.count || 1), // 만약 clicked 값이 없으면 1로 설정하여 기본값을 사용
  }));

  const totalPrice = updatedItems.reduce(
    (total, item) => total + (item.price || 0),
    0,
  );
  return totalPrice;
}

export default useCalculateProductsPrice;
