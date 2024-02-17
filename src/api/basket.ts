import { PostBasketParams } from '@/types/api/basket';
import {
  useDelete,
  useFetch,
  useUpdate,
  useUpdateType,
} from '@/utils/reactQuery';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

//장바구니 조회
const getBasket = async (memberId: number) => {
  const result = await instance.get(`basket/${memberId}`);
  return result.data;
};

export const useGetCart = (memberId: number) => {
  return useFetch(QUERY_KEY.basket, getBasket, memberId);
};

//장바구니 추가
export const postBasket = async ({ bookId }: PostBasketParams) => {
  const result = await instance.post(`/basket/${bookId}`);
  return result.data;
};

export const usePostBasket = (
  { bookId }: PostBasketParams,
  { onSuccess, onError, onSettled }: useUpdateType = {},
) => {
  return useUpdate(postBasket, { bookId }, { onSuccess, onError, onSettled });
};

//장바구니 물건 삭제
const deleteBasket = async (basketId: number) => {
  const result = await instance.delete('/basket', {
    params: basketId,
  });
  return result.data;
};

export const useDeleteBasket = (basketId: number) => {
  return useDelete(deleteBasket, basketId);
};
