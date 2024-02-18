import { usePostBookmark } from '@/api/bookmark';
import { notify } from '@/components/toast/toast';
import { QUERY_KEY } from '@/constants/queryKey';
import { useQueryClient } from '@tanstack/react-query';
// postBookmark 사용하여 찜하기 put 요청 보내기
// 북마크 수정 쿼리
export const useUpdateBookmark = (bookId: number) => {
  const queryClient = useQueryClient();
  const queryKey = [QUERY_KEY.bookmark];

  const { mutate, isPending } = usePostBookmark(bookId, {
    onMutate: async (bookId: number) => {
      await queryClient.cancelQueries();
      const prevOption = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, bookId);
      return { prevOption };
    },
    onError: (context) => {
      // 에러발생시 캐시를 저장된 값으로 롤백
      queryClient.setQueryData(queryKey, context?.prevOption);
      notify({
        type: 'error',
        text: '찜하기에 실패했어요 😫',
      });
    },
    onSuccess: () => {
      // 쿼리 함수의 성공하면 -> 기존 데이터 무효화
      queryClient.invalidateQueries();
    },
  });

  return { updateBookmark: mutate, isBookmarkPending: isPending };
};
