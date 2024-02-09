import { useState } from 'react';
import GenreButton from '@/components/button/genre/genreButton';
import { ReadMeGenreList } from '@/pages/api/mock';
import EditToggleButton from '@/components/button/editToggleButton';
import { notify } from '@/components/toast/toast';

function GenreSection() {
  const [isEditMode, setEditMode] = useState(false);
  const genres = ReadMeGenreList.genreList;

  const handleEditModeToggle = () => {
    setEditMode((prev) => !prev);
    // 성공시 토스트 메시지 띄우기
    // TODO: isEditMode 조건을 api 연결 성공시로 변경
    if (isEditMode) {
      notify({
        type: 'success',
        text: '선호장를 변경했어요 📙',
      });
    }
  };

  const getButtonLayoutClass = () => {
    return 'flex-center flex-wrap pc:w-[1028px] tablet:w-[688px] mobile:w-331 gap-4';
  };

  return (
    <div className="flex-center flex-col">
      <div className="mb-28 text-20 font-bold">선호장르 선택</div>

      <div className={`${getButtonLayoutClass()}`}>
        {genres.map((genre, index) => (
          <GenreButton
            key={index}
            title={genre.title}
            selected={genre.selected}
            editMode={isEditMode}
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
