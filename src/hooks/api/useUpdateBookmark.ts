import { usePostBookmark } from '@/api/bookmark';
import { notify } from '@/components/toast/toast';
import { QUERY_KEY } from '@/constants/queryKey';
import { useQueryClient } from '@tanstack/react-query';

interface useUpdateBookmarkProps {
  bookId: number;
  onChangeBookmarked: (updateFunction: (prevState: boolean) => boolean) => void;
  onChangeBookmarkCount: () => void;
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
      onChangeBookmarkCount();
      onChangeBookmarked((prevState) => {
        return !prevState;
      });
      await queryClient.cancelQueries({ queryKey: queryKey });
      const prevOption = queryClient.getQueryData(queryKey);
      queryClient.setQueryData(queryKey, bookId);
      return { prevOption };
    },
    onError: (error, variables, context) => {
      onChangeBookmarkCount();
      onChangeBookmarked((prevState) => {
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
      queryClient.invalidateQueries({ queryKey: queryKey });
    },
  });

  return { updateBookmark: mutate, isBookmarkPending: isPending };
};
