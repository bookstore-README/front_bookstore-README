import { QUERY_KEY } from '@/constants/queryKey';
import {
  Signup,
  Login,
  ChangePassword,
  ChangeProfile,
} from '@/types/api/member';
import { useFetch, useUpdate, useUpdateType } from '@/utils/reactQuery';
import { instance, instanceFormData } from 'src/libs/instance';

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

//회원조회 (다른회원)
const getMember = async (id: number) => {
  const result = await instance.get(`/member/${id}`);
  return result.data.data;
};

export const useGetMember = (id: number) => {
  return useFetch(QUERY_KEY.member, getMember, id);
};

//회원조회 (로그인한 회원)
const getLoginMember = async () => {
  const result = await instance.get(`/member`);
  return result.data.data;
};

export const useGetLoginMember = () => {
  return useFetch(QUERY_KEY.member, getLoginMember, null);
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
const putProfile = async (data: FormData) => {
  const result = await instanceFormData.put('/member/profile', data);
  return result.data;
};

export const usePutProfile = (
  data: FormData,
  { onSuccess, onError, onSettled }: useUpdateType,
) => {
  return useUpdate(putProfile, data, { onSuccess, onError, onSettled });
};
