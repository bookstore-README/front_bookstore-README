import { usePostBookmark } from '@/api/bookmark';
import { notify } from '@/components/toast/toast';
import { postBookmarkPath } from '@/types/api/bookmark';

export const useUpdateBookmark = (bookId: number) => {
  const { mutate, isPending } = usePostBookmark(bookId, {
    onSuccess: () =>
      notify({ type: 'success', text: '장바구니에 담았어요 🛒' }),
    onError: () =>
      notify({ type: 'error', text: '장바구니 담기에 실패했어요. 😭' }),
  });

  // mutate 함수와 pending 상태를 반환
  return { addToBasket: mutate, isAddToBasketPending: isPending };
};
