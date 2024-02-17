import { usePutPassword } from '@/api/member';
import { notify } from '@/components/toast/toast';
import { ChangePassword } from '@/types/api/member';

export const useEditPassword = (newPassword: ChangePassword) => {
  const { mutate, isPending } = usePutPassword(newPassword, {
    onSuccess: () =>
      notify({ type: 'success', text: '비밀번호가 변경되었어요 🔐' }),
    onError: () =>
      notify({ type: 'error', text: '비밀번호 변경에 실패했어요. 😭' }),
  });

  // mutate 함수와 pending 상태를 반환
  return { changePassword: mutate, isPending };
};
