import { SetStateAction, useState } from 'react';
import Link from 'next/link';
import SelectedAllButton from '@/components/button/header/selectedAllButton';
import CategoryButton from '@/components/button/header/categoryButton';
import { CategoryListAtom } from '@/store/state';
import { useAtom } from 'jotai';
import useCheckCategoryUrl from '@/hooks/useCheckCategoryUrl';

function CategoryTab() {
  const [categoryList] = useAtom(CategoryListAtom);
  const { mainId } = useCheckCategoryUrl();
  const [selectedCategory, setSelectedCategory] = useState<
    'domestic' | 'foreign'
  >(mainId ? 'foreign' : 'domestic');
  const selectedAll =
    selectedCategory == 'domestic' ? '국내도서 전체보기' : '외국도서 전체보기';

  const handleCategoryClick = (categoryType: SetStateAction<string>) => {
    if (categoryType === 'domestic') {
      setSelectedCategory('domestic');
    } else {
      setSelectedCategory('foreign');
    }
  };
  const getButtonStyle = (categoryType: string) => ({
    borderBottom:
      selectedCategory === categoryType
        ? '2px solid green'
        : '2px solid transparent',
    color: selectedCategory === categoryType ? 'green' : 'black',
    marginBottom: '-22px',
    '@screen tablet': {
      marginBottom: '-33px',
    },
  });

  const getLinkLayoutClass = () => {
    return 'bg-white pc:grid pc:grid-cols-4 pc:gap-4 tablet:grid tablet:grid-cols-4 tablet:gap-x-16 mobile:grid mobile:grid-cols-2 mobile:gap-4 ';
  };

  return (
    <div className="z-100 relative mx-15 flex min-h-fit flex-wrap rounded-md border border-t-0 border-gray-1 bg-white opacity-100 mobile:w-280 tablet:mx-30 tablet:h-437 tablet:w-[600px] pc:mx-60 pc:h-437 pc:w-[600px]">
      <div className="flex w-full justify-between border-b border-gray-1">
        <div className="relative mx-30 flex h-60 items-center gap-60 mobile:mx-20 mobile:gap-35">
          <CategoryButton
            label="국내도서"
            onClick={() => {
              handleCategoryClick('domestic');
            }}
            style={getButtonStyle('domestic')}
          />

          <CategoryButton
            label="외국도서"
            onClick={() => {
              handleCategoryClick('foreign');
            }}
            style={getButtonStyle('foreign')}
          />
        </div>
        <div className="mr-30 mt-15 mobile:mt-22">
          <SelectedAllButton
            selectedCategory={selectedCategory}
            selectedAll={selectedAll}
          />
        </div>
      </div>
      <div
        className={`text-13 mx-30 my-20 flex flex-wrap mobile:mx-20 tablet:h-350 pc:h-350 ${getLinkLayoutClass()}`}>
        {categoryList &&
          categoryList[`${selectedCategory}`]?.map((el, ind) => (
            <Link
              href={`/${selectedCategory}${el.link}`}
              key={el?.categoryId ?? ind}>
              {el?.subName}
            </Link>
          ))}
      </div>
    </div>
  );
}

export default CategoryTab;
