import { usePostCommunityEmoji } from '@/api/community';
import { notify } from '@/components/toast/toast';
import { QUERY_KEY } from '@/constants/queryKey';
import { useQueryClient } from '@tanstack/react-query';

interface useUpdateEmojiProps {
  emojiType: string;
  status: boolean;
  communityId: number;
  onChangeEmojiClick: (updateFunction: (prevState: boolean) => boolean) => void;
  onChangeEmojiCount: () => void;
}

function useUpdateCommunityEmoji({
  emojiType,
  status,
  communityId,
  onChangeEmojiCount,
  onChangeEmojiClick
}: useUpdateEmojiProps) {
  const queryClient = useQueryClient();
  const queryKey = [QUERY_KEY.emoji];

  const { mutate, isPending } = usePostCommunityEmoji(
    {
      type: emojiType,
      check: !status,
      communityId: communityId,
    },
    {
      onMutate: async (communityId: number) => {
        onChangeEmojiCount();
        onChangeEmojiClick((prev) => {
          return !prev;
        });
        await queryClient.cancelQueries({ queryKey: queryKey });
        const prevOption = queryClient.getQueryData(queryKey);
        queryClient.setQueryData(queryKey, communityId);
        return { prevOption };
      },
      onError: (context) => {
        onChangeEmojiCount();
        onChangeEmojiClick((prev) => {
          return !prev;
        });
        if (context?.prevOption) {
          queryClient.setQueryData(queryKey, context.prevOption);
        }
        notify({
          type: 'error',
          text: '이모지로 반응하기 실패했어요 😫',
        });
      },
      onSuccess: () => {
        queryClient.invalidateQueries({ queryKey: queryKey });
      },
    },
    false,
  );

  return { updateEmoji: mutate, isEmojiPending: isPending };
};

export default useUpdateCommunityEmoji