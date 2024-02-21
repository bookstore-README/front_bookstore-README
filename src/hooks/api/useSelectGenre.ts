import { usePutCustomGenre } from '@/api/member';
import { notify } from '@/components/toast/toast';

export const useSelectGenre = (categories: number[]) => {
  const { mutate, isPending } = usePutCustomGenre(categories, {
    onSuccess: () =>
      notify({ type: 'success', text: '선호장르를 변경했어요 ⭐️' }),
    onError: () =>
      notify({ type: 'error', text: '선호장르 변경에 실패했어요. 😭' }),
  });

  // mutate 함수와 pending 상태를 반환
  return { selectGenre: mutate, isPending };
};
