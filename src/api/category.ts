import { instance } from 'src/libs/instance';

// 전체 카테고리 리스트 조회
export const getCategoryList = async () => {
  const result = await instance.get(`/category`);
  return result.data.data;
};

//국내, 해외 카테고리 조회
export const getCategory = async (category:string) => {
  const result = await instance.get(`category/${category}`);
  return result.data;
};

//국내 및 해외 하위 카테고리 조회
export const getSubCategory = async (mainId: number, subId: number) => {
  const result = await instance.get(`category/${mainId}/${subId}`);
  return result.data;
}

// 회원 맞춤 카테고리 조회 기능 
// 회원이 선택한 모든 카테고리를 조회하려면 false, 랜덤 4개를 조회하려면 true
 export const getCustomCategoryList = async () => {
  const result = await instance.get("/category/member?isRandom=false");
  return result.data
};
