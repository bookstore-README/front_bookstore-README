import Image from 'next/image';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import {
  CusTomBookType,
  PreferredGenre,
  SelectedGenre,
} from '@/types/api/customPageType';
import PreviewBookInfo from '@/components/book/previewBookInfo/previewBookInfo';
import CustomPageGenreButton from '@/components/button/genre/customPageGenreButton';
import Link from 'next/link';
import { filteredBooks } from '@/utils/compareBooks';
import ToolTip from '@/components/dropDown/toolTip';
import VacantCustomLayout from '@/components/layout/vacantCustomLayout';
import { useQuery } from '@tanstack/react-query';
import { getCustomCategoryList } from '@/api/category';
import { getRandomBookList } from '@/api/book';
import Skeleton from '@/components/skeleton/customSkeleton/skeleton';
import MainLayout from '@/components/layout/mainLayout';

function CustomPage() {
  const [genreArr, setGenreArr] = useState<SelectedGenre[]>([]);
  const cusTomSelectedGenreListQuery = useQuery({
    queryKey: ['category'],
    queryFn: () => getCustomCategoryList(),
    select: (data) => data.data,
  });

  const genreList = useMemo(() => {
    try {
      return cusTomSelectedGenreListQuery.data.memberCategory.map(
        (item: PreferredGenre) => {
          return {
            categoryId: item.categoryId,
            title: item.subName,
            selected: false,
          };
        },
      );
    } catch (error) {
      return [];
    }
  }, [cusTomSelectedGenreListQuery.data]);

  const selectedCategoryIds = genreArr
    ?.map((genre: SelectedGenre) => genre.categoryId)
    .join(',');

  const getRandomOneHundredBookList = useQuery({
    queryKey: ['randomBook', genreArr],
    queryFn: () => getRandomBookList(selectedCategoryIds, false),
    enabled: !!selectedCategoryIds,
    select: (data) => filteredBooks(data.data.books),
  });

  useEffect(() => {
    try {
      if (cusTomSelectedGenreListQuery.data.memberCategory.length) {
        const item = cusTomSelectedGenreListQuery.data.memberCategory[0];
        const obj = {
          categoryId: item.categoryId,
          title: item.subName,
          selected: true,
        };
        setGenreArr([obj]);
      }
    } catch (error) {
      setGenreArr([]);
    }
  }, [cusTomSelectedGenreListQuery.data]);

  if (
    cusTomSelectedGenreListQuery.isLoading ||
    Array.isArray(cusTomSelectedGenreListQuery.data)
  )
    return <Skeleton />;

  return (
    <MainLayout>
      <div className="w-full max-w-[1200px]">
        <CustomPageContentsLayout>
          <div
            className="no-scrollbar mb-40 mt-30 flex w-full flex-wrap gap-8 mobile:w-[95vw]
                  mobile:flex-nowrap mobile:overflow-auto">
            {genreList.length > 0 ? (
              genreList?.map((genre: SelectedGenre) => {
                const { title } = genre;
                const selectedTitleArr = genreArr.map((item) => item.title);
                return (
                  <div key={genre.categoryId}>
                    <CustomPageGenreButton
                      categoryId={genre.categoryId}
                      title={genre.title}
                      selected={selectedTitleArr.includes(title)}
                      editMode={true}
                      onClick={() => {
                        if (!selectedTitleArr.includes(title)) {
                          setGenreArr((prev) => [
                            ...prev,
                            {
                              categoryId: genre.categoryId,
                              title,
                              selected: true,
                            },
                          ]);
                        } else {
                          if (genreArr.length > 1) {
                            setGenreArr((prev) =>
                              prev.filter((genre) => genre.title !== title),
                            );
                          }
                        }
                      }}
                    />
                  </div>
                );
              })
            ) : (
              <>
                <div className="mt-120 flex h-482 w-full flex-col items-center justify-center gap-y-10 bg-gray-6 mobile:mt-80 mobile:h-205 tablet:h-324">
                  <div className="mb-20 flex flex-col items-center">
                    <div className="text-20">
                      <span className="font-bold text-primary">맞춤 도서</span>
                      <span className="font-bold text-black">
                        를 추천받아 보세요!
                      </span>
                    </div>
                    <div>선호 장르 분석을 통해 도서를 추천해드려요</div>
                  </div>
                  <div className="rounded-[5px] border-2 border-primary bg-white px-45 py-13 text-primary">
                    <Link href="/mypage/setting/selectGenre">
                      선호 장르 선택하러 가기
                    </Link>
                  </div>
                </div>
              </>
            )}
          </div>
          {genreList.length === 0 ? null : getRandomOneHundredBookList?.data
              ?.length === 0 ? (
            <VacantCustomLayout />
          ) : (
            <div
              className="grid grid-cols-5 gap-x-30 gap-y-40 mobile:grid-cols-2 mobile:gap-x-10
                  mobile:gap-y-30 mobile:pr-15 tablet:grid-cols-4 tablet:gap-x-20">
              {getRandomOneHundredBookList.data?.map((book: CusTomBookType) => {
                return (
                  <div className="flex-center" key={book.bookId}>
                    <PreviewBookInfo
                      size="lg"
                      bookId={book.bookId}
                      image={book.bookImgUrl}
                      title={book.bookTitle}
                      authorList={book.authors}
                      category={[book.categories[1]].join('')}
                      price={book.price}
                      isUnit={true}
                    />
                  </div>
                );
              })}
            </div>
          )}
        </CustomPageContentsLayout>
      </div>
    </MainLayout>
  );
}
type CustomPageContentsLayoutProps = {
  children: ReactNode;
};
export const CustomPageContentsLayout = ({
  children,
}: CustomPageContentsLayoutProps) => {
  return (
    <div className="w-full px-60 mobile:px-0 mobile:pl-15 tablet:px-30">
      <div className="mt-20 flex w-full items-center justify-start gap-x-10">
        <div className="text-20 font-bold text-black">
          내 취향대로 인기도서 골라보기
        </div>
        <ToolTip toolTipText="찜한횟수, 조회수, 책 이름 순입니다">
          <div>
            <Image
              src="/icons/Info.svg"
              alt="정보아이콘"
              width={20}
              height={20}
            />
          </div>
        </ToolTip>
      </div>
      {children}
    </div>
  );
};

export default CustomPage;
