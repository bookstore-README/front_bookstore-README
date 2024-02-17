import { useState } from 'react';
import Link from 'next/link';

import { getBook } from '@/api/book';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import DropDown from '@/components/dropDown/dropDown';
import SkeletonPreviewBookImage from '@/components/skeleton/previewBookImage/skeleton';
import useCarouselEnv from '@/hooks/useCarouselEnv';
import useInfinite from '@/hooks/useInfinite';
import useCustomInfiniteQuery from '@/hooks/useCustomInfiniteQuery';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';
import SelectOrder from '@/utils/selectOrder';

import { BOOK_OLDER_STANDARD } from 'src/constants/orderList';

const CURRENT_ORDER = {
  sort: 'VIEW',
  ascending: false,
};

function MainCategoryBookList() {
  const { env } = useCarouselEnv();
  const [selectedOrder, setSelectedOrder] = useState('조회순');
  const [currentOrder, setCurrentOrder] = useState(CURRENT_ORDER);
  const [apiRef, isIntersecting] = useInfinite();
  const { mainId } = useCheckCategoryUrl();

  const { data, isFetchingNextPage, hasNextPage } = useCustomInfiniteQuery({
    endpoint: `${mainId}/main`,
    queryKey: [selectedOrder, String(mainId), 'main-category-book-list'],
    queryFunc: getBook,
    initialCursorId: 0,
    cursorName: 'bookId',
    sort: currentOrder.sort,
    ascending: currentOrder.ascending,
    refetchTrigger: isIntersecting,
    getNextPageParamsFunc: (lastPage) =>
      lastPage?.data.books.length <= 1 || lastPage?.data.cursorId <= 0
        ? undefined
        : lastPage.data.books[lastPage.data.books.length - 1].bookId,
    selectFunc: (data) => {
      return (data.pages ?? []).flatMap((page) => {
        if (page?.data?.books.length < 2) return page?.data?.books;
        if (hasNextPage) {
          return page?.data?.books.slice(0, page.data.books.length - 1);
        } else {
          return page?.data?.books.slice(0, page.data.books.length);
        }
      });
    },
  });
  const onSelectedOrder = SelectOrder(setSelectedOrder, setCurrentOrder);

  return (
    <article className="relative flex h-fit flex-col gap-50 pb-30 mobile:gap-20 tablet:gap-40">
      <div className="flex items-center justify-between">
        <h1 className="text-20 text-black">모든 도서</h1>
        <div className="z-20 w-120">
          <DropDown
            menus={BOOK_OLDER_STANDARD}
            selectedItem={selectedOrder}
            onSelectedItem={onSelectedOrder}
          />
        </div>
      </div>

      <div
        className="grid h-fit w-[895px]
           grid-flow-row auto-rows-auto grid-cols-5 gap-x-20 gap-y-40 mobile:w-[330px] mobile:grid-cols-2 mobile:gap-y-0 tablet:w-[511px] tablet:grid-cols-3 ">
        {data?.map((book) => {
          return (
            <Link
              href={`/bookdetail/${book.bookId}`}
              key={book.bookId}
              className="h-fit w-fit">
              <PreviewBookInfo
                image={book.bookImgUrl}
                title={book.bookTitle}
                authorList={book.authors}
                price={book.price}
                size={env === 'desktop' ? 'md' : 'lg'}
                bookId={book.bookId}
              />
            </Link>
          );
        })}
      </div>
      {(isFetchingNextPage || isIntersecting) && (
        <div
          className="grid min-h-400 w-[895px]
           grid-flow-row auto-rows-auto grid-cols-5 gap-x-20 gap-y-40 mobile:w-[330px] mobile:grid-cols-2 mobile:gap-y-0 tablet:w-[511px] tablet:grid-cols-3 ">
          {[0, 1, 2, 3, 4].map((el) => {
            return <SkeletonPreviewBookImage size="md" key={el} />;
          })}
        </div>
      )}
      <div
        className={`h-5 w-300 ${hasNextPage ? 'block' : 'hidden'}`}
        ref={apiRef}></div>
    </article>
  );
}

export default MainCategoryBookList;
