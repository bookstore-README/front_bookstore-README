import React from 'react';

interface CategoryButtonProps {
  label: string;
  onClick: () => void;
  selected: boolean; // 새로운 props로 선택 여부를 전달합니다.
}

function CategoryButton({ label, onClick, selected }: CategoryButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`flex-center h-60 gap-x-60 border-b-2 font-bold mobile:h-50 ${selected ? ' border-primary text-primary' : 'border-transparent text-black'}`}>
      {label}
    </button>
  );
}

export default CategoryButton;
