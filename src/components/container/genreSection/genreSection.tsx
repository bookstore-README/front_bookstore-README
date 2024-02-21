import { useEffect, useState } from 'react';
import GenreButton from '@/components/button/genre/genreButton';
import { MemberCategoryType } from '@/pages/api/mock';
import EditToggleButton from '@/components/button/editToggleButton';
import { useGetCustomCategoryList } from '@/api/category';
import { useAtom } from 'jotai';
import { CategoryListAtom } from '@/store/state';
import { useSelectGenre } from '@/hooks/api/useSelectGenre';
interface CustomCategoryListResponse {
  data?: {
    data: {
      memberCategory: MemberCategoryType[];
    };
  };
}

function GenreSection() {
  const [isEditMode, setEditMode] = useState(false);
  const [categoryList] = useAtom(CategoryListAtom);
  const response: CustomCategoryListResponse = useGetCustomCategoryList();

  // 유저가 선택한 카테고리 리스트 가져오기
  let memberCategory: MemberCategoryType[] = [];
  if (response.data && response.data.data) {
    memberCategory = response.data.data.memberCategory;
  }
  // 유저가 선택한 카테고리Id 리스트
  const [selectedGenreIds, setSelectedGenreIds] = useState(
    memberCategory.map((selectedGenre) => selectedGenre.categoryId),
  );
  // 선택된 장르들의 카테고리 id를 서버로 보내는 훅
  const { selectGenre, isPending } = useSelectGenre(selectedGenreIds);

  const handleGenreClick = (categoryId: number) => {
    if (!isEditMode) return;
    setSelectedGenreIds((prevSelectedIds) => {
      const isSelected = prevSelectedIds.includes(categoryId);
      if (isSelected) {
        // 이미 선택된 경우, 배열에서 제거
        return prevSelectedIds.filter((id) => id !== categoryId);
      } else {
        // 선택되지 않은 경우, 배열에 추가
        return [...prevSelectedIds, categoryId];
      }
    });
  };

  const handleEditModeToggle = () => {
    setEditMode((prev) => !prev);
    if (!isEditMode) return;
    selectGenre();
  };

  const getButtonLayoutClass = () => {
    return 'flex-center flex-wrap pc:w-[1028px] tablet:w-[688px] mobile:w-331 gap-4';
  };

  useEffect(() => {
    if (response.data && response.data.data) {
      setSelectedGenreIds(memberCategory.map((genre) => genre.subId));
    }
  }, [response.data]);

  return (
    <div className="flex-center flex-col">
      <div className="mb-28 text-20 font-bold">선호장르 선택</div>

      <div className={`${getButtonLayoutClass()}`}>
        {categoryList?.domestic?.map((category, index) => (
          <GenreButton
            key={index}
            title={category.subName ?? ''}
            selected={selectedGenreIds.includes(category.categoryId || 0)}
            editMode={isEditMode}
            onClick={() => handleGenreClick(category.categoryId || 0)}
            disabled={isPending}
          />
        ))}
      </div>
      <div className="mx-60 ml-auto mt-80">
        <EditToggleButton
          isEditMode={isEditMode}
          onClick={handleEditModeToggle}
        />
      </div>
    </div>
  );
}

export default GenreSection;
