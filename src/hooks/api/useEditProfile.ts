import { AxiosError } from 'axios';
import { usePutProfile } from '@/api/member';
import { notify } from '@/components/toast/toast';

// Axios 에러 응답에 대한 타입 정의
interface AxiosResponseErrorData {
  message?: string;
}

export const useEditProfile = (formData: FormData) => {
  const { mutate, isPending } = usePutProfile(formData, {
    onSuccess: () => {
      notify({ type: 'success', text: '프로필을 변경했어요 😘' });
    },
    onError: (err: AxiosError<AxiosResponseErrorData>) => {
      let message = '프로필 변경에 실패했어요. 😭';
      if (err.response && err.response.data && err.response.data.message) {
        message = err.response.data.message + '😣';
      }
      notify({ type: 'error', text: message });
    },
  });

  return {
    editProfile: mutate,
    isPending,
  };
};
