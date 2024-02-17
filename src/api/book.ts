import { BookParams, putBookPath } from '@/types/api/book';
import { useFetch, useUpdate } from '@/utils/reactQuery';
import { QUERY_KEY } from 'src/constants/queryKey';
import { instance } from 'src/libs/instance';

interface GetBookOption {
  endpoint?: string;
  params?: BookParams;
}

//책 전체 가져오기, 도서 단일 조회, 책 페이징 조회,
export const getBook = async (option: GetBookOption) => {
  const { endpoint, params } = option;
  const result = await instance.get(`/book${endpoint ? `/${endpoint}` : ''}`, {
    params,
  });
  return result.data;
};

export const useGetBook = (option: GetBookOption) => {
  return useFetch(QUERY_KEY.book, getBook, option);
};

//도서 조회수 증가
const putBookView = async (option: putBookPath) => {
  const { bookId, memberId } = option;
  const result = await instance.put(`/book/${bookId}/${memberId}/view`);
  return result.data;
};

export const usePutBook = (option: putBookPath) => {
  return useUpdate(putBookView, option);
};


// http://15.165.141.22:8080/book/favorite?categoryId=1%2C2%2C3&isRandom=false


// 랜덤하게 Book 100권가져오기
export const getRandomBookList = async (categoryId:string, isRandom:boolean) => {
  const result = await instance.get(`/book/favorite?categoryId=${encodeURI(categoryId)}&isRandom=${isRandom}`)
  return result.data
};


