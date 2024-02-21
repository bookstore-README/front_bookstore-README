import { MouseEventHandler, useState } from 'react';
import { GenreProps } from '@/pages/api/mock';
export interface GenreButtonProps extends GenreProps {
  editMode?: boolean;
  onClick: MouseEventHandler<HTMLButtonElement>;
  disabled?: boolean;
}

function GenreButton({
  title,
  selected,
  editMode,
  onClick,
  disabled,
}: GenreButtonProps) {
  return (
    <button
      className={`text-13 flex-center h-33 w-fit whitespace-nowrap rounded-[53px] border ${
        selected ? 'border-black' : 'border-gray-1'
      } pc:text-14 ${editMode ? 'hover:border-primary hover:text-primary' : ''}`}
      onClick={onClick}
      disabled={disabled}>
      <div className="mx-30">{title}</div>
    </button>
  );
}

export default GenreButton;
