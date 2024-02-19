import { usePutProfile } from '@/api/member';
import { notify } from '@/components/toast/toast';
import { ChangeProfile } from '@/types/api/member';

export const useEditProfile = (formData: FormData) => {
  const { mutate, isPending } = usePutProfile(formData, {
    onSuccess: () =>
      notify({ type: 'success', text: '프로필을 변경했어요 😘' }),
    onError: () =>
      notify({ type: 'error', text: '프로필 변경에 실패했어요. 😭' }),
  });

  // mutate 함수와 pending 상태를 반환
  return { editProfile: mutate, isPending };
};
