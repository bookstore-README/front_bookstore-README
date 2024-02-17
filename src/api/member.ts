import { QUERY_KEY } from '@/constants/queryKey';
import { Signup, Login, ChangePassword, ChangeImage } from '@/types/api/member';
import { useFetch, useUpdate, useUpdateType } from '@/utils/reactQuery';
import { instance } from 'src/libs/instance';

//회원가입
export const postSignup = async (data: Signup) => {
  const result = await instance.post('/member', data);
  return result.data;
};

//로그인
export const postLogin = async (data: Login) => {
  const result = await instance.post('/member/sign-in', data);
  return result.data;
};

//회원조회
const getMember = async (id: number) => {
  const result = await instance.get(`/member/${id}`);
  return result.data.data;
};

export const useGetMember = (id: number) => {
  return useFetch(QUERY_KEY.member, getMember, id);
};

//비밀번호 수정
export const putPassword = async (newPassword: ChangePassword) => {
  const result = await instance.put('/member/password', newPassword);
  return result.data;
};

export const usePutPassword = (
  newPassword: ChangePassword,
  { onSuccess, onError, onSettled }: useUpdateType,
) => {
  return useUpdate(putPassword, newPassword, { onSuccess, onError, onSettled });
};

//프로필이미지 수정
const putProfileImage = async (data: ChangeImage) => {
  const result = await instance.put('/member/profile', data);
  return result.data;
};

export const usePutProfileImage = (data: ChangeImage) => {
  return useUpdate(putProfileImage, data);
};
