import { CategoryListAtom } from '@/store/state';
import { useAtom } from 'jotai';
import { useRouter } from 'next/router'

function useCheckCategoryUrl() {
  const [categoryList,] = useAtom(CategoryListAtom);

  const router = useRouter();
  // 현재 url 주소
  const currentPathname = router.pathname;
  // 현재 domestic 페이지인지 구별하는 불린 값.
  const isDomestic = (currentPathname.includes("foreign")) ? false : true;
  // 하위 카테고리 문자열 값.
  const { category } = router.query;
  // 현재 위치한 카테고리 객체
  const locatedCategoryObject = (categoryList ? categoryList[isDomestic ? "domestic" : "foreign"] : []).find(e => e.link === `/${category}`) ?? {
    mainId: isDomestic ? 0 : 1,
  };

  return {
    mainId: locatedCategoryObject?.mainId,
    subId: locatedCategoryObject?.subId,
    link: locatedCategoryObject?.link,
    categoryId: locatedCategoryObject?.categoryId,
    mainName: locatedCategoryObject?.mainName,
    subName: locatedCategoryObject?.subName,
  };
}

export default useCheckCategoryUrl