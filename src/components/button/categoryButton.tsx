import Image from 'next/image';
import IconCategory from '@/public/icons/CategoryIcon.svg';

function CategoryButton() {
  return (
    <button className="inline-flex flex-center gap-10 ">
      <Image src={IconCategory} width={18} height={18} alt="카테고리 버튼" />
      <div className=" mobile:hidden">카테고리</div>
    </button>
  );
}
export default CategoryButton;
