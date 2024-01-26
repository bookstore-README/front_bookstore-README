import { useState } from 'react';
import GenreButton from '@/components/button/genreButton';
import { ReadMeGenreList } from '../api/mock';

export default function Genre() {
  const [isEditMode, setEditMode] = useState(false);
  const genres = ReadMeGenreList.genreList;

  const handleEditModeToggle = () => {
    setEditMode((prev) => !prev);
  };

  const getButtonLayoutClass = () => {
    return 'pc:grid pc:grid-cols-10 pc:gap-4 tablet:grid tablet:grid-cols-6 tablet:gap-4 mobile:grid mobile:grid-cols-3 mobile:gap-4';
  };
  return (
    <div className="flex-col">
      <div>선호장르 선택</div>
      <button onClick={handleEditModeToggle}>
        {isEditMode ? '수정 완료' : '수정하기'}
      </button>
      <div className={`flex flex-wrap ${getButtonLayoutClass()}`}>
        {genres.map((genre, index) => (
          <GenreButton
            key={index}
            title={genre.title}
            selected={genre.selected}
            editMode={isEditMode}
          />
        ))}
      </div>
    </div>
  );
}
