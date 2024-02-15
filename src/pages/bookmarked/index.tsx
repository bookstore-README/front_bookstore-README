import BookRating from '@/components/book/bookRating/bookRating';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import BookMarkedHeader from '@/components/header/bookmarkedHeader';
import MainLayout from '@/components/layout/mainLayout';
import useBookMarkInfiniteQuery from '@/hooks/useBookMarkInfiniteQuery';
import useDeleteBookMarkMuation from '@/hooks/useDeleteBookMarkMuation';
import useInfinite from '@/hooks/useInfinite';
import { BookMarkListData } from '@/types/bookMarkType';
import { threeDigitCommma } from '@/utils/threeDigitComma';  
import Image from 'next/image';
import { useEffect, useState } from 'react';
import CheckedCheckBoxIcon from "@/public/icons/CheckedCheckBox.svg"
import CheckBoxIcon from "@/public/icons/CheckBox.svg"

function BookMarkedPage() {
  const [wishListData, setWishListData] = useState<BookMarkListData[]>([]);
  const [selectedItemArr, setSelectedItemArr] = useState<BookMarkListData[]>([]);
  const [ref, isIntersecting] = useInfinite()   

  const {data, isError, status, fetchNextPage, hasNextPage} = useBookMarkInfiniteQuery()   

  const deleteBookMarkItemMutation = useDeleteBookMarkMuation()

  useEffect(() => {
    if (data && status === "success") {
      const bookmarkList = data?.pages.reduce((sum, page) => {
        if (Array.isArray(page?.data?.bookmarks)) {
          return [...sum, ...page.data.bookmarks];
        }
        return sum;
      }, []);
      setWishListData(bookmarkList);
    }
  }, [data]);  


  useEffect(() => {

    if (isIntersecting && hasNextPage) {
      fetchNextPage()
    }
  }, [isIntersecting, hasNextPage])

  const resetSelectedItemArr = () => setSelectedItemArr([]);

  const filteredDataByTargetId = (arr: BookMarkListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.bookmarkId === targetId);

  const filteredDataByNotTargetId = (arr: BookMarkListData[], targetId: number) =>
    arr.filter((arrItem) => arrItem.bookmarkId !== targetId);

  const handleDeleteSelectedItems = () => {
    const selectedBookMarkIds = selectedItemArr.map((item) => item.bookmarkId)
    deleteBookMarkItemMutation.mutate(selectedBookMarkIds.join(","))
    const filteredData = wishListData.filter((item) => {
      return selectedItemArr.map((picked) => picked.bookmarkId).indexOf(item.bookmarkId) === -1;
    });
    setWishListData(filteredData);
    resetSelectedItemArr();
  };

  if (isError) return "error"  

  return (
    <div className="flex w-full flex-col items-center"> 
      <MainLayout>
        <div className="w-full max-w-[1200px]">
          <div className="flex w-full flex-col px-60 mobile:px-15 tablet:px-40">
            <div className="text-20 font-bold text-black">
              찜목록{wishListData.length > 0 && `(${wishListData.length})`}
            </div>
            {wishListData.length > 0 && (
              <BookMarkedHeader
                wishListData={wishListData}
                selectedItemArr={selectedItemArr}
                resetSelectedItemArr={resetSelectedItemArr}
                setSelectedItemArr={setSelectedItemArr}
                handleDeleteSelectedItems={handleDeleteSelectedItems}
              />
            )}
            {wishListData.length > 0 ? (
              <div
                className="tablet: grid grid-cols-2 gap-x-20 gap-y-20 mobile:grid-cols-1 mobile:gap-y-10
                      tablet:grid-cols-1">
                {wishListData.map((item) => {
                  const selectedItems = filteredDataByTargetId(
                    selectedItemArr,
                    item.bookmarkId,
                  );
                  const pickedNum = selectedItems.map((item) => item.bookmarkId)[0];
                  return (
                    <div
                      key={item.bookmarkId}
                      className={`relative flex items-center border-2 pb-43 pr-82 pt-40 ${item.bookmarkId === pickedNum ? 'border-green' : 'border-gray-1'
                        } rounded-[10px] bg-white`}>
                      <div
                        className="absolute right-10 right-20 top-20 cursor-pointer mobile:top-10"
                        onClick={() => {
                          deleteBookMarkItemMutation.mutate(String(item.bookmarkId))
                          const filteredWishListData =
                            filteredDataByNotTargetId(wishListData, item.bookmarkId);
                          setWishListData(filteredWishListData);
                        }}>
                        <Image
                          src="/icons/Close.svg"
                          alt="엑스"
                          width={24}
                          height={24}
                        />
                      </div>
                      <div
                        className="mx-20 w-20 mobile:mx-10"
                        onClick={() => {
                          setSelectedItemArr((prev) => [...prev, item]);
                          const targetIdx = selectedItemArr.findIndex(
                            (clickedItem) => clickedItem.bookmarkId === item.bookmarkId,
                          );

                          if (targetIdx !== -1) {
                            selectedItemArr.splice(targetIdx, 1);
                            setSelectedItemArr([...selectedItemArr]);
                          }
                        }}>
                        <div className="h-20 w-20 cursor-pointer">
                          <Image
                            src={
                              item.bookmarkId === selectedItems[0]?.bookmarkId
                                ? CheckedCheckBoxIcon
                                : CheckBoxIcon
                            }
                            alt="체크아이콘"
                            width={20}
                            height={20}
                          />
                        </div>
                      </div>
                      <div className="flex gap-x-20 rounded-[10px]">
                        <PreviewBookInfo size="sm" />
                        <div className="mobile:w- flex w-274 flex-col gap-y-8 mobile:w-147">
                          <div className="line-clamp-2 break-all text-15 font-bold text-black">
                            {item.bookTitle}
                          </div>
                          <span className="overflow-hidden text-ellipsis whitespace-nowrap text-gray-3">
                            {item.authors.join(',')}
                          </span>
                          <div className="flex">
                            <BookRating rating={item.averageRating} />
                          </div>
                          <span className="text-14">[{item.categories.join(',')}]</span>
                          <span className="text-color text-14 font-bold">
                            {threeDigitCommma(item.price)}원
                          </span>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            ) : (
              <div className="mt-120 w-full">
                <p className="text-center text-gray-4">찜한 상품이 없어요</p>
              </div>
            )}
          </div>
          </div>
        </MainLayout>      
      <div ref={ref} className="h-5"></div>
    </div>
  );
}


export default BookMarkedPage;
