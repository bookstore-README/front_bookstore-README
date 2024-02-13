import { instance } from 'src/libs/instance';

//장바구니 조회
export const getCart = async (id: number) => {
  const result = await instance.get(`review/${id}`);
  return result.data;
};

//장바구니 추가
export const postReview = async (option: { id: number; data: string }) => {
  const { id, data } = option;
  const result = await instance.post(`review/${id}`, {
    data,
  });
  return result.data;
};

//장바구니 물건 삭제
export const deleteReview = async (id: number) => {
  const result = await instance.delete(`review/${id}`);
  return result.data;
};


// 해당user의 장바구니 조회 
export const getBasketList = async (memberId: number) => {
  const result = await instance.get(`basket/${memberId}`);
  return result.data;
};


// http://15.165.141.22:8080/basket?basketIds=1%2C2%2C3
// 해당 user의 장바구니에 들어있는 아이템 삭제  
export const deleteBasket = async (basketId: number[]) => {
   return await instance.delete(`basket/${basketId}`);
 
};
