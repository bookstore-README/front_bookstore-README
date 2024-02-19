import { usePostBookmark } from '@/api/bookmark';
import { notify } from '@/components/toast/toast';
import { QUERY_KEY } from '@/constants/queryKey';
import { useQueryClient } from '@tanstack/react-query';
import { count } from 'console';
// postBookmark 사용하여 찜하기 put 요청 보내기
// 북마크 수정 쿼리

// useUpdateBookmark 프롭스로 isBookMarked, count 변경 setter 함수 받아오기
// onMutate일떄 setter 함수 실행하기 (카운트+1, isBookMarked)
// onError일때 setter 함수 실행하기 (카운트-1, !isBookMarked)

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
      // onChangeBookmarked((prevState) => {
      //   if (!prevState) {
      //     // 북마크가 설정되지 않은 경우에만 카운트 증가
      //     onChangeBookmarkCount((prevCount) => prevCount + 1);
      //   } else onChangeBookmarkCount((prevCount) => prevCount - 1);
      //   // 북마크 상태를 토글
      //   return !prevState;
      // });
      await queryClient.cancelQueries();
      const prevOption = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, bookId);
      return { prevOption };
    },
    onError: (error, variables, context) => {
      onChangeBookmarked((prevState) => {
        // 에러 발생 시 이전 북마크 상태로 롤백하고, 카운트도 이전 상태에 맞게 조정합니다.
        if (!prevState) {
          console.log(prevState);
          // 만약 북마크 설정이 취소되었다면, 카운트를 다시 증가시킵니다.
          onChangeBookmarkCount((prevCount) => prevCount + 1);
        } else {
          // 만약 북마크가 새로 설정되었다면, 카운트를 다시 감소시킵니다.
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
