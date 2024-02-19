import { usePutPassword, usePutProfile } from '@/api/member';
import { notify } from '@/components/toast/toast';
import { ChangeProfile } from '@/types/api/member';

export const useEditProfile = ({ nickname, profileImage }: ChangeProfile) => {
  const { mutate, isPending } = usePutProfile(
    { nickname, profileImage },
    {
      onSuccess: () =>
        notify({ type: 'success', text: '프로필이 변경되었어요. 👤' }),
      onError: () =>
        notify({ type: 'error', text: '프로필 변경에 실패했어요. 😭' }),
    },
  );

  // mutate 함수와 pending 상태를 반환
  return { changePassword: mutate, isPending };
};
