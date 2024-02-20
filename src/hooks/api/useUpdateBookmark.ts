import { usePostBookmark } from '@/api/bookmark';
import { notify } from '@/components/toast/toast';
import { QUERY_KEY } from '@/constants/queryKey';
import { useQueryClient } from '@tanstack/react-query';
import { throttle } from 'lodash';

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

  // onChangeBookmarkCount 함수를 throttle 처리(1000ms 간격으로 제한)
  const throttledOnChangeBookmarkCount = throttle((updateFunction) => {
    onChangeBookmarkCount(updateFunction);
  }, 1000);

  const { mutate, isPending } = usePostBookmark(bookId, {
    onMutate: async (bookId: number) => {
      onChangeBookmarked((prevState) => {
        if (!prevState) {
          // 북마크가 설정되지 않은 경우에만 카운트 증가
          throttledOnChangeBookmarkCount((prevCount: number) => prevCount + 1);
        } else {
          // 북마크가 설정된 경우에만 카운트 감소
          throttledOnChangeBookmarkCount((prevCount: number) => prevCount - 1);
        }
        // 북마크 상태를 토글
        return !prevState;
      });
      await queryClient.cancelQueries({ queryKey: queryKey });
      const prevOption = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, bookId);
      return { prevOption };
    },
    onError: (error, variables, context) => {
      onChangeBookmarked((prevState) => {
        // 에러 발생 시 이전 북마크 상태로 롤백
        if (!prevState) {
          throttledOnChangeBookmarkCount((prevCount: number) => prevCount + 1);
        } else {
          throttledOnChangeBookmarkCount((prevCount: number) => prevCount - 1);
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
      // 쿼리 함수의 성공시 기존 데이터 무효화
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  return { updateBookmark: mutate, isBookmarkPending: isPending };
};
