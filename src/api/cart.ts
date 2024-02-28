import { instance } from 'src/libs/instance';

// 로그인 한 회원의 등록한 장바구니 목록 가져오기 API
export const getBasketList = async () => {
  const result = await instance.get('basket');
  return result.data;
};

// 해당 user의 장바구니에 들어있는 아이템 삭제
export const deleteBasketItem = async (basketIds: string) => {
  const result = await instance.delete(
    `basket?basketIds=${encodeURI(basketIds)}`,
  );
  return result.data;
};
