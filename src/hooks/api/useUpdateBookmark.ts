import { usePostBookmark } from '@/api/bookmark';
import { notify } from '@/components/toast/toast';
import { QUERY_KEY } from '@/constants/queryKey';
import { useQueryClient } from '@tanstack/react-query';
import { count } from 'console';

interface useUpdateBookmarkProps {
  bookId: number;
  onChangeBookmarked: (updateFunction: (prevState: boolean) => boolean) => void;
  onChangeBookmarkCount: (
    updateFunction: (prevCount: number) => number,
  ) => void;
}

export const useUpdateBookmark = ({
  bookId,
  onChangeBookmarked,
  onChangeBookmarkCount,
}: useUpdateBookmarkProps) => {
  const queryClient = useQueryClient();
  const queryKey = [QUERY_KEY.bookmark];

  const { mutate, isPending } = usePostBookmark(bookId, {
    onMutate: async (bookId: number) => {
      onChangeBookmarked((prevState) => {
        if (!prevState) {
          // 북마크가 설정되지 않은 경우에만 카운트 증가
          onChangeBookmarkCount((prevCount) => prevCount + 1);
        } else onChangeBookmarkCount((prevCount) => prevCount - 1);
        // 북마크 상태를 토글
        return !prevState;
      });
      await queryClient.cancelQueries();
      const prevOption = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, bookId);
      return { prevOption };
    },
    onError: (error, variables, context) => {
      onChangeBookmarked((prevState) => {
        // 에러 발생 시 이전 북마크 상태로 롤백
        if (!prevState) {
          onChangeBookmarkCount((prevCount) => prevCount + 1);
        } else {
          onChangeBookmarkCount((prevCount) => prevCount - 1);
        }
        return !prevState;
      });
      if (context?.prevOption) {
        queryClient.setQueryData(queryKey, context.prevOption);
      }
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
