import { basketItemList } from "@/store/state";
import { useAtomValue } from "jotai";

export function useGetOrderTitle() {
  const items = useAtomValue(basketItemList);

  // 책 제목을 최대 12글자까지만 표시하고 나머지는 생략합니다.
  const bookTitle = items[0]?.bookTitle || '';
  const truncatedTitle =
    bookTitle.length > 12 ? bookTitle.substring(0, 12) + '...' : bookTitle;

  // items.length가 1인 경우에만 '외' 부분을 표시하지 않습니다.
  let res = truncatedTitle;
  if (items.length > 1) {
    res += '외 ' + (items.length - 1) + '건';
  }

  return res;
}
