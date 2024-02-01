import Image from 'next/image';
import CategoryIcon from '@/public/icons/CategoryIcon.svg';

interface CategoryButtonProps {
  onClick: () => void;
}
function CategoryTabButton({ onClick }: CategoryButtonProps) {
  return (
    <button className="flex-center gap-10" onClick={onClick}>
      <Image src={CategoryIcon} width={18} height={18} alt="카테고리 버튼" />
      <div className="font-bold flex mobile:hidden items-center">카테고리</div>
    </button>
  );
}
export default CategoryTabButton;
