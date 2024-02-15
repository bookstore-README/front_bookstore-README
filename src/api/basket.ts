import { PostBasketParams } from '@/types/api/basket';
import { useDelete, useFetch, usePost } from '@/utils/reactQuery';
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
const postBasket = async ({ bookId, token }: PostBasketParams) => {
  const result = await instance.post(
    `/basket/${bookId}`,
    {},
    {
      headers: {
        Authorization: token,
      },
    },
  );
  return result.data;
};

export const usePostBasket = ({ bookId, token }: PostBasketParams) => {
  return usePost(postBasket, { bookId, token });
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
