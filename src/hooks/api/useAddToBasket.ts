import { usePostBasket } from '@/api/basket';
import { notify } from '@/components/toast/toast';
import { PostBasketParams } from '@/types/api/basket';

export const useAddToBasket = ({ bookId, token }: PostBasketParams) => {
  const { mutate, isPending } = usePostBasket(
    { bookId, token },
    {
      onSuccess: () =>
        notify({ type: 'success', text: '장바구니에 담았어요 🛒' }),
      onError: () =>
        notify({ type: 'error', text: '장바구니 담기에 실패했어요. 😭' }),
    },
  );

  // mutate 함수와 pending 상태를 반환
  return { addToBasket: mutate, isAddToBasketPending: isPending };
};
